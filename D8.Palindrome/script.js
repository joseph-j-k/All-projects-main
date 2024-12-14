let button = document.querySelector("#checkerBtn")
let message = document.querySelector(".message")
let container = document.querySelector("main")

button.addEventListener('click', () => {
    let text = document.getElementById('textbox').value
    let reverse = text.split('').reverse().join('')

    let forward = text.toLowerCase().replace(/[^a-z0-9]/g, '')
    let backward = reverse.toLowerCase().replace(/[^a-z0-9]/g, '')


    if(text === ""){
        alert("ohh kidher phla kuch likhoo tu sahii!😊")
    }
    else{
        if(forward == backward){
            message.innerHTML = "yes, it's' Palindrome"
            message.classList.add('correct') 
            message.classList.remove('wrong') 
            container.style.height = '390px'
        }
        else{
            message.innerHTML = "No, It's not Palindrome"
            message.classList.add('wrong') 
            message.classList.remove('correct') 
            container.style.height = '390px'
        }
    }


})