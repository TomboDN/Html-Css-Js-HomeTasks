let auth = document.querySelector('.auth');

let loginBorder = document.querySelector('.login-field');
let passwordBorder = document.querySelector('.password-field');

let loginField = document.querySelector('.log');
let passField = document.querySelector('.pass');

let logIcon = document.querySelector('.icon-log');
let passIcon = document.querySelector('.icon-pass');

let loginWarn = document.querySelector('.warning-log');
let passWarn = document.querySelector('.warning-pass');

let button = document.querySelector('.btn');


let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]+$/;
window.onload = init();

function init(){
    button.addEventListener('click', function checkFields() {
        if (regex.test(loginField.value) == true) {
            loginWarn.innerText = "";
            logIcon.style.display = "none";
            loginBorder.style.border = "solid 1px black";
            loginBorder.style.borderBottom = "gray 3px solid";
        } else {
            auth.style.animation = "shake 1.5s";
            loginWarn.innerText = "Введите правильный адрес";
            logIcon.style.display = "block";
            loginBorder.style.border = "solid 1px red";
            loginBorder.style.borderBottom = "red 3px solid";
            setTimeout(() => auth.style.animation = "none", 1500);
        } 
        if (loginField.value.length == 0) {
            auth.style.animation = "shake 1.5s";
            loginWarn.innerText = "Это поле не может быть пустым";
            logIcon.style.display = "block";
            loginBorder.style.border = "solid 1px red";
            loginBorder.style.borderBottom = "red 3px solid";
            setTimeout(() => auth.style.animation = "none", 1500);
        } else {}
        if (passField.value.length >= 1) {
            passWarn.innerText = "";
            passIcon.style.display = "none";
            passwordBorder.style.border = "solid 1px black";
            passwordBorder.style.borderBottom = "gray 3px solid";
        } else {
            auth.style.animation = "shake 1.5s";
            passWarn.innerText = "Это поле не может быть пустым";
            passIcon.style.display = "block";
            passwordBorder.style.border = "solid 1px red";
            passwordBorder.style.borderBottom = "red 3px solid";
            setTimeout(() => auth.style.animation = "none", 1500);
        }
        if (regex.test(loginField.value) == true && passField.value.length >= 1) {
            location.href = "https://google.com";
        }
    });
}