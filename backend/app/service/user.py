from datetime import timedelta

from fastapi import HTTPException, status
from pwdlib import PasswordHash
from pydantic import EmailStr
from sqlmodel import Session, select

from app.api.schemas.user import UserCreate
from app.core.security import Token
from app.database.models import User
from app.utils import generate_access_token

password_hash = PasswordHash.recommended()
ACCESS_TOKEN_EXPIRE_MINUTES: int = 30


class UserService:
    def __init__(self, session: Session):
        self.session = session

    def add(self, user_create: UserCreate):
        data: dict = user_create.model_dump()
        user = User(
            **data,
            password_hash=password_hash.hash(data["password"]),
        )

        self.session.add(user)
        self.session.commit()
        self.session.refresh(user)

        return user

    def _get_user_by_email(self, email: str) -> User | None:
        return self.session.exec(select(User).where(User.email == email)).first()

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
