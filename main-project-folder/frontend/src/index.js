

usersUrl = `http://localhost:3000/api/v1/users`;


let login = false;

const menuRender = () => {
    loginBtn = document.querySelector('#loginbtn')
    div = document.querySelector('.container')
    loginBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        login = !login;
        if (login) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
        console.log('clicked')
        loadForm()
    })
}




//get all users
const fetchUsers = () => {
fetch(usersUrl)
.then(res => res.json())
.then(userData => console.log(userData))
}


const loadForm = (e) => {
    let nameForm = document.querySelector('.login-form')
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let newName = e.target.name.value
        console.log(newName)
        fetch(usersUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
                name: newName
            })
        })
        .then(res => res.json())
        .then(newUser => console.log(newUser))
        //create function that verifies if user is logged in
    })
}

const checksUserLoggedIn = () => {
    let un = document.querySelector(`.login-form`).elements["name"]
    // let un = document.login-form.nameForm.value
    let username = "username"
          if (un == username) {
        alert("logged in succesfully!")}
        else {
        alert("Must enter usuername")
        }
}


const difficultySelection = () => {
    div = document.querySelector('#menu')
    header = document.createElement('h2')
    header.innerText = "Select difficulty!"
    header.style.color = "Purple"

    easyButton = document.createElement('button')
    easyButton.className = "btn-easy"
    easyButton.innerText = "Easy Quiz"
    easyButton.addEventListener('click', (e) => {
        e.preventDefault()
        easyQuiz()
    })

    hardButton = document.createElement('button')
    hardButton.className = "btn-hard"
    hardButton.innerText = "Hard Quiz"
    hardButton.addEventListener('click', (e) => {
        e.preventDefault()
        hardQuiz()
    })

    br = document.createElement('br')
    div.append(header, easyButton, br, hardButton)
}

const easyQuiz = () => {
    // fetch array of easy question objects with .filter
    // select 10 random questions and put into array
    // forEach thru them giving points to the round if correct answer is select?
}

const timer = (difficultySelection, easyQuiz) => {
    //once quiz is initiated start timer
    //insert into easy & difficult function
    let timer = document.querySelector("timer")
    timer.innerHTML = '<div>${count}</div>'
    let total_seconds = 60*2
    let timeLeft = 120; // In seconds
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            // do something
        } else {
            console.log(timeLeft + ' seconds remaining');
            timeLeft--;
        }
    }
    countdown()
}


menuRender()
difficultySelection()
loadForm()
checksUserLoggedIn()



