// 1.
// Дана переменная с номером телефона в международном формате.
// Определите страну номера по коду в начале.
// Сохраните результат в переменную phoneCountry.

// если номер начинается с кода +996 то страна KG
// если номер начинается с кода +7 то страна KZ
// если номер начинается с кода +1 то страна US

const phone = '+7 (550) 225-456'
let phoneCountry

let country = phone.slice(0, 2)
if (country === '+9') {
	country = phone.slice(0, 4)
}

switch (country) {
	case '+996':
		phoneCountry = 'KG'
		break
	case '+7':
		phoneCountry = 'KZ'
		break
	case '+1':
		phoneCountry = 'US'
		break
	default:
		phoneCountry = 'Unknown'
}

console.log(phoneCountry)

// 2 - Вариант, но мы не проходили .startswith
// p.s изучил сам

const phone2 = '+1 (550) 225-456'
let phoneCountry2

if (phone2.startsWith('+996')) {
	phoneCountry2 = 'KG'
} else if (phone2.startsWith('+7')) {
	phoneCountry2 = 'KZ'
} else if (phone2.startsWith('+1')) {
	phoneCountry2 = 'US'
} else {
	phoneCountry2 = 'Unknown'
}

console.log(phoneCountry2)

// 2.
// Дана переменная с годом, ваша задача написать такое условие,
// которое будет проверять является ли год почти высокосным,
// то есть он делится на 4, но  делится на 100,  следующий за ним
// год — тоже високосный.

// Используйте if else

let year = 1995
let isAlmostLeapYear

if (year % 4 === 0 && year % 100 === 0 && (year + 1) % 4 === 0) {
	isAlmostLeapYear = true
} else {
	isAlmostLeapYear = false
}

console.log(isAlmostLeapYear)

// ваше условие

// console.log(isAlmostLeapYear) // false

let year2 = 1999
let isAlmostLeapYear2

if (year2 % 4 === 0 || year2 % 100 === 0 || (year2 + 1) % 4 === 0) {
	isAlmostLeapYear2 = true
} else {
	isAlmostLeapYear2 = false
}
console.log(isAlmostLeapYear2)

// ваше условие

// console.log(isAlmostLeapYear) // true (потому что 2000 — високосный)

// 3.
// Дана переменная num
// Если num делится на 7, но не делится на 5 → вернуть "Семёрка!"
// Если num делится на 5, но не делится на 7 → вернуть "Пятёрка!"
// Если num делится и на 5 и на 7 → вернуть "Семь и пять!"
// В остальных случаях → вернуть "Обычное число"

// Используйте switch.

let num = 35
let answer

switch (true) {
	case num <= 0:
		answer = 'incorrect number'
		break
	case num % 7 === 0 && num % 5 === 0:
		answer = 'its 7 and 5'
		break
	case num % 7 === 0:
		answer = 'its 7'
		break
	case num % 5 === 0:
		answer = 'its 5'
		break
	default:
		answer = 'Обычное число'
		break
}

console.log(answer)
