document.addEventListener('DOMContentLoaded', function() {
  const policyCheckbox = document.getElementById('policyCheckbox');
  const submitButton = document.getElementById('submitButton');

  policyCheckbox.addEventListener('change', function () {
      if (policyCheckbox.checked) {
          submitButton.disabled = false;
          submitButton.style.backgroundColor = '#800080';

          submitButton.classList.add('form-submit-hover');
      } else {
          submitButton.disabled = true;
          submitButton.style.backgroundColor = '';

          submitButton.classList.remove('form-submit-hover');
      }
  });
});