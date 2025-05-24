const ul = document.querySelector('#itemList')
const input = document.querySelector('#itemInput')
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', () => {
	const li = document.createElement('li')
	const dltButton = document.createElement('button')
	dltButton.classList = 'delete-btn'
	dltButton.textContent = 'remove'
	li.textContent = input.value
	li.append(dltButton)
	ul.append(li)
	dltButton.addEventListener('click', () => {
		li.remove()
	})
	const dltAll = document.querySelector('#clearBtn')
	dltAll.addEventListener('click', () => {
		li.remove()
	})
})
