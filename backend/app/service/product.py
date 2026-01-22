from sqlmodel import Session
from app.database.models import CategoryEnum

class ProductService:
    def __init__(self, session: Session):
        self.session = session

    def get_caterory_products(self, category: CategoryEnum):
        return {
            "name": "xy earphones",
            "price": 333,
            "cat": category
        }