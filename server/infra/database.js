const pgp = require('pg-promise')()
const db = pgp({
    user: 'postgres',
    password: "15972159",
    host: 'localhost',
    port: 5432,
    database: 'postgres'

})

module.exports = db