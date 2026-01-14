from fastapi import APIRouter

from ..schemas.tag import APITag
from ..schemas.user import UserPublic, UserCreate
from ..deps import UserServiceDep

router = APIRouter(prefix="/user", tags=[APITag.USER])


### Register a new user
@router.post("/signup", response_model=UserPublic)
def register_user(user: UserCreate, sevice: UserServiceDep):
    return sevice.add(user)


### Verify user email
@router.get("/verify")
def verify_user_email():
    pass


### Get user info
@router.get("/me")
def read_user():
    pass


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
