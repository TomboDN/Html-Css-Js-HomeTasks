let glass = document.querySelector('.glass');
let field = document.querySelector('.search');
let close = document.querySelector('.close');

glass.addEventListener('click', resize);
close.addEventListener('click', clear);

document.addEventListener('click', function resizeOuter(e){
    let target = e.target;
    if (target.classList.contains('glass') || target.classList.contains('search') || target.classList.contains('close')) {
    } else {
            field.style.display = "none";
            close.style.display = "none";
    }
});

function resize(){
    if (field.style.display != "none") {
        field.style.display = "none";
        close.style.display = "none";

    } else {
        field.style.display = "block";
        close.style.display = "block";
    }
}

function clear(){
    field.value = "";
}