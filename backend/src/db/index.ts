import { Pool } from "pg";

require('dotenv').config({ path: __dirname + '/.env' }); // .env file is on the same dir

const { DATABASE_URL } = process.env;
const pool = new Pool({
    connectionString: DATABASE_URL,
});
export default pool;