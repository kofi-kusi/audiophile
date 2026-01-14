from typing import Annotated

from app.database.session import get_session
from app.service.user import UserService
from fastapi import Depends
from sqlmodel import Session

SessionDep = Annotated[Session, Depends(get_session)]


def get_user_service(session: SessionDep):
    return UserService(session)


UserServiceDep = Annotated[
    UserService,
    Depends(get_user_service),
]
