'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalButton1 = document.getElementById("subscribe-link1");
const openModalButton2 = document.getElementById("subscribe-link2");
const openModalButton3 = document.getElementById("subscribe-link3");
const openModalButton4 = document.getElementById("subscribe-link4");
const openModalButton5 = document.getElementById("subscribe-link5");
const openModalButton6 = document.getElementById("subscribe-link6");
const form = document.querySelector('.subscribe');
const emailInput = document.getElementById('email');
const confirmInput = document.getElementById('confirmEmail');
const emailErrorMessage = document.querySelector('.email + .error_message');
const confirmErrorMessage = document.querySelector('.confirmEmail + .error_message');
const closeButton = document.getElementById("closingSymbol");
const menuButton = document.getElementById("menu-button");
const dropdownMenuContent = document.querySelector(".drpdown-content");


document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        e.preventDefault(); 
        modal.classList.remove("open");
        emailInput.value = '';
        confirmInput.value = '';
    }
  });

openModalButton1.addEventListener("click", function(e) {
    e.preventDefault(); 
    const errorMessages = document.querySelectorAll(".error_message");
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = ''; 
        errorMessage.classList.remove('open'); 
        
    });
    modal.classList.add("open");
    emailInput.value = '';
    confirmInput.value = '';
    
});
openModalButton2.addEventListener("click", function(e) {
    e.preventDefault(); 
    const errorMessages = document.querySelectorAll(".error_message");
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = ''; 
        errorMessage.classList.remove('open'); 
        
    });
    modal.classList.add("open");
    emailInput.value = '';
    confirmInput.value = '';
});
openModalButton3.addEventListener("click", function(e) {
    e.preventDefault(); 
    const errorMessages = document.querySelectorAll(".error_message");
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = ''; 
        errorMessage.classList.remove('open'); 
      
    });
    modal.classList.add("open");
    emailInput.value = '';
    confirmInput.value = '';
});
openModalButton4.addEventListener("click", function(e) {
    e.preventDefault(); 
    const errorMessages = document.querySelectorAll(".error_message");
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = ''; 
        errorMessage.classList.remove('open'); 
    });
    modal.classList.add("open");
    emailInput.value = '';
    confirmInput.value = '';
});
openModalButton5.addEventListener("click", function(e) {
    e.preventDefault(); 
    const errorMessages = document.querySelectorAll(".error_message");
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = ''; 
        errorMessage.classList.remove('open'); 
    });
    modal.classList.add("open");
    emailInput.value = '';
    confirmInput.value = '';
});
openModalButton6.addEventListener("click", function(e) {
    e.preventDefault(); 
    const errorMessages = document.querySelectorAll(".error_message");
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = ''; 
        errorMessage.classList.remove('open'); 
    });
    modal.classList.add("open");
    emailInput.value = '';
    confirmInput.value = '';
});
closeButton.addEventListener("click", function(e) {
    e.preventDefault(); 
    modal.classList.remove("open");
    overlay.classList.add("open");
    emailInput.value = '';
    confirmInput.value = '';
});





  

form.addEventListener('submit', (event) => {
    let hasError = false;

    if (emailInput.value === '') {
        emailErrorMessage.innerText = 'Email is required';
        emailErrorMessage.classList.add('open');
        hasError = true;
    }else if (!emailInput.value.includes('@')) {
        emailErrorMessage.innerText = 'Your Email must include a @';
        emailErrorMessage.classList.add('open');
        hasError = true; 
    }else {
        emailErrorMessage.classList.remove('open');
        emailErrorMessage.innerText = '';
    }

    if (emailInput.value !== confirmInput.value) {
        confirmErrorMessage.innerText = 'Emails do not match';
        confirmErrorMessage.classList.add('open');
        hasError = true;
    } else {
        confirmErrorMessage.classList.remove('open');
        confirmErrorMessage.innerText = ''
    }

    if (hasError) {
        event.preventDefault();
    }

  
});


emailInput.addEventListener('input', () => {
    if (emailInput.value !== '') {
        emailErrorMessage.innerText = ''; 
        emailErrorMessage.classList.remove('open');
    } else {
        emailErrorMessage.innerText = "Email is required";
        emailErrorMessage.classList.add('open');
    }

    if (emailInput.value.includes('@')) {
        emailErrorMessage.innerText = '';
        emailErrorMessage.classList.remove('open');
    }else{
        emailErrorMessage.innerText = 'Your Email must include a @';
        emailErrorMessage.classList.add('open');
    }

});
   

confirmInput.addEventListener('input', () => {
    if (emailInput.value === confirmInput.value) {
        confirmErrorMessage.innerText = ''; 
        confirmErrorMessage.classList.remove('open');
    } else {
        confirmErrorMessage.innerText = "Emails do not match";
        confirmErrorMessage.classList.add('open');
    }
});




menuButton.addEventListener("click", function() {
  if (dropdownMenuContent.classList.contains("hidden")) {
    dropdownMenuContent.classList.remove("hidden"); 
  } else {
    dropdownMenuContent.classList.add("hidden"); 
  }
});

menuButton.addEventListener("keydown", function(e) {
    if (e.key === "Space") {
        e.preventDefault(); 
        if (dropdownMenuContent.classList.contains("hidden")) {
          dropdownMenuContent.classList.remove("hidden"); 
        } else {    
          dropdownMenuContent.classList.add("hidden"); 
        }
      }
    });
  
    menuButton.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
          e.preventDefault(); 
          if (dropdownMenuContent.classList.contains("hidden")) {
            dropdownMenuContent.classList.remove("hidden"); 
          } else {    
            dropdownMenuContent.classList.add("hidden"); 
          }
        }
      });
  



