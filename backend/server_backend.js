// server.js
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./database.js");
const axios = require("axios");
const CORS = require("cors");

const app = express();
app.use(express.json());
app.use(CORS());
let count = 0;
mongoose
  .connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
////////////////////////////
// const sampleProducts = [
//   {
//     name: "Laptop",
//     points: 1000,
//     description: "A powerful laptop for professional use",
//     quantity: 5,
//     category: "Electronics",
//   },
//   {
//     name: "T-shirt",
//     points: 50,
//     description: "A comfortable cotton t-shirt",
//     quantity: 100,
//     category: "Clothing",
//   },
//   {
//     name: "Perfume",
//     points: 200,
//     description: "A luxury fragrance for men",
//     quantity: 20,
//     category: "Beauty",
//   },
//   {
//     name: "Smartphone",
//     points: 800,
//     description: "The latest smartphone with advanced features",
//     quantity: 10,
//     category: "Electronics",
//   },
//   {
//     name: "Jeans",
//     points: 70,
//     description: "Stylish jeans for everyday wear",
//     quantity: 50,
//     category: "Clothing",
//   },
//   {
//     name: "Lipstick",
//     points: 150,
//     description: "Long-lasting lipstick in vibrant shades",
//     quantity: 30,
//     category: "Beauty",
//   },
//   {
//     name: "Headphones",
//     points: 300,
//     description: "High-quality headphones for immersive audio experience",
//     quantity: 15,
//     category: "Electronics",
//   },
//   {
//     name: "Dress",
//     points: 120,
//     description: "Elegant dress for special occasions",
//     quantity: 25,
//     category: "Clothing",
//   },
//   {
//     name: "Mascara",
//     points: 100,
//     description: "Lengthening mascara for dramatic lashes",
//     quantity: 40,
//     category: "Beauty",
//   },
//   {
//     name: "Tablet",
//     points: 600,
//     description: "A compact tablet for entertainment and productivity",
//     quantity: 8,
//     category: "Electronics",
//   },
// ];

// Product.insertMany(sampleProducts)
//   .then(() => {
//     console.log("Data inserted successfully");
//   })
//   .catch((err) => {
//     console.error("Error inserting data:", err);
//   });
////////////////////////////
app.get("/", async (req, res) => {
  try {
    console.log("Count = " + count++);
    const products = await Product.find();
    console.log(products);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
