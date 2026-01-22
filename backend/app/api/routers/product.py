from fastapi import APIRouter

from app.database.models import CategoryEnum

from ..deps import ProductServiceDep
from ..schemas.tag import APITag
from ..schemas.product import ProductCreate, ProductPublic

router = APIRouter(prefix="", tags=[APITag.PRODUCT])


@router.post(path="/", response_model=ProductPublic)
def add_product(product: ProductCreate, service: ProductServiceDep):
    return service.add_product(product)


@router.get("/{category}")
def get_category_products(category: CategoryEnum, service: ProductServiceDep):
    return service.get_caterory_products(category)

