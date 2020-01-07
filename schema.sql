DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_email VARCHAR(600) NOT NULL,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    scores_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (scores_id) REFERENCES scores(id)
);

CREATE TABLE scores (

);

