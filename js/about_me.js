const modal = document.getElementById("myModal");

const img = document.getElementById("Img");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.name;
    captionText.innerHTML = this.alt;
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}