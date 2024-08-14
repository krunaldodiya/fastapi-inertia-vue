import os

from fastapi import Depends

from typing import Annotated

from inertia import InertiaConfig, inertia_dependency_factory, Inertia

manifest_json = os.path.join(
    os.path.dirname(__file__), "webapp", "dist", "client", "manifest.json"
)

inertia_config = InertiaConfig(
    manifest_json_path=manifest_json,
    environment=os.getenv("ENVIRONMENT"),
    use_flash_messages=True,
    use_flash_errors=True,
    use_typescript=True,
)

inertia_dependency = inertia_dependency_factory(inertia_config)

InertiaDependency = Annotated[Inertia, Depends(inertia_dependency)]
