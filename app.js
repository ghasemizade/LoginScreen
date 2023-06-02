let inputUserName = document.getElementById('username')
let inputPassword = document.getElementById('password')

function checkLoginForm() {
    
    let userNameValue = inputUserName.value
    let passwordValue = inputPassword.value
    let modal = document.getElementById('modal')
    
    if (userNameValue.length < 12 && passwordValue.length < 8) {
            modal.style.display = 'block'
            setTimeout(function () {
                modal.style.display = 'none'
            }, 3000)
        }else{
            modal.style.backgroundColor = 'green'
            modal.style.display = 'block'

            setTimeout(function () {
                modal.style.display = 'none'
            }, 3000)
        }
    }
    
    