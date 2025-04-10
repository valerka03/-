// 1 Задача: Напишите программу, которая вычисляет площадь треугольника по формуле Герона.
// Входные данные: три стороны треугольника.

function square(a, b, c) {
	let s = (a + b + c) / 2
	a = s - a
	b = s - b
	c = s - c
	let S = a * b * c * s
	return Math.sqrt(S)
}
console.log(square(6, 6, 7))

// 2 Задача: Предоставлена функция Kata, которая принимает два параметра в
// следующем порядке: массив, элемент, и возвращает индекс элемента, если он
// найден, и "Not found" в противном случае. Ваша задача — сократить код как можно
// больше, чтобы он соответствовал строгим требованиям по количеству символов (не более 161).
// Элементы в массиве уникальны
// Используйте nodemon

// function Kata(arr, el) {
// 	let index = arr.indexOf(el)
// 	if (index === -1) console.log('not found')
// 	else {
// 		console.log(arr.indexOf(el))
// 	}
// }

const Kata = (arr, el) =>
	arr.indexOf(el) === -1 ? 'Not found' : arr.indexOf(el)

console.log(Kata(['apple', 'blueberry', 'rusberry'], 'rusberry'))
