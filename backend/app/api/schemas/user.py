from pydantic import BaseModel, EmailStr
import uuid

class BaseUser(BaseModel):
    name: str
    email: EmailStr

class UserCreate(BaseUser):
    password: str

class UserPublic(BaseUser):
    id: uuid.UUID