window.onload = function() {

    let secondHand = document.querySelector('.second-hand')
    let minuteHand = document.querySelector('.minute-hand')
    let hourHand = document.querySelector('.hour-hand')

    function setDate() {
        let date = new Date()

        let second = date.getSeconds()
        let secondDegree = ((second / 60) * 360) + 90
        secondHand.style.transform = `rotate(${secondDegree}deg)`
        console.log(secondDegree);

        let minute = date.getMinutes()
        let minuteDegree = ((minute / 60) * 360) + 90
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`

        let hour = date.getHours()
        let hourDegree = ((hour / 12) * 360) + 90
        hourHand.style.transform = `rotate(${hourDegree}deg)`

        if (secondDegree === 444) {
          secondHand.style.transition = null
        }
    }

    setInterval(setDate, 1000)

}
