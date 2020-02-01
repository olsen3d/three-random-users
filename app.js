//app.js Three Random Users

//random user API
const API = 'https://acme-users-api-rev.herokuapp.com/api/users/random'

//user div container
const userContainer = document.querySelector('#users')

//get users, convert to json
const userOne = fetch(API)
    .then( response => response.json())
const userTwo = fetch(API)
    .then( response => response.json())
const userThree = fetch(API)
    .then( response => response.json())

//process users
const users = Promise.all([userOne, userTwo, userThree])
    .then( userData => {
    console.log(userData)

    const html = userData.map( (user, idx) => {
        return `
        <div class='header'>
            <a href='#${idx}'> ${idx + 1}</a>
            <div class='user' id='${idx}'>
            <span>${user.fullName}</span>
            <span>${user.email}</span>
            <img src='${user.avatar}'>
            </div>
        </div>
        `
    }).join('')

    userContainer.innerHTML = html
})

//hash change sone clicked on a user or title
window.addEventListener('hashchange', () => {
    let selectedId = window.location.hash.slice(1);
    let users = [...document.querySelectorAll('.user')]
    //if no one is selected display all
    if (selectedId === '') {
        users.forEach( user => {
            user.classList.remove('hide')
        })
    } else { //if a user is selected hide others
        users.forEach( user => {
            if (selectedId === user.id) {
                user.classList.remove('hide')
            } else {
                user.classList.add('hide')
            }
        })
    }
})
