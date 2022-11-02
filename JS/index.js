let priceOne = 15.678;
let priceTwo = 123.965;
let priceThree = 90.2345;
const cash = 500;

console.log(priceOne,priceTwo,priceThree,cash);

console.log(Math.max(priceOne,priceTwo,priceThree));//Максимальная 
console.log(Math.min(priceOne,priceTwo,priceThree));//Минимальная
console.log(priceOne+priceTwo+priceThree); //Сумма товаров
console.log(Math.round(priceOne+priceTwo+priceThree)); //Округлённая сумма товаров
console.log((priceOne+priceTwo+priceThree)%2); //Сумма товаров-нечётная 
console.log(cash-(priceOne+priceTwo+priceThree)); //Сдача
console.log((priceOne+priceTwo+priceThree)/3); // Средняя стоимость товаров
console.log(Math.round(Math.random()*100)); // Случайная скидка
console.log((priceOne+priceTwo+priceThree)-(Math.round(Math.random()*100))); //Сумма товаров со скидкой
console.log(cash-((priceOne+priceTwo+priceThree)-(Math.round(Math.random()*100)))-(cash-(priceOne+priceTwo+priceThree))); // Сэкономили




