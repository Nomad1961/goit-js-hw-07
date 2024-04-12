const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = form.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const userData = {
    email,
    password,
  };

  console.log(userData);
  form.reset();
}
