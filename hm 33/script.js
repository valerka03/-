// Напиши функцию checkDivisibility, которая принимает первый
// агрумент как число — это делимое, а все остальные аргументы — это делители .

// Функция должна вернуть объект с двумя массивами:

// divisible: делители, на которые делится делимое без остатка

// notDivisible: делители, на которые делимое не делится

function checkDivisibility(num, ...arguments) {
	let divisible = [],
		notDivisible = []

	for (let i = 0; i < arguments.length; i++) {
		if (num % arguments[i] === 0) {
			divisible[divisible.length] = arguments[i]
		} else {
			notDivisible[notDivisible.length] = arguments[i]
		}
	}
	return { divisible, notDivisible }
}
console.log(checkDivisibility(12, 3, 4, 5, 6, 4, 34, 5, 67, 87, 65))
