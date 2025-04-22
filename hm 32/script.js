function disemvowel(str) {
	let vowels = 'aoiuAOIU'
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		if (!vowels.includes(str[i])) {
			newStr += str[i]
		}
	}
	return newStr
}
console.log(disemvowel('This website is for losers LOL!'))

function getMiddle(s) {
	if (s.length % 2 === 0) {
		return s[s.length / 2 - 1] + s[s.length / 2]
	} else {
		return s[Math.floor(s.length / 2)]
	}
}
console.log(getMiddle('test'))
console.log(getMiddle('testing'))
