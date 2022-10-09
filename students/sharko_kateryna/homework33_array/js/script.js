// Мінімум

// 1.Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
// Написати кілька функцій для роботи з таким масивом:
const shoppingList = [
    {
        name: 'Ice cream',
        quantity: 5,
        priceFor1: 18,
        sum: 90,
        isBought: true,
    },
    {
        name: 'Juice',
        quantity: 2,
        priceFor1: 55,
        sum: 110,
        isBought: true,
    },
    {
        name: 'Bread',
        quantity: 1,
        priceFor1: 25,
        sum: 25,
        istBought: false,
    },
    {
        name: 'Yogurt',
        quantity: 4,
        priceFor1: 22,
        sum: 88,
        isBought: true,
    },
    {
        name: 'Water',
        quantity: 6,
        priceFor1: 35,
        sum: 180,
        isBought: false,
    },
];

// 2. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
function sortProduct(shoppingList) {
    const newArray = [...shoppingList];
    newArray.sort((prev, next) => prev.isBought - next.isBought);
    console.log(newArray);
}

// 3. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function buyProduct(shoppingList, name) {
    const product = findProduct(shoppingList, name);
    if (product) {
        product.isBought = true;
    } else {
        console.error('Продукт не найден')
    }
}

function findProduct(shoppingList, name) {
    return shoppingList.find(shoppingList => shoppingList.name.toLowerCase() === name.toLowerCase());
}
buyProduct(shoppingList, 'water');
console.log(shoppingList);

// Норма

// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
function deleteProduct(shoppingList, name) {
    //В задании было указано удаление путем создания нового массива- (видалення повинно проводитися шляхом створення нового масиву, 
    // в якому продукт, що ми шукаємо, буде відсутнім)
    const filterProduct = shoppingList.filter(shoppingListItem => shoppingListItem.name.toLowerCase() != name.toLowerCase());
    console.log(filterProduct);
}

deleteProduct(shoppingList, 'Bread');


// 2.Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function addProduct(shoppingList, name, price) {
    const productAdd = findProduct(shoppingList, name);
    if (productAdd) {
        productAdd.quantity = productAdd.quantity + 1;
        productAdd.sum = productAdd.quantity * productAdd.priceFor1;
    } else {
        shoppingList.push({
            name: name,
            quantity: 1,
            priceFor1: price,
            sum: price,
            isBought: false,
        })
    }
}

addProduct(shoppingList, 'Chocolate', 33);
addProduct(shoppingList, 'Juice');
console.log(shoppingList);
