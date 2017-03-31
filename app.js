window.onload = function() {

    let secondHand = document.querySelector('.second-hand')
    let minuteHand = document.querySelector('.minute-hand')
    let hourHand = document.querySelector('.hour-hand')
    let allHands = document.querySelectorAll('.hand')

    function setDate() {
      let date = new Date()

        let second = date.getSeconds()
        let secondDegree = ((second / 60) * 360) + 90
        secondHand.style.transform = `rotate(${secondDegree}deg)`

        let minute = date.getMinutes()
        let minuteDegree = ((minute / 60) * 360) + 90
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`

        let hour = date.getHours()
        let hourDegree = ((hour / 12) * 360) + 90
        hourHand.style.transform = `rotate(${hourDegree}deg)`

        if (secondDegree === 90) {
            allHands.forEach(hand => hand.style.transition = 'none')
        } else {
            allHands.forEach(hand => hand.style.transition = '')
        }

        let adjustedHour
        if (hour > 12) {
          adjustedHour = hour - 12
          document.getElementById('time').innerHTML = `${adjustedHour}:${minute} pm`

        } else {
          adjustedHour = hour
          document.getElementById('time').innerHTML = `${adjustedHour}:${minute} am`
        }

    }

    setInterval(setDate, 1000)

}
