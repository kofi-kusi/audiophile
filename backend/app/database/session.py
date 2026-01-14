from sqlmodel import Session, SQLModel, create_engine

from ..config import db_settings

# Create a database engine to connect with database
engine = create_engine(
    url=db_settings.POSTGRES_URL,
    echo=True,  # Log sql queries
)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
