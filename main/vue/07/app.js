const express = require('express');
const { v4 } = require("uuid");
const cors = require("cors");

const PORT = 3000;

const PRODUCTS = [
    {
        id: v4(),
        name: "Ноутбук Asus ROG Zephyrus Duo 15 GX550LXS-HC068R",
        price: 134999,
        specialPrice: 134999,
        labels: {
            new: "Новинка",
        },
        characteristics: {
            displya: 'Екран 15.6" IPS (3840x2160) Ultra HD 4K, матовий',
            processor: "Intel Core i9-10980HK (2.4 — 5.3 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 2 ТБ (2 х 1 ТБ)",
            video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
            os: "Windows 10 Pro",
        },
        instock: false,
        img: "1.jpg",
        sku: "SDW123",
    },
    {
        id: v4(),
        name: "Ноутбук Asus ROG Zephyrus S17 GX701LXS-HG027T",
        price: 96999,
        specialPrice: 90999,
        labels: {
            freeShipping: "Бесплатная доставка",
            new: "Новинка",
        },
        characteristics: {
            displya: 'Екран 17.3" IPS (1920x1080) Full HD 300 Гц, матовий',
            processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 1 ТБ",
            video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
            os: "Windows 10 Home",
        },
        instock: true,
        img: "2.jpg",
        sku: "QWE321",
    },
    {
        id: v4(),
        name: "Ноутбук Asus ROG Zephyrus S15 GX502LXS-HF098T",
        price: 89999,
        specialPrice: 89999,
        labels: {
            bestPrice: "Спер цена",
        },
        characteristics: {
            displya: 'Екран 17.3" IPS (1920x1080) Full HD 300 Гц, матовий',
            processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 1 ТБ (2 x 512 ГБ)",
            video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
            os: "Windows 10 Home",
        },
        instock: false,
        img: "3.jpg",
        sku: "CXZ221",
    },
    {
        id: v4(),
        name: "Ноутбук Asus ExpertBook B9400CEA-KC0178R",
        price: 86599,
        specialPrice: 76599,
        labels: {},
        characteristics: {
            displya: 'Екран 14.0" IPS (1920x1080) Full HD, матовий',
            processor: "Intel Core i7-1165G7 (2.8 — 4.7 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 4 ТБ (2 х 2 ТБ)",
            video: " Intel Iris Xe Graphics",
            os: "Windows 10 Pro 64 bit",
        },
        instock: true,
        img: "4.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        name: "Ноутбук Asus ROG Strix SCAR 15 G533QS-HF078T",
        price: 86599,
        specialPrice: 86599,
        labels: {},
        characteristics: {
            displya: 'Экран 15.6" IPS (1920x1080) Full HD 300 Гц, матовый',
            processor: "AMD Ryzen 7 5800H (3.2 - 4.4 ГГц)",
            memory: "RAM 16 ГБ",
            storage: "SSD 512 ГБ",
            video: "nVidia GeForce RTX 3080, 16 ГБ",
            os: "Windows 10 Home 64bit",
        },
        instock: true,
        img: "5.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        name: "Ноутбук Asus ROG Zephyrus S17 GX701LWS-HG121T",
        price: 79999,
        specialPrice: 49999,
        labels: {
            new: "Новинка",
        },
        characteristics: {
            displya: 'Екран 17.3" IPS (1920x1080) Full HD 300 Гц, матовий',
            processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
            memory: "RAM 16 ГБ",
            storage: "SSD 512 ГБ",
            video: "nVidia GeForce RTX 2070 Super, 8 ГБ",
            os: "Windows 10 Home",
        },
        instock: true,
        img: "6.jpg",
        sku: "RFV821",
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

//POST
app.post(`${BASE_URL}cart/`, (req, res) => {
    const product = { ...req.body };

    product.id = v4();

    CART.push(product);
    res.status(200).json(product);
});

//PUT
app.put(`${BASE_URL}cart/:id`, (req, res) => {
    const productIndex = CART.findIndex((cartProduct) => {
        return cartProduct.productId === req.params.id;
    });



    CART[productIndex] = req.body;
    res.status(202).json(CART[productIndex]);
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
