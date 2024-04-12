// Получаем элементы
const inputName = document.getElementById('name-input');
const spanNameOutput = document.getElementById('name-output');

// Добавляем обработчик события input на элемент inputName
inputName.addEventListener('input', () => {
  // Получаем текущее значение инпута
  const inputValue = inputName.value.trim();

  // Если значение пустое или состоит только из пробелов, то устанавливаем "Anonymous"
  if (inputValue === '') {
    spanNameOutput.textContent = 'Anonymous';
  } else {
    // Иначе устанавливаем текущее значение
    spanNameOutput.textContent = inputValue;
  }
});
