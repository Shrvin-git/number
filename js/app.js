let randomNum = Math.floor(Math.random() * 100)
let inputElem = document.querySelector('#guessInput')
let btnElem = document.querySelector('#guessButton')
let alerts = document.querySelector('#result')
let help = document.querySelector('#help')
let result = document.querySelector('span')
let helpBoxElem = document.querySelector('.help_box')
let inputValue = inputElem.value
console.log(randomNum);


function checkNum() {


    if (inputElem.value == randomNum) {
        alerts.innerHTML = 'شما برنده شدید!';
        alerts.style.color = 'green';
    } else if (inputElem.value > randomNum) {
        alerts.innerHTML = 'عدد شما بزرگتر از عدد رندوم می‌باشد';
        alerts.style.color = 'red';
    } else if (inputElem.value < randomNum) {
        alerts.innerHTML = 'عدد شما کوچکتر از عدد رندوم می‌باشد';
        alerts.style.color = 'red';
    } else {
        alerts.innerHTML = 'لطفا یک عدد بین 0 و 100 وارد کنید';
    }

}

function helpNumber() {

    if (randomNum < 25) {
        helpBoxElem.innerHTML = 'عدد بین 0 و 25 هستش :))'
        helpBoxElem.style.opacity = 1
        helpBoxElem.style.visibility = 'visible'
        setTimeout(function () {
            helpBoxElem.style.opacity = 0
            helpBoxElem.style.visibility = 'hidden'
        }, 3500)
    }
    else if (randomNum > 25 && randomNum < 50) {
        helpBoxElem.innerHTML = 'عدد بین 25 و 50 هستش :))'
        helpBoxElem.style.opacity = 1
        helpBoxElem.style.visibility = 'visible'
        setTimeout(function () {
            helpBoxElem.style.opacity = 0
            helpBoxElem.style.visibility = 'hidden'
        }, 3500)
    }
    else if (randomNum > 50 && randomNum < 75) {
        helpBoxElem.innerHTML = 'عدد بین 50 و 75 هستش :))'
        helpBoxElem.style.opacity = 1
        helpBoxElem.style.visibility = 'visible'
        setTimeout(function () {
            helpBoxElem.style.opacity = 0
            helpBoxElem.style.visibility = 'hidden'
        }, 3500)
    }
    else if (randomNum > 75) {
        helpBoxElem.innerHTML = 'عدد بین 75 و 100 هستش :))'
        helpBoxElem.style.opacity = 1
        helpBoxElem.style.visibility = 'visible'
        setTimeout(function () {
            helpBoxElem.style.opacity = 0
            helpBoxElem.style.visibility = 'hidden'
        }, 3500)
    }
}





help.addEventListener('click', helpNumber)
btnElem.addEventListener('click', checkNum)