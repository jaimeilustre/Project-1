

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
        this.playerElm.style.left= this.positionX + "px";
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
        if(this.positionY < 280) {
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


// Creating new class for obstacles
class Obstacle {
    constructor() {
        this.width = 150;
        this.height = 90;
        this.positionX = 1400;
        this.positionY = Math.random() * (680 - 280) + 280
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
        this.positionX -= 2;
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
        if (obstacleInstance.positionX < 400 - obstacleInstance.width) {
            obstacleInstance.obstacleElm.remove()
            location.href = "./gameover.html"
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


// Creating new class for bullets

class Bullet {
    constructor(positionX, positionY) {
        this.width = 100
        this.height = 40
        this.positionX = positionX + 50
        this.positionY = positionY + 50
        this.createBullet()
    }
    createBullet() {
        this.bulletElm = document.createElement('div');
        this.bulletElm.classList.add('bullet');
        this.bulletElm.style.width = this.width + 'px'
        this.bulletElm.style.height = this.height + 'px'
        this.bulletElm.style.left = this.positionX + 'px'
        this.bulletElm.style.bottom = this.positionY + 'px'

        const parentElm2 = document.getElementById('track')
        parentElm2.appendChild(this.bulletElm)
    }
    moveRight() {
        this.positionX += 50;
        this.bulletElm.style.left = this.positionX + 'px'
    }
}
// Creating a scoreboard
let score = 0


// Creating bullets 

const bulletArr = []

setInterval(() => {
    const newBullet = new Bullet(player.positionX, player.positionY)
    bulletArr.push(newBullet)
}, 750) 

setInterval(() => {
    bulletArr.forEach((bulletInstance, bullet) => {
        bulletInstance.moveRight();
        if(bulletInstance.positionX > 1600 - bulletInstance.width) {
            bulletInstance.bulletElm.remove()
            bulletArr.splice(bullet, 1)
        }
        obstaclesArr.forEach((obstacleInstance, obstacle) => {
            if (
                bulletInstance.positionX < obstacleInstance.positionX + obstacleInstance.width &&
                bulletInstance.positionX + bulletInstance.width > obstacleInstance.positionX &&
                bulletInstance.positionY < obstacleInstance.positionY + obstacleInstance.height &&
                bulletInstance.positionY + bulletInstance.height > obstacleInstance.positionY
            ) {
                obstacleInstance.obstacleElm.remove()
                bulletInstance.bulletElm.remove()
                obstaclesArr.splice(obstacle, 1)
                bulletArr.splice(bullet, 1);
                score += 25
            }
            scoreboard()
        })
        
    })
}, 50)

// Updating scores
const scoreboard = () => {
    const finalScore = document.querySelector('#points');
    finalScore.textContent = score
  }























