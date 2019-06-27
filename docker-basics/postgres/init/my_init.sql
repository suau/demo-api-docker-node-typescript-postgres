CREATE EXTENSION CITEXT;

CREATE TABLE IF NOT EXISTS my_demo_names (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(140) DEFAULT NULL
);

INSERT INTO my_demo_names ("name") VALUES ('Su-Au'), ('Adam'), ('Eve');
