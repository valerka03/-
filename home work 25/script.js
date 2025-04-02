const students = [
	{ name: 'Иван', age: 21, scores: [90, 85, 88] },
	{ name: 'Мария', age: 23, scores: [78, 82, 80] },
	{ name: 'Пётр', age: 20, scores: [92, 88, 95] },
]

for (const student of students) {
	const score =
		(student.scores[0] + student.scores[1] + student.scores[2]) /
		student.scores.length
	// console.log(`Средний балл студента ${student.name}: ${score}`)
	if (score > 85) {
		console.log(`Имя: ${student.name}, Средний балл: ${score}`)
	}
}

// Ваша задача перебрать массив и вывести средний балл каждого студента

// Дополнительно:
// Вытащить только тех студентов у кого средний балл выше 85
