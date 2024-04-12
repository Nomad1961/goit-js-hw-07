// Создание элементов галереи и добавление в DOM
const gallery = document.querySelector('.gallery');

const galleryItems = images.slice(0, 3).map(image => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  li.appendChild(img);
  return li;
});

galleryItems.forEach(item => {
  gallery.appendChild(item);
});

// Добавление CSS классов для оформления галереи флексбоксами
gallery.classList.add('gallery-container');
galleryItems.forEach(item => {
  item.classList.add('gallery-item');
});
