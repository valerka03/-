// 1. У вас есть строка "The mysterious old man whispered secrets to the curious child under the moonlight.". Ваша задача сделать из этой строки массив и из элементов этого массива сделать такие предложения:
// The mysterious old man whispered secrets to the curious child.
// The mysterious old man whispered under the moonlight.
// The curious child listened to the secrets.
// The old man whispered to the child under the moonlight.

const sentence =
	'The mysterious old man whispered secrets to the curious child under the moonlight.'
const arr = sentence.split(' ')

const sentence1 = arr.slice(0, 10).join(' ') + '.'
console.log(sentence1)

const sentence2 = arr.slice(0, 5).join(' ') + arr.slice(10).join(' ')
console.log(sentence2)

const sentence3 =
	arr.slice(0, 1).join(' ') +
	' ' +
	arr.slice(8, 10).join(' ') +
	' listened to the secrets'
console.log(sentence3)

const sentence4 =
	arr.slice(0, 1).join(' ') +
	' ' +
	arr.slice(2, 5).join(' ') +
	' ' +
	arr.slice(6, 8).join(' ') +
	' ' +
	arr.slice(9).join(' ')
console.log(sentence4)

// 2. Ваша задача с помощью промптов и методов массивов превратить массив и 2 слова в полноценное предложение. Первый промпт запрашивает массив ['The', 'dog', 'chased', 'the', 'across', ' the  '], второй промпт получает "cat" и третий "yard".

// Предложение, которое должно получится: "The dog chased the cat across the yard"

const arrayInput = prompt(
	'Введите массив слов The,dog,chased,the,across,the'
).split(',')
const word1 = prompt('Введите первое слово cat').trim()
const word2 = prompt('Введите второе слово yard').trim()

arrayInput.splice(4, 0, word1)
arrayInput.push(word2)

const finalSentence = arrayInput.join(' ').trim() + '.'

console.log(finalSentence)
