'use strict';
const menuButton = document.getElementById("menu-button");
const dropdownMenuContent = document.querySelector(".drpdown-content");

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
