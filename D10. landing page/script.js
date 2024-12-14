let menu = document.querySelector('#menu-bar');
let menuIcon = menu.querySelector('i'); 
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{

    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll= () => {
    
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');

if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
}
else{
    document.querySelector('#scroll-top').classList.remove('active');
}

}