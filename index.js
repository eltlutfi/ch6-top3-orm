const express = require("express");
const app = express();
const { Product } = require("./models");

app.use(express.json());

app.get("/products", (req, res) => {
    Product.findAll()
        .then((products) => {
            res.status(200).json(products);
    });
});

app.get("/products/:id", (req, res) => {
    Product.findOne({
        where: { id: req.params.id },
    })
        .then((product) => {
            res.status(200).json(product);
        });
});

app.post("/products", (req, res) => {
    Product.create({
        nama_produk: req.body.nama_produk,
        price: req.body.price,
        category: req.body.category,
        size: req.body.size,
        size_and_adjustment: req.body.size_and_adjustment,
        store: req.body.store,
    })
        .then((product) => {
            res.status(201).json(product);
        })
        .catch((err) => {
            res.status(422).json("Can't create product");
        });
});

app.put("/products/:id", (req, res) => {
    Product.update({
        product_name: req.body.product_name,
        price: req.body.price,
        category: req.body.category,
        size: req.body.size,
        size_and_adjustment: req.body.size_and_adjustment,
        store: req.body.store,
    }, {
        where: { id: req.params.id },
    })
        .then(() => {
            res.status(200).json({ message: "Data Updated" });
        }) .catch((err) => {
            res.status(422).json("Can't edit product");
        });
});

app.delete("/products/:id", (req, res) => {
    Product.destroy({
        where: { id: req.params.id },
    })
        .then(() => {
            res.sendStatus(204);
        }) .catch((err) => {
            res.status(422).json("Can,t delete product");
        });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});