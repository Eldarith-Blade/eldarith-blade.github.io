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

document.querySelector('.fas').onclick = function () {
     let audio = document.getElementById("audio");
    audio.play();
}