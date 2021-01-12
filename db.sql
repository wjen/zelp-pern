CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price_range INT NOT NULL,
  location VARCHAR(50) NOT NULL check(
    price_range >= 1
    and price_range <= 5
  )
);
INSERT INTO restaurants (id, name, location, price_range)
VALUES (124, 'pizza hut', 'vegas', 3);
INSERT INTO restaurants (price_range)
VALUES(12);