const secs = document.querySelector(".second");
const mins = document.querySelector(".minute");
const hours = document.querySelector(".hour");

function getTime() {
  const time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()

    hours.style.transform = `rotate(${180 + (hour * 30)}deg)`
    mins.style.transform = `rotate(${180 + (minute * 6)}deg)`
    secs.style.transform = `rotate(${180 + (second * 6)}deg)`
}

setInterval(getTime, 1000);

