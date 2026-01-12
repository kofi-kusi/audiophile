from fastapi import APIRouter

from ..schemas.tag import APITag
from ..schemas.user import UserCreate, UserRead

router = APIRouter(prefix="/user", tags=[APITag.USER])


@router.post("/signup", response_model=UserRead)
def register_user(user: UserCreate):
    pass
