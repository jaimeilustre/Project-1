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
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle)
}, 1000)

setInterval(() => {
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
