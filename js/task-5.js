function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//  Получаем ссылку на элементы
const bodyElem = document.querySelector('body');
const spanColorElem = document.querySelector('.color');
const changeColorBtnElem = document.querySelector('.change-color');

// Присвоение начального текстового контента элемента <span> с класом "color"
spanColorElem.textContent = 'Background color: -';

// Добавление обработчика событий для кнопки "Change color"
changeColorBtnElem.addEventListener('click', () => {
  // Генерируем случайный цвет в формате НЕХ
  const newBackgroundColor = getRandomHexColor();

  // Меняем фон элемента <body> на новый случайный цвет
  bodyElem.style.backgroundColor = newBackgroundColor;

  // Меняем текстовое содержание элемента <span> с классом "color" на текущий цвет фона
  spanColorElem.textContent = `Background color: ${newBackgroundColor}`;
});
