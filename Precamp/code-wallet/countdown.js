

const dateFormMaker = function() {
    const inputYear = document.querySelector("#target-year-input").value
    const inputMonth = document.querySelector("#target-month-input").value
    const inputDate = document.querySelector("#target-date").value

    const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate

    return dateFormat
}

const counterMaker = function() {

        const targetDateInput = dateFormMaker();

        const nowDate = new Date()
        const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
        const remaining = (targetDate - nowDate) / 1000

        const remainingDate = Math.floor(remaining / 86400);
        const remainingHours = Math.floor(remaining / 3600) % 24;
        const remainingMin = Math.floor(remaining / 60) % 60;
        const remainingSec = Math.floor(remaining) % 60; 

        console.log(remainingDate, remainingHours, remainingMin, remainingSec)
    }