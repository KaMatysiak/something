const pgPromise = require('pg-promise')

const connStr = 'postgresql://postgres@127.0.0.1:49402/moto-app'

const pgp = pgPromise({})
const psql =pgp(connStr)

exports.psql = psql