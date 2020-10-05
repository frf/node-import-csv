## Create migrations with files em folder migrations and file config knexfile.ts overwrite commands
"knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
"knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"
