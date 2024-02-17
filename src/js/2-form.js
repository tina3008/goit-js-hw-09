const formSet = document.querySelector('.feedback-form');
const inputinfo = document.querySelector('input');
const areainfo = document.querySelector('textarea');
const saveinfo = { email: '', message: '' };

const parsedinfo = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parsedinfo !== null) {
  areainfo.value = parsedinfo.message;
  inputinfo.value = parsedinfo.email;
}

formSet.addEventListener('input', event => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  saveinfo.email = email.trim();
  saveinfo.message = message.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(saveinfo));
});

formSet.addEventListener('submit', evt => {
  evt.preventDefault();

  if (areainfo.value.length == 0 || inputinfo.value.length == 0) {
    console.log(`please fill all field`);
  } else {
    console.log(saveinfo);
    localStorage.removeItem('feedback-form-state');
    formSet.reset();
    saveinfo.length = 0;
  }
});
