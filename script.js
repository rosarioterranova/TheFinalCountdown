//Global Variables
let countdownTitle = ""
let countdownDate = ""
let coundownValue = null
let countdownActive = null
const title = document.querySelector("#title")

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 

//Coundown Configurator Variables
const coundownConfigurator = document.querySelector("#coundown-configurator")
const countdownForm = document.querySelector("#countdown-form")
const inputDate = document.querySelector("#countdown-input-date")

//Coundown Timer Variables
const coundownTimer = document.querySelector("#coundown-timer")
const resetCountdown = document.querySelector("#reset-countdown")
const countdownElements = document.querySelectorAll(".countdown-elements")

//Limit Date
const today = new Date().toISOString().split("T")[0]
inputDate.setAttribute("min",today)

const updateDOM = () => {
    countdownActive = setInterval(() => {
        const now = new Date().getTime()
        const distance = coundownValue - now
        
        const distances = [
            Math.floor(distance / day),
            Math.floor((distance % day) / hour),
            Math.floor((distance % hour) / minute),
            Math.floor((distance % minute) / second)
        ]

        for (let i = 0; i < countdownElements.length; i++) {
            countdownElements[i].textContent = distances[i]
        }
    },second)

    title.textContent = countdownTitle
    coundownConfigurator.hidden = true
    coundownTimer.hidden = false
}

//Submit Form
countdownForm.addEventListener("submit", event => {
    event.preventDefault()
    countdownTitle = event.srcElement[0].value
    countdownDate = event.srcElement[1].value
    if(!countdownTitle || !countdownDate){
        alert("Please enter the correct values")
    } else {
        coundownValue = new Date(countdownDate).getTime() //how many millisecond from date
        updateDOM()
    }
})

resetCountdown.addEventListener("click", () => {
    title.textContent = "The Final Countdown"
    coundownConfigurator.hidden = false
    coundownTimer.hidden = true
    clearInterval(countdownActive)
    countdownDate = ""
})