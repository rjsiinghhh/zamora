CREATE DATABASE zamoraSch;


CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    date DATE, 
    description VARCHAR(255)
);

INSERT INTO todo (description) VALUES ('First post, not much to do today expect getting this all set up in the backend');

INSERT INTO todo (date, description) VALUES ('2016-03-02 12:05:00', 'Second post, trying to get this date working');

