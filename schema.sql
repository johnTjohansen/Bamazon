CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products( 
	item_id integer(11) NOT NULL AUTO_INCREMENT,
	product_name varchar(75) NOT NULL,
	department_name varchar(50),
	price FLOAT(7,2),
	stock_quantity integer(8),
	PRIMARY KEY (item_id)
)

item_id,"product_name","department_name",price,stock_quantity
1,"Hare hair Goo-gah","Dude-dads and Notions",15.00,750
2,"Ratchet Rammer","Tools",18.00,300
3,"Smegma salts","Apothecary & Spices",35.00,68
4,"FitTit Bounce counter","Fitness",32.00,800
5,"Harry Plopper figure","Toys & Collectibles",19.95,1100
6,"Charleston Chow ","Pet",25.95,300
7,"MilkJughead figure","Toys & Collectibles",10.95,300
8,"Are You Being Served? DVD set","Entertainment",60.00,600
9,"vintage Magnetbox Mixer set","Appliances",245.00,1
10,"Fright Factory by Mattel","Toys & Collectibles",50.00,3
