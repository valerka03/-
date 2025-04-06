// 1. Ваша задача написать условие, которое будет проверять четное ли число и делится ли оно на 4, если нечетное, то дополнительно проверить делится ли на 9

let num = 80

if (num % 2 === 0 && num > 0) {
	console.log('Четное число')
	if (num % 4 === 0) {
		console.log('Делится на 4')
	} else {
		console.log('Не делится на 4')
	}
} else if (num > 0) {
	console.log('He Четное число')
	if (num % 9 === 0) {
		console.log('Делится на 9')
	} else {
		console.log('Не делится на 9')
	}
} else {
	console.log('не коректное число')
}

// 2. Напишите программу, которая выводит числа от 1 до 20. Но если число делится на 3, выводите "Fizz", если на 5 — "Buzz", а если на оба, то выводите "FizzBuzz".

for (let i = 1; i <= 20; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz')
	} else if (i % 3 === 0) {
		console.log('Fizz')
	} else if (i % 5 === 0) {
		console.log('Buzz')
	} else {
		console.log(i)
	}
}
