let future = new Date();
future.setDate(future.getDate() + 14)
const futur2 = future.getTime()

// Update the count down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    const currentTime = new Date().getTime();
    // const countDownDate =  currentTime.setDate(currentTime.getDate() + 14);


    // Find the distance between now and the count down date
    const distance = futur2 - currentTime;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    const daysText = document.getElementsByClassName("days");
    const hoursText = document.getElementsByClassName("hours");
    const minutesText = document.getElementsByClassName("minutes");
    const secondsText = document.getElementsByClassName("seconds");

    for (let i = 0; i < daysText.length; i++) {
        daysText[i].innerHTML = days
    }
    for (let i = 0; i < hoursText.length; i++) {
        hoursText[i].innerHTML = hours
    }
    for (let i = 0; i < minutesText.length; i++) {
        minutesText[i].innerHTML = minutes
    }
    for (let i = 0; i < secondsText.length; i++) {
        secondsText[i].innerHTML = seconds
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        alert("E")
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);