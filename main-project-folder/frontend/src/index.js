usersUrl = `http://localhost:3000/api/v1/users`;


let login = false;
let array;
let questionArray;
let i = 0;
let currentUser;

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

const setUpForm = () => {
    let nameForm = document.querySelector(`.login-form`)
    nameForm.addEventListener("submit", (e) => {
        e.preventDefault()
        createNewUser(nameForm)
    })
    
    
    const createNewUser = nameForm => {
    console.log(nameForm.username.value)
    
        let newUser = {
            username: nameForm.username.value
        }

    const findThisUser = () => {
        fetch(UsersUrl),
            {
            method: 'post',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(user)
            
        }
            .then(response => response.json())
            .then(user => getData.forEach(user))
                (username == userData[i].username) 
                displayCurrentUser(findThisUser)
    }
    
        const displayCurrentUser = (user, e) => {
            currentUser = users.username 
            console.log(current_user)
            fetch(`http://localhost:3000/api/v1/users/${user.id}`
            .then(res => res.json())
            .then(user => loginSuccess(user))
            )
        
        const loginSuccess = (user, e) => {
            let loginName = currentUser
            alert("Welcome" + loginName)
            let body = document.querySelector("body")
            body.innerHTML = "Hello " + loginName;
        }
        
        
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
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(data => array = data)
    var filteredArray = array.filter(function (el){
        return el.difficulty == "easy";
    });
   questionArray = getRandomQuestions(filteredArray, 10)
 
   renderQuiz(questionArray[0])
}

const hardQuiz = () => {
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(data => array = data)
    var filteredArray = array.filter(function (el){
        return el.difficulty == "hard";
    });
   questionArray = getRandomQuestions(filteredArray, 10)
 
 renderQuiz(questionArray[0])
}

const getRandomQuestions = (random, n) => {
    var randomArray = random.sort(() => Math.random() - Math.random()).slice(0, n)
    return randomArray
}

const renderQuiz = (question) => {
    if (i < questionArray.length) {
    div = document.querySelector('#menu')
    div.innerHTML = ''
    header = document.createElement('h2')
    header.innerHTML = `${question.body}`
    header.style.color = "green"
    
    btnA = document.createElement('button')
    btnA.innerText = question.choices[0]

    btnB = document.createElement('button')
    btnB.innerText = question.choices[1]

    btnC = document.createElement('button')
    btnC.innerText = question.choices[2]
    
    continueBtn = document.createElement('button')
    continueBtn.innerText = "Continue to next question"
    continueBtn.addEventListener('click', (e) => {
        i++
        renderQuiz(questionArray[i])

    })
    div.append(header, btnA, btnB, btnC)


    btnA.addEventListener('click', (e) => {
        if (btnA.innerText == question.answer) {
            div.innerHTML = ''
            header = document.createElement('h2')
            header.innerText = "Correct!"

            div.append(header, continueBtn)
            
        } else {
            div.innerHTML = ''
            header = document.createElement('h2')
            header.innerText = "Incorrect :("

            h3 = document.createElement('h3')
            h3.innerText = `The correct answer was ${question.answer}`

            div.append(header, h3, continueBtn)
        }
    })

    btnB.addEventListener('click', (e) => {
        if (btnB.innerText == question.answer) {
            div.innerHTML = ''
            header = document.createElement('h2')
            header.innerText = "Correct!"

            div.append(header, continueBtn)
            
        } else {
            div.innerHTML = ''
            header = document.createElement('h2')
            header.innerText = "Incorrect :("
            h3 = document.createElement('h3')
            h3.innerText = `The correct answer was ${question.answer}`

            div.append(header, h3, continueBtn)
        }
    })

    btnC.addEventListener('click', (e) => {
        if (btnC.innerText == question.answer) {
            div.innerHTML = ''
            header = document.createElement('h2')
            header.innerText = "Correct!"

            div.append(header, continueBtn)
            
        } else {
            div.innerHTML = ''
            header = document.createElement('h2')
            header.innerText = "Incorrect :("

            h3 = document.createElement('h3')
            h3.innerText = `The correct answer was ${question.answer}`

            div.append(header, h3, continueBtn)
        }
    })

    } else {
        console.log('done')
    }
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




