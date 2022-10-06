const productList = [
    {
        id: 1,
        name: "Ноутбук Asus ROG Zephyrus Duo 15 GX550LXS-HC068R",
        price: 154999,
        specialPrice: 134999,
        labels: {
            new: "Новинка"
        },
        characteristics: {
            displya: "Екран 15.6\" IPS (3840x2160) Ultra HD 4K, матовий",
            processor: "Intel Core i9-10980HK (2.4 — 5.3 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 2 ТБ (2 х 1 ТБ)",
            video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
            os: "Windows 10 Pro"
        },
        instock: false,
        img: "1.jpg",
        sku: "SDW123",
        rating: 5,
        reviews: 145,
    },
    {
        id: 2,
        name: "Ноутбук Asus ROG Zephyrus S17 GX701LXS-HG027T",
        price: 96999,
        specialPrice: 90999,
        labels: {
            freeShipping: "Бесплатная доставка",
            new: "Новинка"
        },
        characteristics: {
            displya: "Екран 17.3\" IPS (1920x1080) Full HD 300 Гц, матовий",
            processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 1 ТБ",
            video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
            os: "Windows 10 Home"
        },
        instock: true,
        img: "2.jpg",
        sku: "QWE321",
        rating: 4,
        reviews: 89,
    },
    {
        id: 3,
        name: "Ноутбук Asus ROG Zephyrus S15 GX502LXS-HF098T",
        price: 92999,
        specialPrice: 89999,
        labels: {
            bestPrice: "Спер цена"
        },
        characteristics: {
            displya: "Екран 17.3\" IPS (1920x1080) Full HD 300 Гц, матовий",
            processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 1 ТБ (2 x 512 ГБ)",
            video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
            os: "Windows 10 Home"
        },
        instock: false,
        img: "4.jpg",
        sku: "CXZ221",
        rating: 5,
        reviews: 345,
    },
    {
        id: 4,
        name: "Ноутбук Asus ExpertBook B9400CEA-KC0178R",
        price: 86599,
        specialPrice: 76599,
        labels: {},
        characteristics: {
            displya: "Екран 14.0\" IPS (1920x1080) Full HD 300 Гц, матовий",
            processor: "Intel Core i7-1165G7 (2.8 — 4.7 ГГц)",
            memory: "RAM 32 ГБ",
            storage: "SSD 4 ТБ (2 х 2 ТБ)",
            video: " Intel Iris Xe Graphics",
            os: "Windows 10 Pro 64 bit"
        },
        instock: true,
        img: "5.jpg",
        sku: "FGH721",
        rating: 3,
        reviews: 101,
    },
    {
        id: 5,
        name: "Ноутбук Asus ROG Strix SCAR 15 G533QS-HF078T",
        price: 86599,
        specialPrice: 66599,
        labels: {},
        characteristics: {
            displya: "Экран 15.6\" IPS (1920x1080) Full HD 300 Гц, матовый",
            processor: "AMD Ryzen 7 5800H (3.2 - 4.4 ГГц)",
            memory: "RAM 16 ГБ",
            storage: "SSD 512 ГБ",
            video: "nVidia GeForce RTX 3080, 16 ГБ",
            os: "Windows 10 Home 64bit"
        },
        instock: true,
        img: "5.jpg",
        sku: "FGH721",
        rating: 5,
        reviews: 33,
    },
    {
        id: 6,
        name: "Ноутбук Asus ROG Zephyrus S17 GX701LWS-HG121T",
        price: 79999,
        specialPrice: 49999,
        labels: {
            new: "Новинка"
        },
        characteristics: {
            displya: "Екран 17.3\" IPS (1920x1080) Full HD 300 Гц, матовий",
            processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
            memory: "RAM 16 ГБ",
            storage: "SSD 512 ГБ",
            video: "nVidia GeForce RTX 2070 Super, 8 ГБ",
            os: "Windows 10 Home"
        },
        instock: true,
        img: "6.jpg",
        sku: "RFV821",
        rating: 5,
        reviews: 190,
    }
]

function createElement(options = {}) {
    if (!options.tag) return '';

    const elemnt = document.createElement(options.tag);


    if (options.attributes) addAttr(elemnt, options.attributes);

    if (options.classLists) addClass(elemnt, options.classLists);

    if (options.content) addContent(elemnt, options.content);

    return elemnt;
}

