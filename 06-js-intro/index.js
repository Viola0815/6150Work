'use strict';
const MenuButton = document.querySelector("#Dropdown");
const dropdownContent = document.querySelector(".DropdownContent");


let isMenuOpen = false; 

function toggleMenu() {
    if (isMenuOpen) {
        dropdownContent.classList.remove("open");
    } else {
        dropdownContent.classList.add("open");
    }
    isMenuOpen = !isMenuOpen; 
}

MenuButton.addEventListener("click", toggleMenu);

MenuButton.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        toggleMenu(); 
    }
});
