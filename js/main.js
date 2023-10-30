class Player {
    constructor() {
        // initialize properties
        this.positionX = 50 
        this.positionY = 0;
        this.height = 10;
        this.width = 20;

        // dom manipulation
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left= this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
        
    }
    moveLeft() {
        if (this.positionX > 0) {
            this.positionX -= 2;
            this.playerElm.style.left = this.positionX + "vw";
        }
    }
    moveRight() {
        this.positionX += 2;
        this.playerElm.style.left = this.positionX + "vw";
    }
}