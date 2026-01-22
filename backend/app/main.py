from fastapi import FastAPI
from scalar_fastapi import get_scalar_api_reference

from .api.main import master_router

app = FastAPI(
    title="Audiophile Shop",
    docs_url=None,
    redoc_url=None,
)


@app.get("/docs", include_in_schema=False)
def get_scalar_docs():
    return get_scalar_api_reference(
        openapi_url=app.openapi_url,
        title="Audiophile Shop",
    )


app.include_router(master_router)
