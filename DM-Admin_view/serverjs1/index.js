const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
app.use(cors());
app.use(express.json());



let PORT = 5000; // or 3001, 5001, 9000, whichever works

app.listen(PORT, () => {
	console.log(`Server is listening on Port ${PORT}`);
});

// create a product

app.post("/product", async (req, res) => {
    try {
      const { product_id } = req.body;
      const { pro_name } = req.body;
      const { pro_description } = req.body;
      const { pro_price } = req.body;
      const { pro_quantity } = req.body;
      const { pro_size } = req.body;
      const { pro_category } = req.body;
      const { pro_color } = req.body;
      const { supplier_id} = req.body;
      const newProduct = await pool.query(
        "INSERT INTO Product(product_id,pro_name,pro_description,pro_price,pro_quantity,pro_size,pro_category,pro_color,supplier_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
        [product_id,pro_name,pro_description,pro_price,pro_quantity,pro_size,pro_category,pro_color,supplier_id]
      );
  
      res.json(newProduct.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


  // create a Order

app.post("/order", async (req, res) => {
  try {
    const { order_code } = req.body;
    const { ord_quantity } = req.body;
    const { ord_total_price } = req.body;
    const { client_id } = req.body;
    const { admin_id } = req.body; 
    const { product_id } = req.body;
    const newOrder = await pool.query(
      "INSERT INTO Orders(order_code,ord_quantity,ord_total_price,client_id,admin_id,product_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [order_code,ord_quantity,ord_total_price,client_id,admin_id,product_id]
    );

    res.json(newOrder.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
  
  // get all products
  
  app.get("/products", async (req, res) => {
    try {
      const allProducts = await pool.query("SELECT * FROM product");
      res.json(allProducts.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  // get all view1
  
  app.get("/view", async (req, res) => {
    try {
      const allProducts = await pool.query("SELECT * FROM OrderDetailsView");
      res.json(allProducts.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  // Get all Clients
  
  app.get("/count", async (req, res) => {
    try {
      const allProducts = await pool.query("SELECT COUNT(*) FROM Orders");
      res.json(allProducts.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  //get all orders

  app.get("/orders", async (req, res) => {
    try {
      const allOrders = await pool.query("SELECT * FROM Orders");
      res.json(allOrders.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/transactions", async (req, res) => {
    try {
      const allOrders = await pool.query("SELECT * FROM transaction");
      res.json(allOrders.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  // get a Product
  
  app.get("/products/:product_id", async (req, res) => {
    try {
      const { product_id } = req.params;
      const Product = await pool.query("SELECT * FROM Product WHERE product_id = $1", [ product_id ]);  
      res.json(Product.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  // update a Product
  
  app.put("/Product/:product_id", async (req, res) => {
    try {
        const { product_id } = req.params;
        const { pro_name } = req.body; 
        const { pro_description } = req.body;
        const { pro_price } = req.body;
        const { pro_quantity } = req.body;
        const { pro_size } = req.body;
        const { pro_category } = req.body;
        const { pro_color } = req.body;
        const { supplier_id} = req.body;
        const updateProduct = await pool.query(
        "UPDATE product SET pro_name = $1 , pro_description = $2, pro_price = $3, pro_quantity = $4, pro_size= $5, pro_category= $6, pro_color= $7, supplier_id= $8 WHERE product_id = $9",
        [pro_name , pro_description , pro_price , pro_quantity , pro_size , pro_category , pro_color , supplier_id , product_id]
      );
  
      res.json("Product was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });


  // update a Order
  
  app.put("/Order/:order_code", async (req, res) => {
    try {
        const { order_code } = req.params;
        const { ord_quantity } = req.body;
        const { ord_total_price } = req.body;
        const { client_id } = req.body;
        const { admin_id } = req.body;
        const { product_id } = req.body;
        const updateProduct = await pool.query(
        "UPDATE orders SET ord_quantity = $1, ord_total_price = $2, client_id = $3, admin_id = $4, product_id = $5 WHERE order_code = $6",
        [ord_quantity, ord_total_price, client_id, admin_id, product_id, order_code]
      );
  
      res.json("Order was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });


  
  // delete a Product
  
  app.delete("/Products/delete/:product_id", async (req, res) => {
    try {
        const { product_id } = req.params;
      const deleteProduct = await pool.query("DELETE FROM product WHERE product_id = $1", [
        product_id
      ]);
      res.json("Product was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

  //Delete Order

  app.delete("/orders/delete/:order_code", async (req, res) => {
    try {
        const { order_code } = req.params;
      const deleteorder = await pool.query("DELETE FROM orders WHERE order_code = $1", [
        order_code
      ]);
      res.json("Order was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

  //Delete Transactions

  app.delete("/transactions/delete/:transaction_code", async (req, res) => {
    try {
        const { transaction_code } = req.params;
      const deletetransaction = await pool.query("DELETE FROM transaction WHERE transaction_code = $1", [
        transaction_code
      ]);
      res.json("Transaction was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });