from fastapi import status

from fastapi.responses import JSONResponse

from inertia import InertiaResponse, lazy

from app.config.router import router

from inertia_dependency import InertiaDependency


@router.get("/status")
async def status():
    return JSONResponse(status_code=status.HTTP_200_OK, content={"status": "okay"})


@router.get("/", response_model=None)
async def index(inertia: InertiaDependency) -> InertiaResponse:
    props = {
        "message": "hello from index",
        "lazy_prop": lazy(lambda: "hello from lazy prop"),
    }

    return await inertia.render("IndexPage", props)
