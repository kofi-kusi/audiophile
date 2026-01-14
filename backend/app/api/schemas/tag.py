from enum import Enum

class APITag(str, Enum):
    USER = "User"
    ORDER = "Order"
    PRODUCT = "Product"
