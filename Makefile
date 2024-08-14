MAKEFLAGS+="-j 2"

init:
	poetry install --no-root
	@npm --prefix "frontend" install

dev-python:
	uvicorn main:app --host 0.0.0.0 --port 5555 --reload

dev-vue:
	@npm run --prefix "frontend" dev

dev: dev-python dev-vue

prod-python:
	uvicorn main:app --host 0.0.0.0 --port 5555

prod-vue:
	@npm run --prefix "frontend" build

prod: prod-vue prod-python
