# IT Landscape Docker Compose example

In this repository you can find a *very* basic example of a NodeJS backend that is listening to port 3000 using Express.
On `GET` requests it will return a value from a connected MongoDB. On a `POST` request, it will update the value in the MongoDB with something else.

## Docker Compose

There is a `docker-compose.yml` included in the root of the project. 
This file will start a MongoDB and a NodeJS backend together.

To start up the stack, run the following command:

```shell
docker-compose up --build
```

To stop the stack, run the following command:

```shell
docker-compose down
```