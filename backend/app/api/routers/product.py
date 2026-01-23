from fastapi import APIRouter

from app.database.models import CategoryEnum

from ..deps import ProductServiceDep
from ..schemas.product import ProductCreate, ProductPublic
from ..schemas.tag import APITag

router = APIRouter(prefix="", tags=[APITag.PRODUCT])


@router.post(path="/", response_model=ProductPublic)
def add_product(product: ProductCreate, service: ProductServiceDep):
    return service.add_product(product)


@router.get("/{category}", response_model=list[ProductPublic])
def get_category_products(category: CategoryEnum, service: ProductServiceDep):
    return service.get_caterory_products(category)


@router.get("/{category}/{slug}")
def get_product(category: CategoryEnum, slug: str, service: ProductServiceDep):
    return service.get_product(category, slug)
