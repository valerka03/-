// 1. Ваша задача придумать 4 выражения с операторами сравнения таким образом,
//  чтобы в консоли браузера у вас выводилось

// true
// true
// false
// true

console.log(10 > 5);       // true
console.log(3 === 3);      // true
console.log(7 < 4);        // false
console.log("apple" !== "orange"); // true

// 2  Объявите переменные money (деньги) и price (цена товара).
// Используйте логические операторы, чтобы проверить, может ли человек купить товар
// (money должно быть больше или равно price). Выведите результат в console.log.

let money = 100;
let price = 50;  
console.log(money >= price); // true


// 3. Допустим, у нас есть три условия:
// Пользователь ввел правильный логин (isCorrectLogin)
// Пользователь ввел правильный пароль (isCorrectPassword)
// У него есть доступ к админке (isAdmin)

// Напишите логическое выражение, которое проверяет, может ли пользователь войти:
// Если у него правильный логин и пароль ИЛИ  он администратор, то вход разрешен.
// Выведите результат в console.log.

let isCorrectLogin = true;
let isCorrectPassword = false;
let isAdmin = true;
console.log((isCorrectLogin && isCorrectPassword) || isAdmin); // true

