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
        createLoginForm()
    })
}

const createLoginForm = () => {
    div = document.querySelector('.container')
    form = document.querySelector('.login-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log("login clicked")
    })
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

menuRender()
difficultySelection()