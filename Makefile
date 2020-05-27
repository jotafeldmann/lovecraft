GO_TO_SOURCE := cd source

default:
	make example/links

example/curl:
	$(GO_TO_SOURCE); npm start -- -u http://uol.com.br

example/links:
	$(GO_TO_SOURCE); npm start -- -u http://uol.com.br -r links

install:
	$(GO_TO_SOURCE); npm install

run:
	$(GO_TO_SOURCE); npm start
