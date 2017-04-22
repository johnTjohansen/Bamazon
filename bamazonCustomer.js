var mysql = require("mysql");
var prompt = require("prompt");
var itemRec;

// settings to connect to the Bamazon database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "Bamazon"
});

connection.connect(function(err)	{
	if (err) {throw err;};
	console.log("connected as id " + connection.threadId);
});

// generate list of all products in the products table
var query = connection.query("SELECT * FROM products", function(err, res)	{
	console.log(query.sql);
	if (err) {
		console.log("error in product query " + err);
	};
	console.log("db read successful " + JSON.stringify.res);
	itemRec = res;
	// format output display
	for (var i = 0; i < res.length; i++) {
		console.log(res.item_id[i] + ' | ' + res.product_name[i] + ' | $' + res.price[i]);
	};
	setTimeout(function(){
		takeOrder();
	}, 3000);
});


function takeOrder() { 
	console.log('takeOrder hit');
// prompt user to enter item id and qty of product they want to buy.
// check stock to see if order can be filled.  If not, log "insufficient quantity!" and stop order
// else if stock, update stock qty on DB.  Show customer total cost of order.
	prompt.get(['itemNumber', 'quantity'], function(err, result) {
		if (err) {throw err;};
		var stockRemain = itemRec.stock_quantity[result.itemNumber];
		console.log("item and qty get in process");
		if (result.quantity > stockRemain) {
			console.log=("Sorry, we don't have that many in stock.");
			return false;
		};
		// compute remaining stock and save to database
		stockRemain -= result.quantity;
		var post = {stock_quantity: stockRemain}; 
		var condition =	{item_id: result.itemNumber};
		connection.query("UPDATE products SET ? WHERE ?", [post, condition], function(err, res)	{
			if (err) {throw err;};
			var totalCost = result.itemNumber * itemRec.price[result.itemNumber];
			console.log("Thank you.  Your total is $" + totalCost);
		});
	});
};

