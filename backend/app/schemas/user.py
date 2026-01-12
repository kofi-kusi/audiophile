from pydantic import BaseModel, EmailStr

class BaseUser(BaseModel):
    name: str
    email: EmailStr

class UserCreate(BaseUser):
    password: str

class UserRead(BaseModel):
    pass