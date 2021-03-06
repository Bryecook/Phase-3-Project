usersUrl = `http://localhost:3000/api/v1/users`;

let login = false;
let array;
let questionArray;
let i = 0;
let round;
let allUsers;
let usernameArray =[];
let currentUser;
let userRounds = [];


const menuRender = () => {
    loginBtn = document.querySelector('#loginbtn')
    loginDiv = document.querySelector('#login')
    loginBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        if (loginDiv.style.display == "none") {
        loginDiv.style.display = "inline-grid";
        loginBtn.style.display = "none"
        } else {
        loginDiv.style.display = "none";
        }
        setupForm()
    })
}

const fetchUsers = () => {
fetch(usersUrl)
.then(res => res.json())
.then(userData => userArray(userData))
}

const fetchRounds = () => {
    fetch("http://localhost:3000/api/v1/rounds")
    .then(res => res.json())
    .then(data => filterRounds(data))
    }

const filterRounds = (data) => {
    userRounds = data.filter(function (el){
        return el.user_id == currentUser.id
    })
    viewPastRounds(userRounds)
}

const makeRoundsArray = (object) =>{

}
const userArray = (data) => {
    allUsers = data
}

const setupForm = () => {
    let nameForm = document.querySelector(`.login-form`)
    nameForm.addEventListener("submit", (e) => {
        e.preventDefault()
        checkExisting(nameForm)
    })
}

const checkExisting = (nameForm) => {
    let input = nameForm.username.value
    allUsers.forEach(makeUsernameArray)
    if (usernameArray.find(element => element == input)) {
         currentUser = allUsers.filter(function (el){
             return el.username == `${input}`
         })[0]
         difficultySelection()
         login = true
    } else {
        createUser(input)
    }
}

const makeUsernameArray = (object) => {
    usernameArray.push(object.username)
}

const createUser = (input) => {
    fetch(usersUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            username: input
        })
    })
    .then(res => res.json())
    .then(newUser => setNewAsCurrent(newUser))
}

const setNewAsCurrent = (newUser) =>{
    currentUser = newUser
    login = true
    difficultySelection()
}
    
const createEasyRound = () =>{
    const newRound = {
        user_id: currentUser.id,
        game_id: 1,
        score: 0
    }
    fetch("http://localhost:3000/api/v1/rounds", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(newRound)
    })
    .then(res => res.json())
    .then(saveNewRound => saveRound(saveNewRound))
}

const createHardRound = () =>{
    const newRound = {
        user_id: currentUser.id,
        game_id: 2,
        score: 0
    }
    fetch("http://localhost:3000/api/v1/rounds", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(newRound)
    })
    .then(res => res.json())
    .then(saveNewRound => saveRound(saveNewRound))
}


const saveRound = (save) => {
    round = save
}

const difficultySelection = () => {
    div = document.querySelector('#menu')
    div.innerHTML = ''
    div.style.display = "inline-grid"
    loginBtnDiv = document.querySelector('#loginbtndiv')
    loginBtnDiv.style.display = "none"
    username = document.createElement('h1')
    username.innerText = `Welcome ${currentUser.username}!`
    header = document.createElement('h2')
    header.innerText = "Select difficulty:"
    header.style.color = "Black"

    easyButton = document.createElement('button')
    easyButton.className = "btn-easy"
    easyButton.innerText = "Easy Quiz"
    easyButton.addEventListener('click', (e) => {
        e.preventDefault()
        createEasyRound()
        easyQuiz()
    })

    hardButton = document.createElement('button')
    hardButton.className = "btn-hard"
    hardButton.innerText = "Hard Quiz"
    hardButton.addEventListener('click', (e) => {
        e.preventDefault()
        createHardRound()
        hardQuiz()
    })

    br = document.createElement('br')
    div.append(username, header, easyButton, br, hardButton)
}
const filterEasyData = (data) => {
    let filteredArray = data.filter(function (el){
        return el.difficulty == "easy";
    });
        questionArray = getRandomQuestions(filteredArray, 10)
 
        renderQuiz(questionArray[0])
}

