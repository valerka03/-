// 1. Напиши функцию factorial(n), которая принимает число n и возвращает его факториал.

function factorial(n) {
	if (n < 0) {
		return undefined
	}
	if (n === 0 || n === 1) {
		return 1
	}
	return n * factorial(n - 1)
}
console.log(factorial(5))

// 2. Напиши функцию isPalindrome(str), которая проверяет, является ли строка
// палиндромом (читается одинаково слева направо и справа налево).

function isPalindrome(str) {
	return str === str.split('').reverse().join('')
}
console.log(isPalindrome('Hello'))
console.log(isPalindrome('HelleH'))
