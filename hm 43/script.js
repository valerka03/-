const listItems = document.querySelectorAll('li')
listItems.forEach((el, i) => {
	if (i % 2 === 0) {
		el.style.color = 'green'
	} else {
		el.style.color = 'orange'
	}
})

const pitems = document.querySelectorAll('p')
pitems.forEach(el => {
	if (el.textContent === 'Click me') {
		el.addEventListener('click', () => {
			console.log('Button clicked!')
		})
	}
})
