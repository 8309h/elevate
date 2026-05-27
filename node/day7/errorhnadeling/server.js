const { createNextState } = require("@reduxjs/toolkit");
const express = require("express");
const { data } = require("react-router-dom");

const app = express();

let products = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Mouse", price: 800 }
];

app.get("/product", (req, res) => {
      res.status(200).json({ data: products })
})


app.get("/product/:id", (req, res) => {
      try {
            const id = Number(req.params.id);

            const product = products.find((p) => {
                  p.id == id;
            })

            if (!product) {
                  const err = new Error("Product Not found");
                  err.status(400);
                  return next(err)
            }
            res.status(200).json({ product: product });
      } catch (error) {
            next(error);
      }

})


app.post("/products", (req, res) => {
      try {
            const { name, price } = req.body;

            if (!name || !price) {
                  const err = new Error("Name and price are required");
                  return next(err);
            }
            if (typeof price != "number") {
                  const err = new Error("Price should be number");
                  err.status(400);
                  return next(err);
            }

            const newProduct = {
                  id: products.length + 1,
                  name,
                  price
            }
            products.push(newProduct);

            res.status(201).json({
                        message: "Product Added Succesfully",
                        products: newProduct
                  })
      }catch(err)  {
            next(err)
      }
})

app.use((err,req,res,next)=> {
      res.status(err.status || 500).json({
            error : err.message || "Somethibg Went Wrong"
      })
})
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
      console.log(`Serviner runjning port 3000`)
})