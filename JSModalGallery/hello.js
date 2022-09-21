let modal = document.getElementById("myModal");
let images = document.querySelectorAll(".images");

let imageBox = document.getElementById("modaling")

for(let i = 0; i < images.length; i++) {

    let img = images[i];
    img.onclick = function(e) {
            modal.style.display = 'block';
            imageBox.src = this.src;

    }
};

let exit = document.getElementById("x");

exit.onclick = function() {
    modal.style.display = "none";

}