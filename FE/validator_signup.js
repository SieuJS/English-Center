function validateEmail(email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function validateUsername(username) {
  return username.length >= 4;
}

function validatePassword(password) {
  return password.length >= 6;
}

function validateAccessCode(accessCode) {
  return accessCode.length === 6;
}

function validateForm() {
  const emailInput = document.getElementById('email');
  const alertEmail = document.getElementById('alert email');
  
  const usernameInput = document.getElementById('username');
  const alerUsername = document.getElementById('alert username');

  const passwordInput = document.getElementById('password');
  const alerPassword = document.getElementById('alert password');

  const confirmPasswordInput = document.getElementById('confirmPassword');
  const alerConfirmPassword = document.getElementById('alert confirmPassword');

  const accessCodeInput = document.getElementById('access-code');
  const alerAccessCode = document.getElementById('alert access-code');

  const teacherButton = document.querySelector('.form-teacher');

  alerAccessCode.style.display = 'none';
  alertEmail.style.display = 'none';
  alerUsername.style.display = 'none';
  alerPassword.style.display = 'none';
  alerConfirmPassword.style.display = 'none';

  emailInput.classList.remove('invalid');
  usernameInput.classList.remove('invalid');
  passwordInput.classList.remove('invalid');
  confirmPasswordInput.classList.remove('invalid');
  accessCodeInput.classList.remove('invalid');

  if (!validateAccessCode(accessCodeInput.value) && teacherButton.disabled == true) {
    alerAccessCode.style.display = 'block';
    accessCodeInput.classList.add('invalid');
    return false;
  }

  if (!validateEmail(emailInput.value)) {
    alertEmail.style.display = 'block';
    emailInput.classList.add('invalid');
    return false;
  }

  if (!validateUsername(usernameInput.value)) {
    alerUsername.style.display = 'block';
    usernameInput.classList.add('invalid');
    return false;
  }

  if (!validatePassword(passwordInput.value)) {
    alerPassword.style.display = 'block';
    passwordInput.classList.add('invalid');
    return false;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alerConfirmPassword.style.display = 'block';
    confirmPasswordInput.classList.add('invalid');
   return false;
  }

  return true;
}

const submitButton = document.getElementById('submitButton');
  if (submitButton) {
    submitButton.addEventListener('click', function (event) {

    if (!validateForm()) {
      event.preventDefault();
    }
    console.log(this.value);
  });
}
