from sqlmodel import create_engine, Session, SQLModel
from ..config import db_settings
from .models import User


# Create a database engine to connect with database
engine = create_engine(
    url= db_settings.POSTGRES_URL,
    echo=True,  # Log sql queries
)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
    


