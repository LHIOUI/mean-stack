CREATE TABLE users (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname varchar(255) NOT NULL, 
    lastname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    birth_date DATETIME NOT NULL, 
    password varchar(255) NOT NULL
) AUTO_INCREMENT = 1;