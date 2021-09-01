const knex = require("knex")({
  client: "pg",
  connection: {
    user: "postgres",
    host: "localhost",
    database: "market_cubos",
    password: "1234",
  },
});

module.exports = knex;
