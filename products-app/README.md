# Product App
A small product list app written on node.js + express + mongo DB, configured to run on a docker container.

## Instructions
To run locally
```
docker-compose up
```
## Endpoints
Currently supports the following endpoints (swagger or [apiDoc](http://apidocjs.com) pending)
* host/ -> Product List
* host/:id -> Product details
* host/create -> Create product
* host'/:id/update -> Update product
* host/:id/delete -> Delete product
