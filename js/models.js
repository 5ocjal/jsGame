class Player {
    constructor(texture, name, alive, ammo, width, height, posX, posY, speed, dirX, dirY) {
        this.texture = texture;
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
    constructor(texture, width, height, posX, posY) {
        this.texture = document.getElementById('treeImg');
        this.width = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
        this.height = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
        this.posX = Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0;
        this.posY = Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0;
    }
}

class Bullet {
    constructor(texture, width, height, posX, posY, dirX, dirY, speed) {
        this.texture = document.getElementById('bulletImg');
        this.width = 10;
        this.height = 5;
        this.posX = player.posX + player.width - 15;
        this.posY = player.posY + player.height - 21;
        this.dirX = 0;
        this.dirY = 0;
        this.speed = 15;
    }
}
