const express = require("express")
const mongoose = require('mongoose');
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute);

app.get("/", (req,res) => {
    res.send("hello from node api server");
});


mongoose.connect("mongodb+srv://kamaldeep7503:UscQHa6zfm2JvRPF@backenddb.h5aup.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => { console.log('Connected!') 
  app.listen(3000, () => {
    console.log("server is running at 3000");
});
});
// .catch(() => {
//     console.log("failed")
// })