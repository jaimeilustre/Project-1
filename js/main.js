// Creating class Player
class Player {
    constructor() {
        // Setting default starting position
        this.positionX = 50; 
        this.positionY = 475;

        // Setting player dimensions
        this.height = 130;
        this.width = 200;

        // Dom manipulation
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "px";
        this.playerElm.style.height = this.height + "px";
        this.playerElm.style.left= this.positionX + "px";
        this.playerElm.style.bottom = this.positionY + "px";
        
    }
    moveUp() {
        if (this.positionY > 680) {
            this.positionY = 680
        } else {
            this.positionY += 40;
            this.playerElm.style.bottom = this.positionY + "px";
        }
    }
    moveDown() {
        if(this.positionY < 150) {
            this.positionY = 150
        } else {
            this.positionY -= 40;
            this.playerElm.style.bottom = this.positionY + "px";
        }
    }
    moveLeft() {
        if (this.positionX < 50) {
            this.positionX = 50
        } else {
            this.positionX -= 30;
            this.playerElm.style.left = this.positionX + "px";
        }
    }
    moveRight() {
        if (this.positionX > 1300) {
            this.positionX = 1300
        } else {
            this.positionX += 30;
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


// Creating new class for obstacles

class Obstacle {
    constructor() {
        this.width = 200;
        this.height = 130;
        this.positionX = 1360;
        this.positionY = Math.random() * (680 - 150) + 150
        this.obstacleElm = null;

        this.createDomElement()
    }
    createDomElement() {
        this.obstacleElm = document.createElement('div');

        this.obstacleElm.classList.add('obstacle');
        this.obstacleElm.style.width = this.width + 'px';
        this.obstacleElm.style.height = this.height + 'px';
        this.obstacleElm.style.left = this.positionX + 'px';
        this.obstacleElm.style.bottom = this.positionY + 'px'

        const parentElm = document.getElementById('track');
        parentElm.appendChild(this.obstacleElm)
    }
    moveLeft() {
        this.positionX -= 3;
        this.obstacleElm.style.left = this.positionX + 'px'; 
    }
}

// Creating obstacles

const obstaclesArr = []

setInterval(() => {
    const newObstacle = new Obstacle ();
    obstaclesArr.push(newObstacle)
}, 1000)

setInterval (() => {
    obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveLeft();
        if (obstacleInstance.positionX < 0 - obstacleInstance.width) {
            obstacleInstance.obstacleElm.remove()
        }
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            location.href = "./gameover.html"
        }
    })
}, 3)
















