from typing import Annotated

from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm

from ..deps import UserServiceDep, UserDep
from ..schemas.tag import APITag
from ..schemas.user import UserCreate, UserPublic
from app.core.security import Token

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
) :
    return service.token(email=form_data.username, password=form_data.password)


### Verify user email
@router.get("/verify")
def verify_user_email():
    pass


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
def logout_user():
    pass
