const { Product } = require("./models");

Product.destroy({
    where: {
        id: 1,
    },
}).then(() => {
    console.log("Telah berhasil terhapus");
});