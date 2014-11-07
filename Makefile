DIST = 'dist'

install:
	npm install && bower install && grunt build:dist
clean:
	ls | grep -v $(DIST) | xargs rm -rf
expand:
	cp -r $(DIST)/* ./ && rm -rf $(DIST)

build: install clean expand
