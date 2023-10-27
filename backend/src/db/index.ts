// connecting the db to the sever with pool
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'Mehdi0507',
    host: 'localhost',
    port: 5432,
    database: 'tutoring_db',
});

export default pool;