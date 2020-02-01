class Player {
    constructor(name, texture, ammo) {
        this.name = name;
        this.texture = texture;
        this.status = 2;
        this.description = 'alive'
        this.ammo = ammo;
        this.width = 100;
        this.height = 70;
        this.posX = 200; //Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0;
        this.posY = 500; //Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0;
        this.speed = 1;
        this.isRunning = false;
        this.dirX = 0;
        this.dirY = 0;
    }
}

class Tree {
    constructor(texture, width, height, posX, posY) {
        this.texture = document.getElementById('treeImg');
        this.width = Math.floor(Math.random() * (400 - 300 + 1)) + 400;
        this.height = Math.floor(Math.random() * (400 - 300 + 1)) + 400;
        this.posX = Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0;
        this.posY = Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0;
    }
}

class Bullet {
    constructor(id, shotBy, texture, width, height, posX, posY, dirX, dirY) {
        this.id = id;
        this.shotBy = this.shotBy; 
        this.texture = document.getElementById('bulletImg');
        this.width = 15;
        this.height = 8;
        this.posX = player.posX + player.width - 15;
        this.posY = player.posY + player.height - 23;
        this.dirX = 25;
        this.dirY = 24;
    }
}

class Supply {
    constructor(id, texture, width, height, posX, posY) {
        this.id = id;
        this.texture = texture;
        this.width = 40;
        this.height = 40;
        this.posX = Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0;
        this.posY = Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0;
    }
}

class GunFlash {
    constructor( texture, width, height, posX, posY) {
        this.texture = document.getElementById('gunFlashImg');
        this.width = 40;
        this.height = 20;
        this.posX = player.posX + player.width - 10;
        this.posY = player.posY + player.height -29;
    }
}

class Aim {
    constructor(posX, posY, width, height) {
        this.texture = document.getElementById('aimImg');
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
    }
}
