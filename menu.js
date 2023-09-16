let menuIcons=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let body=document.querySelector('.body');
menuIcons.onclick=()=>{
    menuIcons.classList.toggle('responsive');
    navbar.classList.toggle('active');
    // body.classList.toggle('menu-opened');
}

window.onscroll=()=>{
    menuIcons.classList.remove('responsive');
    navbar.classList.remove('active');
    // body.classList.remove('menu-opened');
}