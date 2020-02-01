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
    // const userOne = userData[0]
    // const userTwo = userData[1]
    // const userThree = userData[2]
    console.log(userData)

    const html = userData.map( (user, idx) => {
        return `
        <div class='header'>
            <a href='#${idx}'> ${idx + 1}</a>
            <div class='user' id='${idx}'>
            ${user.fullName}
            ${user.email}
            </div>
        </div>
        
        `
    }).join('')

    userContainer.innerHTML = html
})
