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

menuRender()