DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

use bamazon_DB;

CREATE TABLE bamazon(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INT(100) NOT NULL,
stock_quantity INT(100) NOT NULL,
PRIMARY KEY (item_id)
)

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("ice cream", "groceries", 5, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("flat screen tvs", "electronics", 500, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("D&D DM Guides", "books", 50, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("steak knives", "kitchen ware", 50, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Earthbound", "video games", 60, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("D&D PLayers Handbook", "Books", 50, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("computer monitors", "electronics", 150, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("baseball bat", "sportsware", 100, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("taco cat shirt", "clothing", 25, 100);

insert into bamazon (product_name, department_name, price, stock_quantity)
VALUES ("bicorn admiral hat", "clothing", 25, 100);

