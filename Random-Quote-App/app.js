const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const newBtn = document.querySelector('#newBtn')
const copyBtn = document.querySelector('#copyBtn')
const text = document.querySelector('#text')
const author = document.querySelector('h5')

let quotes = []

async function fetchQuotes() {

    try {

        const response = await fetch(url)
        const data = await response.json()

        // console.log('data', data)
        quotes = data.quotes

        displayRandomQuote()

    } catch (error) {
        console.log('Error in fetching quotes:', error)

    }

}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}

function displayRandomQuote() {
    const randomQuote = getRandomQuote()
    text.textContent = randomQuote.quote
    author.textContent = randomQuote.author
}

newBtn.addEventListener('click', displayRandomQuote)

copyBtn.addEventListener('click', function () {
    const copyText = `Quote: ${text.textContent}\nAuthor: ${author.textContent}`
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert('Quote has been copied.')
        })
        .catch(() => {
            alert('Failed to copy quote.')
        })
})

fetchQuotes()