.PHONY: run test

app/models.py: schema.json
	$(VENV)/datamodel-codegen --input schema.json --output app/models.py --class-name General --input-file-type jsonschema

run: app/models.py venv
	$(VENV)/fastapi dev --reload

test: app/models.py venv
	$(VENV)/python -m unittest tests/test_*.py


include Makefile.venv
Makefile.venv:
	curl \
		-o Makefile.fetched \
		-L "https://github.com/sio/Makefile.venv/raw/v2023.04.17/Makefile.venv"
	echo "fb48375ed1fd19e41e0cdcf51a4a0c6d1010dfe03b672ffc4c26a91878544f82 *Makefile.fetched" \
		| sha256sum --check - \
		&& mv Makefile.fetched Makefile.venv
