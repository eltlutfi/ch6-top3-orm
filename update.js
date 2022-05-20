const { Product } = require("./models");

Product.update(
    {
        harga: "1000000",
    },
    {
        where: {
            id: 1,
        },
    }
)
    .then(() => {
        console.log("Product berhasil diupdate");
        process.exit();
    })
    .catch((err) => {
        console.log("Gagal mengupdate product !");
});