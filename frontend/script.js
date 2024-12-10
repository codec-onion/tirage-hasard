const numberOfDraws = document.querySelector("#number_of_draws")
const startButton = document.querySelector(".start")

let totalNumbers = 5
let totalStars = 2
let classicNumbers = []
let starsNumbers = []

const createRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + 1)

const createClassicDraw = () => {
  for (let i = 0; i < totalNumbers; i++) {
    let min = 1
    let max = 51
    let randomNumber = createRandomNumber(min, max)
    while (classicNumbers.includes(randomNumber)) {
      randomNumber = createRandomNumber(min, max)
    }
    classicNumbers.push(randomNumber)
  }
  return classicNumbers
}

const showClassicDraw = () => {
  console.log(createClassicDraw())
  classicNumbers = []
}

startButton.addEventListener("click", (e) => {
  showClassicDraw()
})
