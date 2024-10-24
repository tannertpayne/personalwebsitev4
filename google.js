const scriptURL = 'https://script.google.com/macros/s/AKfycbzi-TbwrSfnip1VCCobU3aKJcu8px-z0h6YISTPujOA_FhfbeERRq-hM7YuY-bC9v9yow/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      showModal();
    })
    .catch(error => console.error('Error!', error.message));
});

