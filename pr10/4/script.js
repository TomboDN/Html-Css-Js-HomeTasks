let card = document.querySelector('.card');
let image = document.querySelector('img');
let social = document.querySelector('.social');
let bottom = document.querySelector('.bottom');

card.addEventListener('mouseover', sizeUp);

card.addEventListener('mouseout', sizeDown);

image.addEventListener('click', imgResize);

function sizeUp(){
    card.style.borderRadius = "5px";
    card.style.width = "auto";
    card.style.height = "auto";
    social.style.display = "flex";
    bottom.style.display = "flex";
}

function sizeDown(){
    card.style.borderRadius = "50%";
    card.style.width = "200px";
    card.style.height = "200px";
    social.style.display = "none";
    bottom.style.display = "none";
}

function imgResize(){
    if (image.style.height == "200px") {
        image.style.borderRadius = "0";
        image.style.width = "auto";
        image.style.height = "auto";
        social.style.display = "none";
        bottom.style.display = "none";
    }
    else {
        image.style.borderRadius = "50%";
        image.style.width = "200px";
        image.style.height = "200px";
        social.style.display = "flex";
        bottom.style.display = "flex";
    }
}