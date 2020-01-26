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
        this.width = Math.floor(Math.random() * (800 - 600 + 1)) + 600;
        this.height = Math.floor(Math.random() * (800 - 600 + 1)) + 600;
        this.posX = Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0;
        this.posY = Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0;
    }
}

class Bullet {
    constructor(texture, width, height, posX, posY, dirX, dirY) {
        this.texture = document.getElementById('bulletImg');
        this.width = 25;
        this.height = 25;
        this.posX = player.posX + player.width - 15;
        this.posY = player.posY + player.height - 21;
        this.dirX = 25;
        this.dirY = 24;
    }
}

class Box {
    constructor(texture, width, height, posX, posY) {
        this.texture = document.getElementById('boxImg');
        this.width = 40;
        this.height = 40;
        this.posX = Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0;
        this.posY = Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0;
    }
}
