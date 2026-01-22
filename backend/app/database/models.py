from datetime import datetime, timezone
from enum import Enum
from typing import Any
from uuid import UUID, uuid4

from pydantic import EmailStr
from sqlmodel import Field, SQLModel


class CategoryEnum(str, Enum):
    headphones = "headphones"
    speakers = "speakers"
    earphones = "earphones"


class User(SQLModel, table=True):
    id: UUID = Field(
        default_factory=uuid4,
        primary_key=True,
    )

    name: str
    email: EmailStr
    email_verified: bool = Field(default=False)
    password_hash: str

    created_at: datetime = Field(default=datetime.now(timezone.utc))


class Product(SQLModel, table=True):
    id: UUID = Field(
        default_factory=uuid4,
        primary_key=True,
    )

    slug: str
    name: str
    image_urls: dict[str, str]
    category: CategoryEnum
    categoryImage_urls: dict[str, str]
    new: bool
    price: int
    description: str
    features: str
    includes: list[dict[str, Any]]
    gallery: dict[str, dict[str, str]]
    others: list[dict[str, Any]]
