// Задание 1
// Напишите цикл, который выведет в консоль числа: 1 - 2 - 4 - 8 - 16 - 32 - 64
// (то есть каждое следующее число умножается на 2)
console.log('Задание 1')

for (let i = 1; i <= 64; i *= 2) {
	console.log(i)
}

// Задание 2
// Задан массив arr. Выведите в консоль каждый элемент этого массива используя любой удобный вам цикл
// const arr = ["canon", "polaroid", "nikon", "sony", "fujifilm", "pentax"]

console.log('Задание 2')
const arr = ['canon', 'polaroid', 'nikon', 'sony', 'fujifilm', 'pentax']
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i])
}

// Задание 3
// Используя всё тот же массив arr выведите в консоль длину каждого элемента.

console.log('Задание 3')
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i].length)
}

// Задание 4
// Используя всё тот же массив arr выведите в консоль только элементы длиннее 5 символов

console.log('Задание 4')
for (let i = 0; i < arr.length; i++) {
	if (arr[i].length >= 5) {
		console.log(arr[i].length)
	}
}