const easyQuiz = () => {
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(data => filterEasyData(data))
}
const filterHardData = (data) => {
    let filteredArray = data.filter(function (el){
        return el.difficulty == "hard";
    });
   questionArray = getRandomQuestions(filteredArray, 10)
 
   renderQuiz(questionArray[0])
}

const hardQuiz = () => {
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(data => filterHardData(data))
}

const getRandomQuestions = (random, n) => {
    let randomArray = random.sort(() => Math.random() - Math.random()).slice(0, n)
    return randomArray
}

const renderQuiz = (question) => {
    if (i < questionArray.length) {
    questionChoices = JSON.parse(question.choices)
    div = document.querySelector('#menu')
    div.innerHTML = ''
    header = document.createElement('h2')
    header.innerHTML = `${question.body}`
    header.style.color = "green"
    
    btnA = document.createElement('button')
    btnA.innerText = questionChoices[0]

    btnB = document.createElement('button')
    btnB.innerText = questionChoices[1]

    btnC = document.createElement('button')
    btnC.innerText = questionChoices[2]

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
            round.score += 1
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
            round.score += 1
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
            round.score += 1
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
        addScore()
        renderScore()
    }
}

const addScore = () => {
    newScore = round.score

    fetch(`http://localhost:3000/api/v1/rounds/${round.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            score: newScore
        })
    })
    .then(res => res.json())
    .then(data => data)
}

const renderScore = () => {
    div.innerHTML = ''
    retryBtn = document.createElement('button')
    retryBtn.innerText = "Try again?"
    endTitle = document.createElement('h2')
    endTitle.innerText = `Great job ${currentUser.username}! Your score: ${round.score}`
    logoutBtn = document.createElement('button')
    logoutBtn.innerText = "Logout"
    pastRoundsBtn = document.createElement('button')
    pastRoundsBtn.innerText = "View Past Rounds"
    // deleteUserBtn = document.createElement('button')
    // deleteUserBtn.innerText = "Delete account"
    // deleteUserBtn.addEventListener('click', (e) => {
    //     fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`,{
    //         method: "DELETE"
    //     })
    //     location.reload()
    // })
    div.append(endTitle, retryBtn, pastRoundsBtn, logoutBtn)

    retryBtn.addEventListener('click', (e) =>{
        i = 0
        difficultySelection()
    })

    logoutBtn.addEventListener('click', (e) =>{
        location.reload()
    })

    pastRoundsBtn.addEventListener('click', (e) => {
        fetchRounds()
    })
}

const roundList = (object) => {
    console.log(object)
    div = document.querySelector('#menu')
    li = document.createElement('li')
    li.innerText = object.score
    deleteRoundBtn = document.createElement('button')
    deleteRoundBtn.innerText = "X"
    deleteRoundBtn.addEventListener('click', (e) => {
        fetch(`http://localhost:3000/api/v1/rounds/${object.id}`,{
            method: "DELETE"
        })
        fetchRounds()
    })
    li.append(deleteRoundBtn)
    div.append(li)
}
const viewPastRounds = (userRounds) => {
    div = document.querySelector('#menu')
    div.innerHTML = ''
    scorePageTitle = document.createElement('h1')
    scorePageTitle.innerText = "Past Scores"
    div.append(scorePageTitle)
    userRounds.forEach(roundList)
    div.append(retryBtn, logoutBtn)
}

// const timer = () => {
//     //once quiz is initiated start timer
//     //insert into easy & difficult event listener
//     let div = document.querySelector("#menu")
//     let timerDisplay = document.createElement("p")
//     timerDisplay.innerText = `You have ${timeLeft} seconds left to play!;`

//     // let total_seconds = 60*2
//     let timeLeft = 120; // In seconds
//     // let timerId = setInterval(countdown, 1000);
    
//     div.append(timerDisplay)

//     function countdown() {
//         setInterval(function(){
//             if (timeLeft <= 0){ //if time left less than zero stop timer
//                 clearInterval(timeLeft = 0)
//             }
//             timeLeft -=1 //decrement time by 1
//         }, 1000)
//         } 
//          {
//         //display time left
//             timeLeft--;
//         }
// }

    




fetchUsers()
menuRender()


