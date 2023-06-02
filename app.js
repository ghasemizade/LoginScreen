let inputUserName = document.getElementById('username').value
let inputPassword = document.getElementById('password').value

function checkLoginForm() {
    if (inputUserName.length < 12 && inputPassword.length < 8) {
        alert('it is to short...!')
    }else{
        alert('your login :)')
    }
}