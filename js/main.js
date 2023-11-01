// Creating class Player
class Player {
    constructor() {
        // Setting default starting position
        this.positionX = 0; 
        this.positionY = 50;

        // Setting player dimensions
        this.height = 150;
        this.width = 260;

        // Dom manipulation
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "px";
        this.playerElm.style.height = this.height + "px";
        this.playerElm.style.left= this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
        
    }
    moveUp() {
        if (this.positionY > 65) {
            this.positionY = 65
        } else {
            this.positionY += 2;
            this.playerElm.style.bottom = this.positionY + "vh";
        }
    }
    moveDown() {
        if(this.positionY < 0) {
            this.positionY = 0
        } else {
            this.positionY -= 2;
            this.playerElm.style.bottom = this.positionY + "vh";
        }
    }
    moveLeft() {
        if (this.positionX < 3) {
            this.positionX = 3
        } else {
            this.positionX -= 2;
            this.playerElm.style.left = this.positionX + "vw";
        }
    }
    moveRight() {
        if (this.positionX > 85) {
            this.positionX = 85
        } else {
            this.positionX += 2;
            this.playerElm.style.left = this.positionX + "vw";
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


// Creating opponent
class Opponent {
    constructor() {
        // Setting default starting position
        this.positionX = 1;
        this.positionY = 65;

        // Setting opponent dimensions
        this.height = 150;
        this.width = 300;
    
        // Dom manipulation
        this.opponentElm = document.getElementById("opponent1");
        this.opponentElm.style.width = this.width + "px";
        this.opponentElm.style.height = this.height + "px";
        this.opponentElm.style.left= this.positionX + "vw";
        this.opponentElm.style.bottom = this.positionY + "vh";    
    }
}

// Invoking opponent
const opponent = new Opponent()

// Creating new class for obstacles

class Obstacle {
    constructor() {
        this.width = 260;
        this.height = 150;
        this.positionX = 100;
        this.positionY = 100;
        this.obstacleElm = null;

        this.createDomElement()
    }
    createDomElement() {
        this.obstacleElm = document.createElement('div');

        this.obstacleElm.classList.add('obstacle');
        this.obstacleElm.style.width = this.width + 'px';
        this.obstacleElm.style.height = this.height + 'px';
        this.obstacleElm.style.left = this.positionX + 'vw';
        this.obstacleElm.style.bottom = this.positionY + 'vh'

        const parentElm = document.getElementById('track');
        parentElm.appendChild(this.obstacleElm)
    }
    moveLeft() {
        this.positionX--;
        this.obstacleElm.style.left = this.positionX + 'vw'; 
    }
}

// Creating obstacles

const obstaclesArr = []

setInterval(() => {
    const newObstacle = new Obstacle ();
    obstaclesArr.push(newObstacle)
}, 1000)


setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveLeft();
        if(obstacleInstance.positionY < 0 - obstacleInstance.width) {
            obstacleInstance.obstacleElm.remove()
        }
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
          ) {
            // Collision detected!
            //location.href = "./gameover.html"
          }
    })
}, 50)











