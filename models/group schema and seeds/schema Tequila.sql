DROP DATABASE IF EXISTS virtualbar;

CREATE DATABASE virtualbar;
USE virtualbar;

CREATE TABLE tequila
(
	id int NOT NULL AUTO_INCREMENT,
	glass varchar(45) NOT NULL,
	ingredients TEXT NOT NULL,
    method TEXT NOT NULL,
	PRIMARY KEY (id)
);


SELECT * FROM tequila;
