const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "pps",
  password: "12345",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
module.exports = {
  pool,
};
