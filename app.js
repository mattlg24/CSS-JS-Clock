window.onload = function() {

    let secondHand = document.querySelector('.second-hand')

    function setDate() {
        let date = new Date()
        let second = date.getSeconds()
        let secondDegree = ((second / 60) * 360) + 90
        secondHand.style.transform = `rotate(${secondDegree}deg)`
        console.log(second);
    }

    setInterval(setDate, 1000)

}
