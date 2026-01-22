from datetime import datetime, timezone
from enum import Enum
from uuid import UUID, uuid4

from pydantic import EmailStr
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import JSON
from sqlmodel import Field, SQLModel


class CategoryEnum(str, Enum):
    headphones = "headphones"
    speakers = "speakers"
    earphones = "earphones"


class ImageSet(SQLModel):
    mobile: str
    tablet: str
    desktop: str


class IncludedItem(SQLModel):
    quantity: int
    item: str


class RelatedProduct(SQLModel):
    slug: str
    name: str
    image: ImageSet


class Gallery(SQLModel):
    first: ImageSet
    second: ImageSet
    third: ImageSet


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
    id: UUID = Field(default_factory=uuid4, primary_key=True)

    slug: str = Field(index=True, unique=True)
    name: str

    image: ImageSet = Field(sa_column=Column(JSON))
    category: CategoryEnum
    category_image: ImageSet = Field(sa_column=Column(JSON))

    is_new: bool = Field(alias="new")
    price: int

    description: str
    features: str

    includes: list[IncludedItem] = Field(sa_column=Column(JSON))
    gallery: Gallery = Field(sa_column=Column(JSON))
    others: list[RelatedProduct] = Field(sa_column=Column(JSON))
