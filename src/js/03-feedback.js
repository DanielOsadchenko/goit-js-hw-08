var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

const formData = {
  email: '',
  message: '',
}
formRef.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log({email: emailRef.value, message: messageRef.value});
  event.currentTarget.reset();
  localStorage.clear();
})
formRef.addEventListener('input', throttle(onForm, 500));

function onForm(event) {
  const emailValue = event.currentTarget.elements.email.value;
  const messageValue = event.currentTarget.elements.message.value;

    formData.email = emailValue;
    formData.message = messageValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  
}
function getCurrentValuesOnForm() {
  const localStorageData = localStorage.getItem('feedback-form-state');
  if (localStorageData) {
    const currentData = JSON.parse(localStorageData);
    emailRef.value = currentData.email;
    messageRef.value = currentData.message;
}
};
getCurrentValuesOnForm();




