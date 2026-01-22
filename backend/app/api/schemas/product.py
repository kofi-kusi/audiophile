from uuid import UUID

from pydantic import BaseModel

from app.database.models import (
    CategoryEnum,
    Gallery,
    ImageSet,
    IncludedItem,
    RelatedProduct,
)


class BaseProduct(BaseModel):
    slug: str
    name: str

    image: ImageSet
    category: CategoryEnum
    category_image: ImageSet

    is_new: bool
    price: int

    description: str
    features: str

    includes: list[IncludedItem]
    gallery: Gallery
    others: list[RelatedProduct]


class ProductCreate(BaseProduct):
    pass


class ProductPublic(BaseProduct):
    id: UUID
