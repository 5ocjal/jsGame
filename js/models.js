class Player {
    constructor(name, alive, ammo, width, height, posX, posY, speed, dirX, dirY) {
        this.name = name;
        this.alive = alive;
        this.ammo = ammo;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.dirX = dirX;
        this.dirY = dirY;
    }
}

class Tree {
    constructor(width, height, posX, posY, dirX, dirY, speed) {
        this.width = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
        this.height = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
        this.posX = Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0;
        this.posY = Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0;
        this.dirX = 0;
        this.dirY = 0;
        this.speed = 0;
    }
}

class Bullet {
    constructor(width, height, posX, posX, dirX, dirY, speed) {
        this.width = 10;
        this.height = 5;
        this.posX = posY;
        this.posY = posY;
        this.dirX = dirx;
        this.dirY = dirY;
        this.speed = speed;
    }
}
