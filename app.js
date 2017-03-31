function setDate() {
    let date = new Date()
    let sec = date.getSeconds()
    console.log(sec);
}

setInterval(setDate, 1000)
