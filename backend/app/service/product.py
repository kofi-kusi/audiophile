from fastapi import HTTPException, status
from sqlmodel import Session, select

from app.api.schemas.product import ProductCreate
from app.database.models import CategoryEnum, Product


class ProductService:
    def __init__(self, session: Session):
        self.session = session

    def add_product(self, product: ProductCreate):
        db_product = Product(**product.model_dump())

        self.session.add(db_product)
        self.session.commit()
        self.session.refresh(db_product)

        return db_product

    def get_caterory_products(self, category: CategoryEnum):
        products = self.session.exec(
            select(Product).where(Product.category == category)
        ).all()
        return products

    def get_product(self, category: CategoryEnum, slug: str) -> Product:
        product = self.session.exec(
            select(Product).where(Product.category == category, Product.slug == slug)
        ).one()

        if not product:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"No product with slug: {slug}",
            )

        return product
