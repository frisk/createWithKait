DIST = 'dist'

install:
	npm install && bower install
clean:
	ls | grep -v $(DIST) | xargs rm -rf
expand:
	cp -r $(DIST)/* ./ && rm -rf $(DIST)
dist:
	grunt build:dist
start: install
	grunt serve
build: install dist clean expand
