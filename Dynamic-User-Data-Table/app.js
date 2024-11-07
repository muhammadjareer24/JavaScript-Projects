const url = 'https://jsonplaceholder.typicode.com/users'

const thead = document.querySelector('thead')
const tbody = document.querySelector('tbody')
const searchInput = document.querySelector('#searchInput')
const searchBtn = document.querySelector('.search-btn')

function createTableRow(item) {

    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.address.city}</td>
    `
    return tr
}

function displaySearch(result) {
    result.forEach((item) => {

        tbody.appendChild(createTableRow(item))
    })
}

async function displayTable() {
    const response = await fetch(url)
    const data = await response.json()

    // console.log('data', data)

    const tr = document.createElement('tr')
    tr.innerHTML = `
    <th>Name</th>
    <th>Email</th>
    <th>City</th>
    `
    thead.appendChild(tr)

    data.forEach((item) => {

        tbody.appendChild(createTableRow(item))

    })
}


searchBtn.addEventListener('click', async function (e) {
    e.preventDefault()

    tbody.innerHTML = ''

    const response = await fetch(url)
    const data = await response.json()

    const query = searchInput.value.toLowerCase()
    const filteredName = data.filter((item) => {
        return item.name.toLowerCase().includes(query)
    })
    displaySearch(filteredName)
})

displayTable()

