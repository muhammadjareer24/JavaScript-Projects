let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.getElementById('form')

let errorMsg = document.querySelectorAll('.error')
let successIcon = document.querySelectorAll('.success-icon')
let failureIcon = document.querySelectorAll('.failure-icon')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    engine(username, 0, 'User Name cannot be blank')
    engine(email, 1, 'Email cannot be blank')
    engine(password, 2, 'Password cannot be blank')


})

let engine = (id, serial, message) => {

    if (id.value.trim() === '') {
        errorMsg[serial].innerHTML = message
        failureIcon[serial].style.opacity = '1'
        successIcon[serial].style.opacity = '0'
    } else {
        errorMsg[serial].innerHTML = ''
        failureIcon[serial].style.opacity = '0'
        successIcon[serial].style.opacity = '1'
    }
}