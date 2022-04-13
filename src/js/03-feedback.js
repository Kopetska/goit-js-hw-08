import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');

initForm();

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill in all the fields');
    return;
  }
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

form.addEventListener(
  'input',
  throttle(event => {
    let filters = localStorage.getItem(LOCALSTORAGE_KEY);
    filters = filters ? JSON.parse(filters) : {};
    filters[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filters));
  }, 500),
);

function initForm() {
  let filters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (filters) {
    filters = JSON.parse(filters);
    Object.entries(filters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
