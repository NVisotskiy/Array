// Створення масиву зі списком покупок
let shoppingList = [
  { name: 'Яблука', quantity: 3, bought: true, price: 10, sum: 30 },
  { name: 'Молоко', quantity: 1, bought: false, price: 22, sum: 0 },
  { name: 'Хліб', quantity: 2, bought: false, price: 15, sum: 0 },
  { name: 'Сир', quantity: 1, bought: true, price: 40, sum: 40 },
  { name: 'Яйця', quantity: 12, bought: false, price: 2, sum: 0 }
];

// Функція для виведення списку покупок
function printShoppingList() {
  // Сортування масиву за купленими товарами
  shoppingList.sort((a, b) => a.bought - b.bought);
  console.log('Список покупок:');
  // Виведення кожного елемента масиву
  shoppingList.forEach(item => {
    console.log(`${item.bought ? ' [x] ' : ' [ ] '}${item.name} - ${item.quantity} шт. по ${item.price} грн. = ${item.sum} грн.`);
  });
}

// Функція для покупки продукту
function buyProduct(productName) {
  // Пошук продукту за назвою
  let product = shoppingList.find(item => item.name === productName);
  if (product) {
    product.bought = true; // Встановлення властивості bought в true
    console.log(`${productName} придбано.`);
  } else {
    console.log(`${productName} не знайдено.`);
  }
}

// Додавання продукту до списку покупок
function addProductToList(productName, quantity, price) {
  let existingProduct = shoppingList.find(item => item.name === productName);
  if (existingProduct) {
    existingProduct.quantity += quantity;
    existingProduct.price = price;
    existingProduct.sum = existingProduct.quantity * existingProduct.price;
  } else {
    let newProduct = { name: productName, quantity: quantity, bought: false, price: price, sum: quantity * price };
    shoppingList.push(newProduct); // додано закриваючу дужку
  }
}
