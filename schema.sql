CREATE TABLE users(
  email VARCHAR(50) NOT NULL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(
  email
) VALUES('newaz@gmail.com');