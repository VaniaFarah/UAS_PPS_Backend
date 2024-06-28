const { pool } = require("./db");

const RegisterService = async (data) => {
  let db, query, values;
  try {
    db = await pool.connect();
    query = `INSERT INTO "user" (
            name,
            email,
            password,
            nik,
            phone_number,
            address,
            birth_date,
            created_by
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

    values = [
      data.name,
      data.email,
      data.password,
      data.nik,
      data.phone_number,
      data.address,
      data.birth_date,
      data.created_by,
    ];

    await db.query(query, values);
  } catch (error) {
    throw error;
  } finally {
    db.release();
  }

  return;
};

const LoginService = async (data) => {
  let db, query, values, user;
  try {
    db = await pool.connect();
    query = `SELECT * FROM "user" where (name = $1 OR email = $2)`;

    values = [data.name, data.email];

    user = await db.query(query, values);

    if (user.rows[0].password !== data.password) {
      return "Invalid username or password";
    }
  } catch (error) {
    throw error;
  } finally {
    db.release();
  }

  return;
};

module.exports = {
  RegisterService,
  LoginService,
};
