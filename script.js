const numberOfDraws = document.querySelector("#number_of_draws")
const startButton = document.querySelector(".start")
const displayDraw = document.querySelector(".result")

let totalNumbers = 5
let totalStars = 2
let classicNumbers = []
let starsNumbers = []

const createRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + 1)

const createDraw = () => {
  let min = 1
  let max = 51
  for (let i = 0; i < totalNumbers; i++) {
    let randomNumber = createRandomNumber(min, max)
    while (classicNumbers.includes(randomNumber)) {
      randomNumber = createRandomNumber(min, max)
    }
    classicNumbers.push(randomNumber)
  }
  max = 13
  for (let i = 0; i < totalStars; i++) {
    let randomNumber = createRandomNumber(min, max)
    while (starsNumbers.includes(randomNumber)) {
      randomNumber = createRandomNumber(min, max)
    }
    starsNumbers.push(randomNumber)
  }
  classicNumbers.sort((a, b) => a - b)
  starsNumbers.sort((a, b) => a - b)
  for (let i in starsNumbers) {
    starsNumbers[i] = "⭐︎" + starsNumbers[i]
  }

  return classicNumbers.concat(starsNumbers).join(" ")
}

startButton.addEventListener("click", (e) => {
  displayDraw.innerHTML = ""
  for (let i = 0; i < numberOfDraws.value; i++) {
    let p = document.createElement("p")
    let content = createDraw()
    classicNumbers = []
    starsNumbers = []
    p.innerText = content
    displayDraw.appendChild(p)
  }
})
