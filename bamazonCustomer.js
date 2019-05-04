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

  function readProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
      if (err) throw err;
      console.log("Displaying products from " + res[0].department_name);
      for (let i = 0; i < res.length; i++) {
        console.log("\n" + res[i].id +
          ". " + res[i].product_name +
          "\nPrice: $" + res[i].price);
      }
      startInquirer(res);
    });
  }

  function startInquirer() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'product',
        message: "Which prooduct will you like to purchase? (Please inter product #)"
      }
    ]).then(function(inquirerRes){
      let query = "UPDATE prducts SET quantity = quantity - ? WHERE id = ?";
      connection.query(query, [inquirerRes.quantity, [inquirerRes.product - 1].ed], function (err) {
        if (err) throw err;
        if ([inquirerRes.product - 1].quantity <= 0 || inquirerRes.quantity > x[inquirerRes.product - 1].quantity) {
          console.log('Insufficient quantity!');
      }  else{
        let total = (([inquirerRes.product - 1].price) * inquirerRes.quantity).toFixed();
        console.log("The total of your purchase is $" + total +
          "\nSuccessfully purchased " + inquirerRes.quantity + ' copy/copies of ' + x[inquirerRes.product - 1].product_name + '.');
      }
    });
    connection.end();
  });
}