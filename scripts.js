const navbarButton = document.querySelector('#navbar-button');
const navbar = document.querySelector('#navbar');

//show or hide
navbarButton.addEventListener('click', function(){
    navbar.classList.toggle('show-menu');
    navbarButton.classList.toggle('close');
})