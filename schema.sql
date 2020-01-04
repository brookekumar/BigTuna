DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_email VARCHAR(600) NOT NULL,
    profiles_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (profiles_id) REFERENCES profiles(id)
);

CREATE TABLE profiles (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    industry_id INT NOT NULL,
    zip_code INT  NOT NULL,
    remote_work BOOLEAN DEFAULT 0,

);

CREATE TABLE industries (
    id INT NOT NULL AUTO_INCRMENT,
    industry VARCHAR(255) NOT NULL
)