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


// Creating new opponent
class Opponent {
    constructor() {
        // Setting default starting position
        this.positionX = 1;
        this.positionY = 65;

        // Setting opponent dimensions
        this.height = 150;
        this.width = 260;
    
        // Dom manipulation
        this.opponentElm1 = document.getElementById("opponent1");
        this.opponentElm1.style.width = this.width + "px";
        this.opponentElm1.style.height = this.height + "px";
        this.opponentElm1.style.left= this.positionX + "vw";
        this.opponentElm1.style.bottom = this.positionY + "vh";    
    }
}

// Invoking new opponent
const opponent1 = new Opponent()

/*
if (
    player.positionX < opponent1.positionX + opponent1.width &&
    player.positionX + player.width > opponent1.positionX &&
    player.positionY < opponent1.positionY + opponent1.height &&
    player.positionY + player.height > opponent1.positionY
) {
    // Collision detected!
    location.href = "./gameover.html"
}
*/





