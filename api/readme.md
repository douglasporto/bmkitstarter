# KitStarter Brain & Mind _[API]_

Api for a applicatin starter

## Required

- [Yarn](https://yarnpkg.com/lang/en/)
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)


## Init App
- Install depends
  `Yarn install`

## Docker init

### Postgree
`docker run --name database_bmstarter -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=bmstarter -p 5432:5432 -d postgres`

**__Run the migrations__**
  `yarn migrate`


### MongoDb
`docker run --name mongo_bmstarter -p 27017:27017 -d -t mongo`

### Commands important

 - Fix ESLint `yarn eslint --fix src --ext .js`

## Run the API
 - `yarn dev`

## Run the Tests
 - This api was made on TDD (test driven development) with [Jest.js](https://jestjs.io/)
 - `yarn test`

** By [DouglasPorto](http://douglasporto.com.br) **
