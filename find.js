const { Product } = require("./models");

Product.findAll().then((product) => {
    console.log(product);
});

Product.findOne({
    where: {
        id: 1,
    },
}).then((product) => {
    console.log(product);
});