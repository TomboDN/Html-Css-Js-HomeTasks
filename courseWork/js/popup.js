let modal = document.getElementById('myModal');
let images = document.getElementsByTagName('img');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for(index = 1; index < images.length; index++){
    let img = images[index];
    img.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
}

let span = document.getElementsByClassName("close")[0];

span.addEventListener('click', function() {
    modal.style.display = "none";
});