let starWrapper = document.querySelector('.stars');
let star1 = document.querySelector('.s1');
let star2 = document.querySelector('.s2');
let star3 = document.querySelector('.s3');
let star4 = document.querySelector('.s4');
let star5 = document.querySelector('.s5');
let stars = [star5, star4, star3, star2, star1];
let reactionsEmoji = ["🤮", "😟", "🤨", "😀", "😍"];
let reactionsText = ["УЖАСНО ", "ПЛОХО ", "СРЕДНЕ ", "ХОРОШО ", "ЭТО ШЕДЕВР "];

let reaction = document.querySelector('.reaction');
let reactionText = document.querySelector('.reaction-text');
let emoji = document.querySelector('.emoji');
let response = document.querySelector('.response');
let send = document.querySelector('.button');
let change = document.querySelector('.change');
let thanks = document.querySelector('.thanks');

function starclick(num){
    starWrapper.style.display = "flex";
    reaction.style.display = "block";
    response.style.display = "block";
    send.style.display = "block";
    reactionText.innerHTML = reactionsText[num];
    emoji.innerHTML = reactionsEmoji[num];
    for (i = 0; i <= 4; i++){
        stars[i].style.color = "rgb(105, 90, 0)";
        stars[i].style.textShadow = "none";
    }
    for (i = 0; i <= num; i++){
        stars[i].style.color = "gold";
        stars[i].style.textShadow = "0px 0px 10px goldenrod";
    }
};

function sending(){
    starWrapper.style.display = "none";
    reaction.style.display = "none";
    response.style.display = "none";
    send.style.display = "none";
    thanks.style.display = "block";
    change.style.display = "block";
};

function changing(){
    starWrapper.style.display = "flex";
    reaction.style.display = "block";
    response.style.display = "block";
    send.style.display = "block";
    thanks.style.display = "none";
    change.style.display = "none";
};

star1.addEventListener('click', () => starclick(4));
star2.addEventListener('click', () => starclick(3));
star3.addEventListener('click', () => starclick(2));
star4.addEventListener('click', () => starclick(1));
star5.addEventListener('click', () => starclick(0));

send.addEventListener('click', sending);
change.addEventListener('click', changing);