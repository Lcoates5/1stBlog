// TODO: Create a variable that selects the form element
const form = document.getElementById('blog-form');
const usernameEl = document.getElementById('username')
const titleEl = document.getElementById('title')
const contentEl = document.getElementById('content')
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget);

  let formValue = {
    username: usernameEl.value,
    title: titleEl.value,
    content: contentEl.value
  }
  let formvalues = JSON.parse(localStorage.getItem('formvalues')) || [];
  formvalues.push(formValue);
  localStorage.setItem('formvalues', JSON.stringify(formvalues));

window.location.href = 'blog.html';

  if (formValue.username === '' || formValue.title === '' || formValue.content === '') {
    const errorMessage = document.getElementById('errormessage');
    errorMessage.innerText = 'Please complete the form';
    return
  }

  localStorage.setItem('form', JSON.stringify(formValue));
  redirectPage('blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

form.addEventListener('submit', handleSubmit);
