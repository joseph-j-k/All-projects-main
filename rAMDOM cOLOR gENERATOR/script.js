const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
    
}
// event call  ===> hamara click karna par chala ga 
document.getElementById("btn").addEventListener("click", getcolor);


//intial call  ===> page load hona par foran chal jaya ga 
getcolor();