# Music Editor

## Stack
* Express.js
* Knex.js
* Docker
* PostgreSQL

## Running the app locally
1. `docker-compose up`
2. In the browser, navigate to `http://localhost:3000`

## Running migrations
1. Start a bash session in the app container:
`docker exec -it app sh`
2. Run migrations:
`npm run migrate`
