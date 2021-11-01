// Question 1A
const button1 = document.querySelector(`button`)

// Question 1B
button1.addEventListener(`click`, () => {
    alert("Cool! You can hear/understand a hummingbird and ants")
})

// Question 2A
const h3 = document.querySelector(`h3`)

// Questin 2B
h3.addEventListener(`mouseenter`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one")
})

// Question 3A
const form = document.querySelector(`form`)

// Question 3B
form.addEventListener(`submit`, () => {
    alert(form.elements.quote.value)
})

// BONUS

// QUestion 4A
const darkMode = document.querySelector(`#dm`)

// Question 4B
darkMode.addEventListener(`click`, () => {
    for (element of document.querySelectorAll(`*`)) {
        element.classList.toggle(`dark-mode`)
    }
})

// Question 5A
const reality = document.querySelector(`#reality`)

// Question 5B
let btnclicks = 0

reality.addEventListener(`click`, () => {
    if (btnclicks < 2) {
        alert("You have successfully moved to another reality");
    }
    else if (btnclicks == 2) {
        alert("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
    }
    else {
    }
    btnclicks++;
})