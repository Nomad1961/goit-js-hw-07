// Выбор элемента с id "categories"
const categories = document.getElementById('categories');

// Вывод количества категорий (li.items.elements)
const numberOfCategories = categories.querySelectorAll('li.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

// Вывод категорий (li.item) и субкатегорий (li)
const categoryItems = categories.querySelectorAll('li.item');
categoryItems.forEach(categoryItem => {
  // Вывод заголовка (h2)
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  console.log(`Category title: ${categoryTitle}`);

  // Вывод субкатегорий (li)
  const numberOfSubcategories = categoryItem.querySelectorAll('li').length;
  console.log(`Number of subcategories: ${numberOfSubcategories}`);
});

// Number of categories: 3
// Category title: Animals
// Number of subcategories: 4
// Category title: Products
// Number of subcategories: 3
// Category title: Technologies
// Number of subcategories: 5
