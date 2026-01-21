from datetime import datetime, timezone
from typing import Annotated

from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm

from app.core.security import Token
from app.database.redis import add_jti_to_blacklist

from ..deps import UserDep, UserServiceDep, get_user_access_token
from ..schemas.tag import APITag
from ..schemas.user import UserCreate, UserPublic

router = APIRouter(prefix="/user", tags=[APITag.USER])


### Register a new user
@router.post("/signup", response_model=UserPublic)
def register_user(user: UserCreate, sevice: UserServiceDep):
    return sevice.add(user)


### Get access token
@router.post("/token")
async def login(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    service: UserServiceDep,
) -> Token:
    return service.token(email=form_data.username, password=form_data.password)


### Verify user email
@router.get("/verify")
def verify_user_email(token: str, service: UserServiceDep):
    service.verify_email(token)
    return {
        "detail": "Email verified"
    }


### Get user info
@router.get("/me")
def read_user(user: UserDep):
    return user


### Email password reset link
@router.get("/forgot_password")
def forgot_password():
    pass


### Password reset form
@router.get("reset_password_form")
def get_reset_password_form():
    pass


### Logout user
@router.get("/logout")
def logout_user(
    token_data: Annotated[dict, Depends(get_user_access_token)],
):
    jti: str = token_data["jti"]
    time_remaining = int(token_data["exp"] - datetime.now(timezone.utc).timestamp())

    add_jti_to_blacklist(jti=jti, time_remaining=time_remaining)
    return {"detail": "Successfully logged out"}
