var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Duder225",
    database: "bamazon_DB"
  });
  
  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  var maxResults = 0;

function listProducts() {
    connection.query('SELECT * FROM `products`', function (error, results, fields) {
        if (error) throw error;
        console.log("Item ID  Price($) \tProduct");
        console.log("----------------------------------------------")
        for (var i=0; i<results.length; i++) {
            console.log(results[i].item_id + "\t" + results[i].price.toFixed(2) + "\t\t" + results[i].product_name);
        }
        promptUser();
        maxResults = results.length;
    });
}