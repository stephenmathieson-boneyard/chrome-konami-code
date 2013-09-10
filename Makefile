
build: components index.js chrome-konami-code.css manifest.json
	@component build --dev
	@echo "\n\nrequire('chrome-konami-code')" >> build/build.js
	@cp manifest.json build/

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
