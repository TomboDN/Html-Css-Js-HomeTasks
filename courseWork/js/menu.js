let navToggle = document.getElementsByClassName("nav-toggle")[0];
let menu = document.getElementById('menu');
navToggle.addEventListener('click', function(){
    menu.classList.toggle('active');
});