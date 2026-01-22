from fastapi import APIRouter
from ..schemas.tag import APITag
from app.database.models import CategoryEnum
from ..deps import ProductServiceDep

router = APIRouter(prefix="/{category}", tags=[APITag.PRODUCT])

@router.get("/")
def get_category_products(category: CategoryEnum, service: ProductServiceDep):
    return service.get_caterory_products(category)
   