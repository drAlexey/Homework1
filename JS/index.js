const priceOne = 15.678;
const priceTwo = 123.965;
const priceThree = 90.2345;
const cash = 500;


let maxPrice = (Math.max(priceOne,priceTwo,priceThree));//Максимальная
console.log(maxPrice);

let minPrice = (Math.min(priceOne,priceTwo,priceThree));//Минимальная
console.log(minPrice);

let totalPrice =(priceOne+priceTwo+priceThree);//Сумма товаров
console.log(totalPrice);

let roundSum = (Math.round(totalPrice));//Округлённая сумма товаров
console.log(roundSum);

let totalOdd = ((totalPrice)%2);//Сумма товаров-нечётная 
console.log(totalOdd);

let changeOfSum =(cash-(totalPrice));//Сдача
console.log(changeOfSum);

let averageCost = ((totalPrice)/3);// Средняя стоимость товаров
console.log(averageCost);

let randomDiscount = (Math.round(Math.random()*100));// Случайная скидка
console.log(randomDiscount);

let totalDiscountPrice =((totalPrice)-(randomDiscount)); //Сумма товаров со скидкой
console.log(totalDiscountPrice);

let discount = (cash-(totalDiscountPrice))-(cash-(totalPrice)); // Сэкономили
console.log(discount);








// console.log(priceOne,priceTwo,priceThree,cash);

// console.log(Math.max(priceOne,priceTwo,priceThree));//Максимальная 
// console.log(Math.min(priceOne,priceTwo,priceThree));//Минимальная
// console.log(priceOne+priceTwo+priceThree); //Сумма товаров
// console.log(Math.round(priceOne+priceTwo+priceThree)); //Округлённая сумма товаров
// console.log((priceOne+priceTwo+priceThree)%2); //Сумма товаров-нечётная 
// console.log(cash-(priceOne+priceTwo+priceThree)); //Сдача
// console.log((priceOne+priceTwo+priceThree)/3); // Средняя стоимость товаров
// console.log(Math.round(Math.random()*100)); // Случайная скидка
// console.log((priceOne+priceTwo+priceThree)-(Math.round(Math.random()*100))); //Сумма товаров со скидкой
// console.log(cash-((priceOne+priceTwo+priceThree)-(Math.round(Math.random()*100)))-(cash-(priceOne+priceTwo+priceThree))); // Сэкономили


