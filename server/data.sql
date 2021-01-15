CREATE DATABASE zamoraSch;


CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    date DATE, 
    description VARCHAR(255)
);