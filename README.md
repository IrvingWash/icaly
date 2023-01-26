# ICALY-Server

## Description
An app to track videogames you've played, or want to play. Work in progress

## Server stack
- NestJS
- TypeORM
- PostgreSQL
- TypeScript
- [IGDB API](https://www.igdb.com/api) (but the architecture is made to consume any API).
- JWT Authorization
- Husky

## Launching
There are two options:
- Using npm scripts provided in `package.json`
- Using Docker (coming soon)

## Environment variables

| Name               | Example         | Description                                                                               |
| ------------------ | --------------- | ----------------------------------------------------------------------------------------- |
| PORT               | 3000            | The port the server will listen to                                                        |
| CLIENT_URL         | http://icaly.io | The Frontend URL to configure CORS                                                        |
| ACCESS_SECRET      | orgone          | A secret for generating access token                                                      |
| REFRESH_SECRET     | krallice        | A secret for generating refresh token                                                     |
| DB_TYPE            | postgres        | A DB to connect to. Currently is an enum of `postgres \| mongodb`                         |
| DB_HOST            | localhost       | A host where the DB is available                                                          |
| DB_PORT            | 5432            | A port the DB listens to                                                                  |
| DB_NAME            | icaly           | The name of the database                                                                  |
| DB_USER            | postgres        | The username of a DB user, who created the databases                                      |
| DB_PASSWORD        | root            | The password of the aforementioned user                                                   |
| DB_SYNCHRONIZE     | boolean         | Allow to sync TypeORM with the DB. Must be set to false in production                     |
| GAME_DB            | igdb            | The name of a Videogame DB API. Currently only `igdb` is supported                        |
| IGDB_CLIENT_ID     |                 | Client ID for IGDB. [Here's how to get them](https://api-docs.igdb.com/#account-creation) |
| IGDB_CLIENT_SECRET |                 | Client secret. The instruction above covers this too                                      |