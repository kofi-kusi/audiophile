from fastapi import FastAPI
from scalar_fastapi import get_scalar_api_reference

from .api.routers import user

app = FastAPI(
    title="Audiophile Shop",
    redoc_url=None,
)

app.include_router(user.router)


@app.get("/scalar", include_in_schema=False)
def get_scalar_docs():
    return get_scalar_api_reference(
        openapi_url=app.openapi_url,
        title="Audiophile Shop",
    )
