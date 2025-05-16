// Первая задача: Не изменяя HTML, нужно написать JavaScript код в файле script.js, который будет назначать
// четным элементам li красный цвет текста, а нечетным - синий цвет текста.

// Вторая задача: В этом же файле script.js нужно найти среди всех div элементов тот, у которого текст
// строго равен "Hello", и вывести этот элемент в консоль.

// Решение должно работать с предоставленным HTML без его изменения.

let allLi = document.querySelectorAll('li')

allLi.forEach((el, i) => {
	if (i % 2 === 0) {
		el.style.backgroundColor = 'red'
	} else {
		el.style.backgroundColor = 'blue'
	}
})

let allDiv = document.querySelectorAll('div').forEach(el => {
	if (el.textContent === 'Hello') {
		el.style.color = 'red'
	}
})
