const titleInput = document.querySelector('#titleInput')

const descriptionInput = document.querySelector('#descriptionInput')
const liveUrlInput = document.querySelector('#liveUrlInput')
const addBtn = document.querySelector('#addBtn')
const form = document.querySelector('form')
const dataContainer = document.querySelector('.data-container')


addBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const title = titleInput.value.trim()
    const description = descriptionInput.value.trim()
    const liveUrl = liveUrlInput.value.trim()

    if (title && description && liveUrl) {

        const project = {
            title: title,
            description: description,
            liveUrl: liveUrl,
            date: new Date().toLocaleDateString()
        }

        // JSON.parse() => Converts the retrieved string back into a JavaScript object.

        let projects = JSON.parse(localStorage.getItem('projects')) || []

        projects.push(project)

        // JSON.stringify() => Converts the updated projects array back into a JSON string.

        localStorage.setItem('projects', JSON.stringify(projects))

        form.reset()

        displayProjects()

    } else {
        alert('Please fill in all fields.')
    }

})

function displayProjects() {

    dataContainer.innerHTML = ''

    const projects = JSON.parse(localStorage.getItem('projects')) || []

    projects.forEach((project) => {

        const card = document.createElement('div')

        card.className = 'card'

        card.innerHTML = `
        <div class="date">${project.date}</div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.liveUrl}" target="_blank">View Project</a>
        `
        dataContainer.appendChild(card)
    })

}

function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem('projects')) || []

    projects.splice(index, 1)

    localStorage.setItem('projects', JSON.stringify(projects))

    displayProjects()
}





displayProjects()

