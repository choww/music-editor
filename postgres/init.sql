CREATE TABLE users (
  id serial PRIMARY KEY,
  firstname VARCHAR(45) DEFAULT '',
  lastname VARCHAR(45) DEFAULT '',
  email VARCHAR(255) DEFAULT '', 
  password VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE songs (
  id serial PRIMARY KEY,
  name VARCHAR(255) DEFAULT '',
  key VARCHAR(45) DEFAULT '',
  bpm INTEGER DEFAULT 60,
  notes TEXT DEFAULT '',
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE sections (
  id serial PRIMARY KEY,
  name VARCHAR(255) DEFAULT '',
  content TEXT DEFAULT '',
  song_id INTEGER REFERENCES songs(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL
);
