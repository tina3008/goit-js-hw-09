const formSet = document.querySelector('.feedback-form');
const inputinfo = document.querySelector('input');
const areainfo = document.querySelector('textarea');
const saveinfo = { email: '', message: '' };

const infoStorage = localStorage.getItem('feedback-form-state');
const parsedinfo = JSON.parse(infoStorage);

console.log(`infoStorage=${infoStorage}`);
console.log(`parsedinfo=${parsedinfo}`);

if (saveinfo.email === '' || saveinfo.message === '') {
  formSet.addEventListener('input', event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    saveinfo.email = email.trim();
    saveinfo.message = message.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(saveinfo));
    console.log(saveinfo);
  });
} else {
  areainfo.value = saveinfo.message;
  inputinfo.value = saveinfo.email;
  console.log(
    `areainfo.value=${areainfo.value}, inputinfo.value=${inputinfo.value}`
  );
}

formSet.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');
  formSet.reset();
});
