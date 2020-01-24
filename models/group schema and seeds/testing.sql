DROP DATABASE IF EXISTS speakez;
CREATE DATABASE speakez;

USE speakEZ;

SELECT * FROM cocktails;

SELECT * FROM ingredients;

SELECT * FROM methods;


INSERT INTO cocktails(drink,drinkcategories_id) VALUES ("Manhattan",1);

INSERT INTO ingredients(ingredients,cocktails_id) VALUES ("this thig",1);

INSERT INTO methods(method,cocktails_id) VALUES ("do this",1);

