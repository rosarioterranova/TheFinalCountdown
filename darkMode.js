const darkModeBtn = document.querySelector("#darkMode-button")
const darkModeIcon= document.querySelector("#darkMode-icon")

darkModeBtn.addEventListener("click", () => {
    if(document.body.classList.value=="light")
        setDarkMode(true)
    else
        setDarkMode(false)
})

const setDarkMode = enabled => {
    if(enabled){
        document.body.classList.replace("light","dark")
        darkModeIcon.classList.replace("fa-sun","fa-moon")
        localStorage.setItem("darkMode", "enabled");
    } else{
        document.body.classList.replace("dark","light")
        darkModeIcon.classList.replace("fa-moon","fa-sun")
        localStorage.setItem("darkMode", "disabled");
    }
}

setDarkMode(localStorage.getItem("darkMode") == "enabled"? true: false)