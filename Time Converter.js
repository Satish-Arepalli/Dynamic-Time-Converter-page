let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

function timeConverter() {
    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours";
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
    } else {
        let hours = parseInt(hoursInputEl.value);
        let minutes = parseInt(minutesInputEl.value);

        errorMsgEl.textContent = "";
        let sum = hours * 3600 + minutes * 60;
        timeInSecondsEl.textContent = `${sum}s`;
        timeInSecondsEl.classList.add("time-inseconds");
    }
}
convertBtnEl.addEventListener("click", timeConverter);