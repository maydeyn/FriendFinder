
CREATE DATABASE pokemons_db;

USE pokemons_db;

CREATE TABLE
IF NOT EXISTS profiles
(
id int NOT NULL auto_increment,
   name VARCHAR
(25),
   photo VARCHAR
(255),
   scores VARCHAR
(25),
PRIMARY key
(id)
);
