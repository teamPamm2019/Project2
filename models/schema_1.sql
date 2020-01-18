CREATE DATABASE Speakeasy;
USE Speakeasy;

CREATE TABLE drink_categories (
  cat_id int AUTO_INCREMENT,
  category varchar(30) NOT NULL,
  PRIMARY KEY(cat_id)
);


CREATE TABLE Cocktail (
    cocktail_id int AUTO_INCREMENT,
    drink varchar(45) NOT NULL,
    cat_id int,
    PRIMARY KEY (cocktail_id),
    FOREIGN KEY (cat_id) REFERENCES drink_categories(cat_id)
);

INSERT INTO drink_categories (category) VALUES ("whiskey");
INSERT INTO drink_categories (category)  VALUES ("tequila");
INSERT INTO drink_categories (category)  VALUES ("vodka");
INSERT INTO drink_categories (category)  VALUES ("rum");

