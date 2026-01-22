from typing import Annotated
from uuid import UUID

from fastapi import BackgroundTasks, Depends, HTTPException, status
from sqlmodel import Session

from app.core.security import oauth2_scheme
from app.database.models import User
from app.database.redis import is_jti_blacklisted
from app.database.session import get_session
from app.service.product import ProductService
from app.service.user import UserService
from app.utils import decode_access_token

SessionDep = Annotated[Session, Depends(get_session)]


def get_user_service(session: SessionDep, tasks: BackgroundTasks):
    return UserService(session, tasks)


def _get_access_token_data(token: str) -> dict:
    payload: dict | None = decode_access_token(token=token)

    if payload is None or is_jti_blacklisted(payload["jti"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
        )
    return payload


def get_user_access_token(token: Annotated[str, Depends(oauth2_scheme)]) -> dict:
    return _get_access_token_data(token=token)


def get_current_user(
    token_data: Annotated[dict, Depends(get_user_access_token)],
    session: SessionDep,
):
    user = session.get(User, UUID(token_data["user"]["id"]))
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return user


def get_product_sercive(session: SessionDep):
    return ProductService(session)


UserServiceDep = Annotated[
    UserService,
    Depends(get_user_service),
]

UserDep = Annotated[User, Depends(get_current_user)]

ProductServiceDep = Annotated[
    ProductService,
    Depends(get_product_sercive),
]
