DIST = 'dist'

install:
	npm install && bower install && grunt build:dist
clean:
	ls | grep -v $(DIST) | xargs rm

build: install clean
