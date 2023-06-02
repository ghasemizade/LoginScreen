let inputUserName = document.getElementById('username')
let inputPassword = document.getElementById('password')

function checkLoginForm() {
    
    let userNameValue = inputUserName.value
    let passwordValue = inputPassword.value

    // console.log(inputUserName.value)
    
    if (userNameValue.length < 12 && passwordValue.length < 8) {
            alert('it is to short...!')
        }else{
                alert('your login :)')
            }
    }
    
    