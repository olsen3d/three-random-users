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
        <div class='header'id='${idx}'>
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

//hash change clicked on a user or title
window.addEventListener('hashchange', () => {
    let selectedId = window.location.hash.slice(1);
    let users = [...document.querySelectorAll('.user')]
    let headers = [...document.querySelectorAll('.header')]
    //if no one is selected display all
    if (selectedId === '') {
        users.forEach( user => user.classList.remove('hide'))
        headers.forEach( header => header.classList.remove('selected'))
    } else {
        users.forEach( user => {selectedId === user.id ? user.classList.remove('hide') : user.classList.add('hide')})
        headers.forEach( header => {selectedId === header.id ? header.classList.add('selected') : header.classList.remove('selected')})
    }

})
