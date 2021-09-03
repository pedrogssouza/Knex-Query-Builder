const knex = require("knex")({
  client: "pg",
  connection: {
    user: "ieipqykdorldzs",
    host: "ec2-54-242-43-231.compute-1.amazonaws.com",
    database: "d4t5ukjudg5q91",
    password:
      "667069e0385f1b6cef3f5eec0767fade24659fc623e68374bc3f130c5736bc7e",
    port: 5432,
  },
});

module.exports = knex;
