// Creating class Player

class Player {
    constructor() {
        // Setting default starting position
        this.positionX = 350;
        this.positionY = 475;

        // Setting player dimensions
        this.height = 120;
        this.width = 170;

        // Dom manipulation
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "px";
        this.playerElm.style.height = this.height + "px";
        this.playerElm.style.left = this.positionX + "px";
        this.playerElm.style.bottom = this.positionY + "px";

    }
    moveUp() {
        if (this.positionY > 680) {
            this.positionY = 680
        } else {
            this.positionY += 50;
            this.playerElm.style.bottom = this.positionY + "px";
        }
    }
    moveDown() {
        if (this.positionY < 280) {
            this.positionY = 280
        } else {
            this.positionY -= 50;
            this.playerElm.style.bottom = this.positionY + "px";
        }
    }
    moveLeft() {
        if (this.positionX < 350) {
            this.positionX = 350
        } else {
            this.positionX -= 50;
            this.playerElm.style.left = this.positionX + "px";
        }
    }
    moveRight() {
        if (this.positionX > 1400) {
            this.positionX = 1400
        } else {
            this.positionX += 50;
            this.playerElm.style.left = this.positionX + "px";
        }
    }
}

// Enabling player movement
document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowUp":
            player.moveUp();
            break;
        case "ArrowDown":
            player.moveDown();
            break;
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
})

// Invoking new player
const player = new Player();





























