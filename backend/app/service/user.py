from sqlmodel import Session
from app.api.schemas.user import UserCreate
from app.database.models import User

class UserService:
    def __init__(self, session: Session):
        self.session = session

    def add(self, user_create: UserCreate):
        user = User(
            **user_create.model_dump()
        )

        self.session.add(user)
        self.session.commit()
        self.session.refresh(user)

        return user
    