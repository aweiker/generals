FROM python:3.12-slim

COPY . /app
WORKDIR /app
EXPOSE 8000

RUN pip install --no-cache-dir -r requirements.txt

RUN datamodel-codegen --input schema.json --output app/models.py --class-name General --input-file-type jsonschema
ENTRYPOINT [ "fastapi", "run" ]
