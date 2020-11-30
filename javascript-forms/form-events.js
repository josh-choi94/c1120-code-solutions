function handleFocus(event) {
    console.log('focus event fired');
    console.log('event.target.name', event.target.name);
  
  }
  
  function handleBlur(event) {
    console.log('blur event fired');
    console.log('event.target.name', event.target.name);
  }
  
  function handleInput(event) {
    console.log('value of', event.target.name + event.target.value);
  }

  var userNameInput = document.querySelector('#user-name');
  var userEmailInput = document.querySelector('#user-email');
  var userMessage = document.querySelector('#user-message');

userNameInput.addEventListener('input', handleInput);
userEmailInput.addEventListener('input', handleInput);
userMessage.addEventListener('input', handleInput);

userNameInput.addEventListener('focus', handleFocus);
userEmailInput.addEventListener('focus', handleFocus);
userMessage.addEventListener('focus', handleFocus);

userNameInput.addEventListener('blur', handleBlur);
userEmailInput.addEventListener('blur', handleBlur);
userMessage.addEventListener('blur', handleBlur);