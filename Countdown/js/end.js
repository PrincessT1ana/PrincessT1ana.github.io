
//Calculation to Convert Units of Time Format Countdown Text

function convertToDaysLeft(milliseconds) {
        return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
 }


function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
}


function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
}


function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
}


function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
}


//Initialize Coutdown

    //Set Variable for End of Countdown
    let deadline = new Date ("October 31,2022 13:00:00");

    //Set Variable to Select H1 We Need
    let countdown = document.getElementById("countdown");

    //Get Rid Of Loading Countdown Text
    countdown.innerHTML = "";


    function setCountdown() {

        let now = new Date ();

        let timeLeft = deadline.getTime() - now.getTime();

        let daysLeft = convertToDaysLeft (timeLeft);
        let hoursLeft = convertToHoursLeft (timeLeft);
        let minutesLeft = convertToMinutesLeft (timeLeft);
        let secondsLeft = convertToSecondsLeft (timeLeft);

        countdown.innerHTML = formatCountdownText(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    }

    setInterval(setCountdown, 1000)