function getTime(){
    const time = new Date()
    // Clock
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    hour = checkTime(hour)
    min = checkTime(min)
    sec = checkTime(sec)
    // Date
    let d = time.getDate()
    let m = time.getMonth()+1 
    let y = time.getFullYear()

    document.getElementById("hour").innerHTML = hour 
    document.getElementById("min").innerHTML = min 
    document.getElementById("sec").innerHTML = sec 
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y
    setTimeout(getTime, 1000)


    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
    
    
}
getTime()
