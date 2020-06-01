let slide_index =  0; 
reveal();

function reveal() {
    let integer; 
    let slides = document.querySelectorAll(".slide");
    
    for (integer = 0; integer < slides.length; integer++) {
        slides[integer].style.display = "none";
    }
    slide_index++;

    if(slide_index > slides.length) {
        slide_index = 1; 
    }

    slides[slide_index-1].style.display = "block";
    setTimeout(reveal, 7000);
}

let menu_state = 0;
let paused = 0; 



document.querySelector('.fas').onclick = function () {
    if(menu_state == 0) {
     let dropdown_menu = document.querySelector(".dropdown-music");
     dropdown_menu.style.display = "inline";
     menu_state++; 
     } else { 
        let dropdown_menu = document.querySelector(".dropdown-music");
        dropdown_menu.style.display = "none";
        menu_state--; 
    }
}

let mess = document.querySelector(".mess"); 
let messA = document.querySelector(".messA");
let carry = document.querySelector(".carry"); 
let carryA = document.querySelector(".carryA");
let blood = document.querySelector(".blood"); 
let bloodA = document.querySelector(".bloodA");
let truth = document.querySelector(".truth"); 
let truthA = document.querySelector(".truthA");
let trees = document.querySelector(".trees"); 
let treesA = document.querySelector(".treesA");


mess.addEventListener("click", function() {
       messA.play();
       carryA.pause(); 
       bloodA.pause();
       truthA.pause();
       treesA.pause();
})
carry.addEventListener("click", function() {
        messA.pause();
        carryA.play(); 
        bloodA.pause();
        truthA.pause();
        treesA.pause();  
})
blood.addEventListener("click", function() {
        messA.pause();
       carryA.pause(); 
       bloodA.play();
       truthA.pause();
       treesA.pause();
})
truth.addEventListener("click", function() {
        messA.pause();
       carryA.pause(); 
       bloodA.pause();
       truthA.play();
       treesA.pause();
})
trees.addEventListener("click", function() {
        messA.pause();
       carryA.pause(); 
       bloodA.pause();
       truthA.pause();
       treesA.play();
})