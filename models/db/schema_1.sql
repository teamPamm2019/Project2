
USE oz6hzuqslbm4klxz;

CREATE TABLE ingredients (
  ingredients_id int AUTO_INCREMENT NOT NULL,
  drink varchar(45) NOT NULL,
  cocktail_id int,
  PRIMARY KEY (ingredients_id),
  FOREIGN KEY (cocktail_id) REFERENCES Cocktail(cocktail_id)
);


CREATE TABLE images (
  images_id int AUTO_INCREMENT NOT NULL,
  image varchar(45) NOT NULL,
  cocktail_id int,
  PRIMARY KEY (images_id),
  FOREIGN KEY (cocktail_id) REFERENCES Cocktail(cocktail_id)
);


CREATE TABLE drink_categories (
  cat_id int AUTO_INCREMENT,
  category varchar(30) NOT NULL,
  PRIMARY KEY(cat_id)
);

CREATE TABLE Cocktail (
  cocktail_id int AUTO_INCREMENT NOT NULL,
  drink varchar(45) NOT NULL,
  cat_id int,
  PRIMARY KEY (cocktail_id),
  FOREIGN KEY (cat_id) REFERENCES drink_categories(cat_id)
);

CREATE TABLE ingredients (
  ingredients_id int AUTO_INCREMENT NOT NULL,
  drink longtext NOT NULL,
  cocktail_id int,
  PRIMARY KEY (ingredients_id),
  FOREIGN KEY (cocktail_id) REFERENCES Cocktail(cocktail_id)
);

CREATE TABLE method (
  method_id int AUTO_INCREMENT NOT NULL,
  step longtext NOT NULL,
  cocktail_id int,
  PRIMARY KEY (method_id),
  FOREIGN KEY (cocktail_id) REFERENCES Cocktail(cocktail_id)
);

-- Glass table for later
CREATE TABLE glass (
  glass_id INT AUTO_INCREMENT NOT NULL,
  glass varchar(45) NOT NULL,
  drink_id int,
  PRIMARY KEY (glass_id),
  FOREIGN KEY (drink_id) REFERENCES Cocktail(cocktail_id)
);



INSERT INTO drink_categories (category) VALUES ("whiskey");
INSERT INTO drink_categories (category)  VALUES ("tequila");
INSERT INTO drink_categories (category)  VALUES ("vodka");
INSERT INTO drink_categories (category)  VALUES ("rum");