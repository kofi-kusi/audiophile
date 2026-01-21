from datetime import timedelta
from uuid import UUID

from fastapi import BackgroundTasks, HTTPException, status
from pwdlib import PasswordHash
from pydantic import EmailStr
from sqlmodel import Session, select

from app.api.schemas.user import UserCreate
from app.core.security import Token
from app.database.models import User
from app.service.notification import NotificationService
from app.utils import (
    decode_url_safe_token,
    generate_access_token,
    generate_url_safe_token,
)

password_hash = PasswordHash.recommended()
ACCESS_TOKEN_EXPIRE_MINUTES: int = 4


class UserService:
    def __init__(self, session: Session, tasks: BackgroundTasks):
        self.session = session
        self.notifications = NotificationService(tasks)

    def add(self, user_create: UserCreate):
        data: dict = user_create.model_dump()
        user = User(
            **data,
            password_hash=password_hash.hash(data["password"]),
        )

        self.session.add(user)
        self.session.commit()
        self.session.refresh(user)

        token = generate_url_safe_token({"id": str(user.id)})

        self.notifications.send_email_with_template(
            subject="Verify Your Account",
            recipients=[user.email],
            context={
                "name": user.name,
                "verification_url": f"http://localhost:8000/user/verify?token={token}",
            },
            template_name="mail_verify_email.html",
        )

        return user

    def _get_user_by_email(self, email: str) -> User | None:
        return self.session.exec(select(User).where(User.email == email)).first()

    def verify_email(self, token: str):
        data = decode_url_safe_token(token)
        if data is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token",
            )
        id = UUID(data["id"])

        user: User | None = self.session.get(User, id)
        if user:
            user.email_verified = True
            self.session.add(user)
            self.session.commit()
            self.session.refresh(user)

    def token(self, email: EmailStr, password: str) -> Token:
        db_user = self._get_user_by_email(email)

        if db_user is None or not password_hash.verify(password, db_user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        token = generate_access_token(
            data={"user": {"name": db_user.name, "id": str(db_user.id)}},
            expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
        )

        return Token(access_token=token, token_type="bearer")
