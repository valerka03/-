const candidates = [
	{
		name: 'Алексей Петров',
		age: 35,
		health: 'отличное',
		experience: 7,
		education: ['МГУ', 'МАИ'],
	},
	{
		name: 'Елена Смирнова',
		age: 28,
		health: 'хорошее',
		experience: 4,
		education: ['СПбГУ'],
	},
	{
		name: 'Иван Козлов',
		age: 41,
		health: 'удовлетворительное',
		experience: 15,
		education: ['МФТИ', 'МГТУ'],
	},
	{
		name: 'Ольга Васнецова',
		age: 30,
		health: 'отличное',
		experience: 5,
		education: ['МГУ'],
	},
	{
		name: 'Дмитрий Орлов',
		age: 45,
		health: 'плохое',
		experience: 20,
		education: ['МАИ', 'МГУ', 'Калтех'],
	},
	{
		name: 'Анна Жукова',
		age: 33,
		health: 'хорошее',
		experience: 8,
		education: ['Бауманка'],
	},
]

const filteredCandidates = arr => {
	return arr
		.filter(
			el =>
				(el.age > 25 && el.age <= 40 && el.health === 'отличное') ||
				(el.health === 'хорошее' &&
					el.experience >= 5 &&
					el.education.includes('МГУ')) ||
				el.education.includes('МФТИ') ||
				el.education.includes('Бауманка')
		)
		.map(el => `${el.name} (${el.experience} лет опыта)`)
}
console.log(filteredCandidates(candidates))
