MAKEFLAGS+="-j 2"

init:
	pip install -r requirements.txt
	@npm --prefix "webapp" install

dev-python:
	uvicorn main:app --host 0.0.0.0 --port 5555 --reload

dev-vue:
	@npm run --prefix "webapp" dev

dev: dev-python dev-vue

prod-python:
	uvicorn main:app --host 0.0.0.0 --port 5555

prod-vue:
	@npm run --prefix "webapp" build

prod: prod-vue prod-python
