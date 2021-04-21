let login = false;
let array;
let questionArray;
let i = 0;

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

menuRender()
difficultySelection()