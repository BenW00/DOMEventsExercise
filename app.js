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