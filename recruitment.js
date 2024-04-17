const scriptURL = 'https://script.google.com/macros/s/AKfycbwvRm1XZ6XHXp_Bsm1XJcVXdkxHx351o18sXQG1yUwIhwHKHDcIo475YcTXVPdKT6yX-Q/exec'

const form = document.forms['recruitment-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  // Disable the submit button immediately
  document.getElementById('submit').disabled = true;
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("شكرا لك ،،، تمت العملية بنجاح" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



