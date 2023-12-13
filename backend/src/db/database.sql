-- Create the database
CREATE DATABASE tutoring_db;

CREATE TABLE session (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    session_status VARCHAR(255) ,
    start_time DATE ,
    end_time DATE ,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
