let countdown = new Date("Jun 1, 2020 00:00:00").getTime(); 

let x = setInterval(function() {
    let now = new Date().getTime();

    let distance = countdown - now; 

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);

    document.querySelector(".days-datestamp").innerHTML = `Day: ${days}`;
    document.querySelector(".time-datestamp").innerHTML = `${hours} : ${minutes} : ${seconds}`;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".days-datestamp").innerhtml = ""; 
        document.querySelector(".time-datestamp").innerHTML = "";
    }
}, 1000);