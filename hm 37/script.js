// 1.
// У тебя есть массив объектов, представляющих покупки в интернет-магазине.
// Нужно посчитать итоговую сумму всех покупок и вывести каждую покупку в виде строки:
// "<название товара>: <количество> × <цена> = <итого>"
// Итоговую сумму выведи отдельно.

// const purchases = [
//   { name: 'Книга', price: 500, quantity: 2 },
//   { name: 'Ручка', price: 30, quantity: 5 },
//   { name: 'Наушники', price: 1500, quantity: 1 },
// ];

// Ответ:
// Книга: 2 × 500 = 1000
// Ручка: 5 × 30 = 150
// Наушники: 1 × 1500 = 1500
// Итоговая сумма: 2650

const purchases = [
	{ name: 'Книга', price: 500, quantity: 2 },
	{ name: 'Ручка', price: 30, quantity: 5 },
	{ name: 'Наушники', price: 1500, quantity: 1 },
]

const sumOfpurchases = arr => {
	return arr.map(
		el => `${el.name}: ${el.quantity} × ${el.price} = ${el.price * el.quantity}`
	)
}

console.log(sumOfpurchases(purchases))

// 2.
// У тебя есть массив чисел. Нужно посчитать отдельно сумму чётных и нечётных чисел. Используй только один вызов reduce.
// const numbers = [10, 15, 7, 20, 33, 2];

const numbers = [10, 15, 7, 20, 33, 2]
function sumOfnumbers(numbers) {
	return numbers.reduce(
		(acc, rec) => {
			if (rec % 2 === 0) {
				acc[0]+=rec
			} else {
				acc[1]+=rec
			}
			return acc
		},
		[0, 0]
	)
}
console.log(sumOfnumbers(numbers))


// Сумма чётных: 32
// Сумма нечётных: 55