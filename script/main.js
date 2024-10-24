'use strict';
//Burger menu
const hamburger = document.getElementById('hamburger');
const burgerMenu = document.getElementById('burger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    burgerMenu.classList.toggle('active'); 
});



const closeBtns = document.querySelectorAll("#burger-menu a"); 
closeBtns.forEach(function(link) {
    link.addEventListener("click", function(e) {
        burgerMenu.classList.remove("active"); 
        hamburger.classList.remove("active");  
    });
});

// FAQ Accordion 
const box = document.querySelectorAll('.box');
  box.forEach(function (item) {
    item.addEventListener('click', function () {
        const answer = this.querySelector('.answer');
        const icon = this.querySelector('.icon');
        if (answer) {
            answer.classList.toggle('display-answer');
        }
        if (icon) {
            if (icon.src.includes("images/icons/down-arrow.svg")) {
                icon.src = "images/icons/up-arrow.svg";
            } else {
                 icon.src = "images/icons/down-arrow.svg";
            } 
            }
    });
});

//Smooth Scrolling
function smoothScroll() {
    const links = document.querySelectorAll('a:link'); 
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute("href"); 
            if (href === "#") {
                e.preventDefault(); 
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            } 
            else if (href.startsWith("#")) {
                e.preventDefault();
                const section = document.querySelector(href); 
                if (section) { 
                    section.scrollIntoView({
                        behavior: "smooth" 
                    });
                }
            }
        });
    });
}
smoothScroll();

//Form Validation
function formValidation() {
    const userName = document.getElementById('fname').value.trim();
    const userEmail = document.getElementById('email').value.trim();
    const userMessage = document.getElementById('message').value.trim();
    const errorMessages = [];
    const validateName = /^[A-Z][a-zA-Z'-]+(?:\s[A-Z][a-zA-Z'-]+)*$/;
    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!validateEmail.test(userEmail)) {
        errorMessages.push('Please Enter Valid Email');
    }
     if (!validateName.test(userName)) {
        errorMessages.push('Please Enter Valid Name');
    }
     if (userMessage.length <=10) {
        errorMessages.push('Message must be more than 10 characters');
    }
      if (errorMessages.length > 0) {
        alert(errorMessages.join('\n')); 
        return false; 
    }
    return true;
}

const submitbtn = document.querySelector('.btn-submit');
const closeWindow = document.querySelector('.close');
const approveForm = document.querySelector('.approve-window');
const wrapper = document.querySelector('.wrapper');

submitbtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (formValidation()) {
        document.querySelector('.form').reset();
      approveForm.classList.remove('hidden'); 
      wrapper.classList.remove('hidden');
      wrapper.style.display = 'block'; 
    }
});
function closeModal() {
      approveForm.classList.add('hidden');
      wrapper.classList.add('hidden');
      wrapper.style.display = 'none'; 
}
closeWindow.addEventListener('click', closeModal);
window.addEventListener('click', function (event) {
    if (event.target === wrapper) { 
      closeModal();
    }
});
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal()
  }
});
