let yt = document.querySelector('.counterYT');
let ln = document.querySelector('.counterIN');
let fb = document.querySelector('.counterFA');
let tw = document.querySelector('.counterTW');
window.onload = init();
function init(){
    resetCounters();
    increase()
}


function resetCounters(){
    yt.innerHTML = 0;
    ln.innerHTML = 0;
    fb.innerHTML = 0;
    tw.innerHTML = 0;
}

function increase(){
    let add1 = Math.floor(Math.random() * 100) + 1;
    let add2 = Math.floor(Math.random() * 100) + 1;
    let add3 = Math.floor(Math.random() * 100) + 1;
    let add4 = Math.floor(Math.random() * 100) + 1;
    if ((parseInt(yt.innerText) + add1) <= 9000) {
        yt.innerText = parseInt(yt.innerText) + add1;
    } else { yt.innerText = 9000;}

    if ((parseInt(ln.innerText) + add2) <= 1000) {
        ln.innerText = parseInt(ln.innerText) + add2;
    } else { ln.innerText = 1000;}

    if ((parseInt(fb.innerText) + add3) <= 7000) {
        fb.innerText = parseInt(fb.innerText) + add3;
    } else { fb.innerText = 7000;}

    if ((parseInt(tw.innerText) + add3) <= 5000) {
        tw.innerText = parseInt(tw.innerText) + add3;
    } else { tw.innerText = 5000;}


}
setInterval (increase, 200);