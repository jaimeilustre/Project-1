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

// Creating bullets 

const bulletArr = []

setInterval(() => {
    const newBullet = new Bullet(player.positionX, player.positionY)
    bulletArr.push(newBullet)
}, 750)

setInterval(() => {
    bulletArr.forEach((bulletInstance, bullet) => {
        bulletInstance.moveRight();
        if (bulletInstance.positionX > 1600 - bulletInstance.width) {
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

// Creating a scoreboard
let score = 0

// Updating scores
const scoreboard = () => {
    const finalScore = document.querySelector('#points');
    finalScore.textContent = score
}
