CREATE DATABASE ;
USE ;
-- Create the table actors.
CREATE TABLE drink_categories (
  id int AUTO_INCREMENT,
  category varchar(30) NOT NULL,
  PRIMARY KEY(cat_id)
);
-- Insert a set of records.
INSERT INTO drink_categories (category) VALUES ("whiskey");
INSERT INTO drink_categories (category)  VALUES ("tequila");
INSERT INTO drink_categories (category)  VALUES ("vodka");
INSERT INTO drink_categories (category)  VALUES ("rum");