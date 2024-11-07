const display = document.querySelector('#counter')

let displayCount = parseInt(display.textContent)

const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const reset = document.querySelector('.reset')

increment.addEventListener('click', function () {
    console.log('increment clicked')
    displayCount = displayCount + 1
    console.log('display count:', displayCount)
    display.innerHTML = displayCount
})

decrement.addEventListener('click', function () {
    displayCount = displayCount - 1
    display.innerHTML = displayCount
})

reset.addEventListener('click', function () {
    displayCount = 0
    display.innerHTML = displayCount
})