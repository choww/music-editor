CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(45) DEFAULT '',
  lastname varchar(45) DEFAULT '',
  email varchar(255) DEFAULT '', 
  password varchar(50) NOT NULL,
  PRIMARY_KEY ('id')
);
