// Создай функцию, которая проверяет, делится ли число n на  x  y.
//  Все входные значения — положительные, ненулевые числа.

// 1 решение

// function isDivisible(n, x, y) {
// 	if (n % x === 0 && n % y === 0) {
// 		return `${n} делится на ${x} и ${y}`
// 	} else {
//       return `${n} не делится на ${x} и ${y}`
//    }
// }

// console.log(isDivisible(6, 2, 3))

// 2 решение

// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0

// console.log(isDivisible(6, 2, 3))

// 3

function isDivisible(n, x, y) {
	if (isNaN(n) || isNaN(x) || isNaN(y) || n <= 0 || x <= 0 || y <= 0) {
		return 'Некорректные входные данные'
	} else if (n % x === 0 && n % y === 0) {
		return `${n} делится на ${x} и ${y}`
	} else if (n % x === 0 && n % y !== 0) {
		return `${n} делится на ${x} но не на ${y}`
	} else if (n % x !== 0 && n % y === 0) {
		return `${n} не делится на ${x} но делится на ${y}`
	} else {
		return `${n} не делится на ${x} и ${y} в том числе`
	}
}

console.log(isDivisible(null, 4, 4))

// 2 задание
// У вас есть массив чисел (любых, отрицательных, положительных),
// вам нужно написать функцию filterArray, которая вернет массив из массиов в которых:
// 1 массив - положительные числа, которые делятся на 2
// 2 массив - отрицательные числа, которые делятся на 3
// 3 массив - все остальные числа
// То есть
// Принимаем [1,3,2,-6,-9,-10, 10]
// Возвращаем [ [2, 10], [-6, -9], [1, 3, -10] ]

function filterArray(arr) {
	const newArr = [[], [], []]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0 && arr[i] % 2 === 0) {
			newArr[0][newArr[0].length] = arr[i]
		} else if (arr[i] < 0 && arr[i] % 3 === 0) {
			newArr[1][newArr[1].length] = arr[i]
		} else {
			newArr[2][newArr[2].length] = arr[i]
		}
	}
	return newArr
}
console.log(filterArray([1, 3, 2, -6, -9, -10, 10]))
