const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = "white"
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./images/map.png";
const playerImage = new Image();
playerImage.src = "./images/playerDown.png"
image.onload = () => {
    context.drawImage(image, -1800, -1050);
    context.drawImage(playerImage,
        //cropping
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        //actual placement of players on map
        canvas.width / 2 - (playerImage.width / 6) / 6, 
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height,
        );
}

