// Меняем активный класс у основной менюшки
const mainItemsContainer = document.querySelector('.main-items')

mainItemsContainer.addEventListener('click', event => {
	if (event.target.classList.contains('main-items__button')) {
		document.querySelectorAll('.main-items__button').forEach(button => {
			button.classList.remove('main-items__button--active')
		})
		event.target.classList.add('main-items__button--active')
	}
})
// Разворачиваем дескрипшен по клику
const descriptionReadMoreButton = document.querySelector(
	'.description-read-more__button'
)
const descriptionText = document.querySelector('.description-text')
const descriptionSecondP = document.querySelector('.description__second-p')
const descriptionThirdP = document.querySelector('.description__third-p')
const descriptionFourthP = document.querySelector('.description__fourth-p')

descriptionReadMoreButton.addEventListener('click', () => {
	descriptionReadMoreButton.classList.toggle(
		'description-read-more__button--active'
	)
	descriptionSecondP.classList.toggle('show')
	descriptionThirdP.classList.toggle('show')
	descriptionFourthP.classList.toggle('show')

	descriptionReadMoreButton.classList.contains(
		'description-read-more__button--active'
	)
		? (descriptionReadMoreButton.textContent = 'Скрыть')
		: (descriptionReadMoreButton.textContent = 'Читать далее')
})
