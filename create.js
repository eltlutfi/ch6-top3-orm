const { Product } = require("./models");

Product.create({
    nama_produk: "FC Barcelona home shirt",
    price: "1400000",
    category: "Kits",
    size: "S/M/L/XL/XXL",
    size_and_adjustment: "Standard fit",
    store: "BARCA Official Store",
})
.then((product) => {
    console.log(product);
});