const btn = document.querySelector('#themeToggle')
btn.addEventListener('click', () => {
	if (btn.textContent === 'Тёмная тема') {
		btn.textContent = 'Светлая тема'
		document.body.classList.replace('dark-theme', 'light-theme')
	} else if (btn.textContent === 'Светлая тема') {
		btn.textContent = 'Тёмная тема'
		document.body.classList.replace('light-theme', 'dark-theme')
	}
})
