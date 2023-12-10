'use strict';
const form = document.querySelector('.register');
const nameInput = document.querySelector('.register_name');
const emailInput = document.querySelector('.register_email');
const confirmInput = document.querySelector('.register_confirm');
const spamConfirm = document.querySelector('.register_spam');
const tierSelect = document.querySelector('.register_tier');
const submitButton = document.querySelector('.focus_button');
const nameErrorMessage = document.querySelector('.register_name + .error_message');
const emailErrorMessage = document.querySelector('.register_email + .error_message');
const confirmErrorMessage = document.querySelector('.register_confirm + .error_message');

form.addEventListener('submit', (event) => {
  let hasError = false;

  if (nameInput.value === '') {
    nameErrorMessage.classList.add('open');
    hasError = true;
  } else {
    nameErrorMessage.classList.remove('open');
  }

  if (emailInput.value === '') {
    emailErrorMessage.innerText = "Email is required";
    emailErrorMessage.classList.add('open');
    hasError = true;
  } else {
    emailErrorMessage.classList.remove('open');
  }

  if (emailInput.value !== confirmInput.value) {
    confirmErrorMessage.innerText = "Emails do not match";
    confirmErrorMessage.classList.add('open');
    hasError = true;
  } else {
    confirmErrorMessage.classList.remove('open');
  }

  if (hasError) {
    event.preventDefault();
  }
});

nameInput.addEventListener('input', () => {
  if (nameInput.value !== '') {
    nameErrorMessage.classList.remove('open');
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.value !== '') {
    emailErrorMessage.classList.remove('open');
  }
});

confirmInput.addEventListener('input', () => {
  if (emailInput.value === confirmInput.value) {
    confirmErrorMessage.classList.remove('open');
  }
});

spamConfirm.addEventListener('keydown',(e)=> {
  if (e.key === "Enter") {
    e.preventDefault();
    spamConfirm.checked = !spamConfirm.checked; 
  }
});

nameInput.addEventListener('keydown',(e)=> {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
emailInput.addEventListener('keydown',(e)=> {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
confirmInput.addEventListener('keydown',(e)=> {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});