CREATE TABLE users (
  id serial PRIMARY KEY,
  firstname varchar(45) DEFAULT '',
  lastname varchar(45) DEFAULT '',
  email varchar(255) DEFAULT '', 
  password varchar(50) NOT NULL,
  created_at TIMESTAMP NOT NULL
);
