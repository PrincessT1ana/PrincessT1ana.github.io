let First = document.getElementById("First")

let imageArray = new Array
(
    "/Animation/assets/Asset20.png",
    "/Animation/assets/Asset21.png",
    "/Animation/assets/Asset22.png",
    "/Animation/assets/Asset23.png",
    "/Animation/assets/Asset24.png",
    "/Animation/assets/Asset25.png",
    "/Animation/assets/Asset26.png",
    "/Animation/assets/Asset27.png" 
);

let count = 0

function animate() {

    First.src = imageArray [count];
    count++;
    if (imageArray.length == count){

        count = 0

    }
}

setInterval(animate, 100)