function addContent(elemnt, content) {
    if (!elemnt || !content) return;

    if (typeof content === 'string' || typeof content === 'number') {
        elemnt.textContent = content;
        return;
    }

    if (Array.isArray(content) && typeof content === 'object') {
        content.forEach(function (item) {
            elemnt.append(createElement(item));
        });
    } else {
        elemnt.append(createElement(content));
    }
}

function addClass(elemnt, classLists) {
    if (!elemnt || !classLists) return;

    classLists = classLists.split(', ');

    elemnt.classList.add(...classLists);
}

function addAttr(elemnt, attr) {
    if (!elemnt || !attr) return;

    for (const key in attr) {
        elemnt.setAttribute(key, attr[key]);
    }
}



productList.forEach((product) => {
    document.querySelector('.product-list').append(createProduct(product));
})

function createProduct(product = {}) {
    return createElement({
        tag: 'div',
        classLists: 'col-4, product-list__item',
        content: {
            tag: 'div',
            classLists: 'product',
            content: [{
                tag: 'div',
                classLists: 'product__image-wrapper',
                content: {
                    tag: 'img',
                    classLists: 'product__image',
                    attributes: {
                        src: './images/' + product.img,
                        alt: 'laptop'
                    },
                }
            },
            {
                tag: 'h2',
                classLists: 'product__title',
                content: product.name
            },
            {
                tag: 'label',
                classLists: 'product__labelNew',
                content: product.labels.new
            },
            {
                tag: 'ul',
                classLists: 'product__characteristics',
                content: [{
                    tag: 'li',
                    classLists: 'characteristics__items',
                    content: product.characteristics.displya
                },
                {
                    tag: 'li',
                    classLists: 'characteristics__items',
                    content: product.characteristics.processor,
                },
                {
                    tag: 'li',
                    classLists: 'characteristics__items',
                    content: product.characteristics.memory,
                },
                {
                    tag: 'li',
                    classLists: 'characteristics__items',
                    content: product.characteristics.storage,
                },
                {
                    tag: 'li',
                    classLists: 'characteristics__items',
                    content: product.characteristics.video,
                },
                {
                    tag: 'li',
                    classLists: 'characteristics__items',
                    content: product.characteristics.os,
                }
                ]
            },
            {
                tag: 'div',
                classLists: 'product__rate',
                //Картинки рейтинга не редактировала, добавила 1 для вида
                content: [{
                    tag: 'img',
                    classLists: 'product__rate-img',
                    attributes: {
                        src: './images/rate.png',
                        alt: 'rate'
                    }
                },
                {
                    tag: 'a',
                    classLists: 'product__rate-link',
                    attributes: {
                        href: '#'
                    },
                    content: product.reviews + ' reviews'
                }]
            },
            {
                tag: 'div',
                classLists: 'product__info',
                content: [{
                    tag: 'div',
                    classLists: 'product__price-box',
                    content: [{
                        tag: 'p',
                        classLists: 'product__price-old',
                        content: product.price + ' ₴'
                    },
                    {
                        tag: 'p',
                        classLists: 'product__price-final',
                        content: product.specialPrice + ' ₴'
                    },
                    ]
                },
                {
                    tag: 'div',
                    classLists: 'product__qty, qty',
                    content: [{
                        tag: 'div',
                        classLists: 'qty__wrapper',
                        content: [{
                            tag: 'button',
                            attributes: {
                                type: 'button',
                            },
                            classLists: 'qty__btn',
                            content: '-',
                        },
                        {
                            tag: 'input',
                            attributes: {
                                type: 'number',
                                value: '1',
                            },
                            classLists: 'qty__input-qty',
                        },
                        {
                            tag: 'button',
                            attributes: {
                                type: 'button',
                            },
                            classLists: 'qty__btn',
                            content: '+',
                        }]
                    }]
                }]
            },
            {
                tag: 'label',
                classLists: 'product__labelShip',
                content: product.labels.freeShipping
            },
            {
                tag: 'div',
                classLists: 'product__action',
                content: {
                    tag: 'a',
                    classLists: 'product__add-to-cart, btn, primary',
                    attributes: {
                        href: '#'
                    },
                    content: 'Add to cart',
                }
            },
            ]
        },
    });
}
