import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const submit = document.querySelector("button");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(saveInformation, 500));
submit.addEventListener("submit", onFormSubmit);

populateInformation();

function saveInformation() {
  let email = form.elements.email.value;
  let message = form.elements.message.value;
  const information = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(information));
}

function onFormSubmit() {
  const info = localStorage.getItem(STORAGE_KEY);

  form.reset();

  console.log(JSON.parse(info));
  localStorage.removeItem(STORAGE_KEY);
}

function populateInformation() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    form.value = savedMessage;
  }
}
