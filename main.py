import os

from fastapi import FastAPI

from fastapi.exceptions import RequestValidationError

from starlette.staticfiles import StaticFiles

from starlette.middleware.sessions import SessionMiddleware

from inertia_dependency import inertia_config

from inertia import (
    inertia_version_conflict_exception_handler,
    inertia_request_validation_exception_handler,
    InertiaVersionConflictException,
)

from app.routes import home

app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key="secret_key")

app.add_exception_handler(
    InertiaVersionConflictException,
    inertia_version_conflict_exception_handler,  # type: ignore[arg-type]
)

app.add_exception_handler(
    RequestValidationError,
    inertia_request_validation_exception_handler,  # type: ignore[arg-type]
)

manifest_json = os.path.join(
    os.path.dirname(__file__), "frontend", "dist", "client", "manifest.json"
)

vue_dir = (
    os.path.join(os.path.dirname(__file__), "frontend", "dist", "client")
    if inertia_config.environment != "development" or inertia_config.ssr_enabled is True
    else os.path.join(os.path.dirname(__file__), "frontend", "src")
)

app.mount("/src", StaticFiles(directory=vue_dir), name="src")

app.mount(
    "/assets", StaticFiles(directory=os.path.join(vue_dir, "assets")), name="assets"
)

app.include_router(home.router)
