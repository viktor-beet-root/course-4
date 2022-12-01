const express = require('express');
const { v4 } = require("uuid");
const cors = require("cors");

const PORT = 3000;

const PRODUCTS = [
    {
        id: v4(),
        name: "Sweater Eighteen beige",
        price: 150,
        labels: {
            new: "Новинка",
        },
        instock: false,
        img: "beige_sweater.jpg",
        sku: "SDW123",
    },
    {
        id: v4(),
        name: "Sweater Seventeen gray",
        price: 140,
        specialPrice: 130,
        labels: {
            freeShipping: "Безкоштовна доставка",
            new: "Новинка",
        },
        instock: true,
        img: "blue_sweater.jpg",
        sku: "QWE321",
    },
    {
        id: v4(),
        name: "Pink knitted sweater",
        price: 150,
        labels: {
            bestPrice: "Спец ціна",
        },
        instock: false,
        img: "pink_sweater.jpg",
        sku: "CXZ221",
    },
    {
        id: v4(),
        name: "Sweater with deer",
        price: 160,
        specialPrice: 150,
        labels: {},
        instock: true,
        img: "deer_sweater.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        name: "Brown sweater of a free cut",
        price: 140,
        specialPrice: 130,
        labels: {},
        instock: true,
        img: "brown_sweater.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        name: "Lilac sweater Anna",
        price: 150,
        specialPrice: 130,
        labels: {
            new: "Новинка",
        },
        instock: true,
        img: "lilac_sweater.jpg",
        sku: "RFV821",
    },
    {
        id: v4(),
        name: "Orange sweater",
        price: 150,
        specialPrice: 130,
        labels: {},
        instock: true,
        img: "orange_sweater.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        name: "Camel sweater",
        price: 160,
        specialPrice: 150,
        labels: {},
        instock: true,
        img: "sand_sweater.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        name: "White sweater with a free cut",
        price: 140,
        specialPrice: 130,
        labels: {},
        instock: true,
        img: "white_sweater.jpg",
        sku: "FGH721",
    },
];

const CART = [];

const BASE_URL = "/api/";

const app = express();
app.use(cors())
app.use(express.json());

//GET
app.get(`${BASE_URL}products`, (req, res) => {
    res.status(200).json(PRODUCTS);
});

app.get(`${BASE_URL}cart`, (req, res) => {
    res.status(200).json(CART);
});

//POST
app.post(`${BASE_URL}cart/`, (req, res) => {
    const product = { ...req.body };

    product.id = v4();

    CART.push(product);
    res.status(200).json(product);
});

//PUT
app.put(`${BASE_URL}cart/:id`, (req, res) => {
    const productIndex = getProductIndex(req.params.id);

    CART[productIndex] = req.body;
    res.status(202).json(CART[productIndex]);
});

//DELETE
app.delete(`${BASE_URL}cart/:id`, (req, res) => {
    const productIndex = getProductIndex(req.params.id);

    CART.splice(productIndex, 1);

    res.status(200).json(1);
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});

function getProductIndex(productId) {
    return CART.findIndex((cartProduct) => {
        return cartProduct.id === productId;
    });
}
