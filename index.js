const canvas = document.getElementById('canvas');
canvas.width = 800; //window.innerWidth;
canvas.height = 600; //window.innerWidth;
const ctx = canvas.getContext('2d');

const playerImg = document.getElementById('playerImg');

let playersAlive = [];
let treesArr = [];
let bulletsArr = [];
let ammoBoxArr = [];

let options = {
    treeNumber: 12,
    ammoSupply: 2,
};

const player = {
    name: 'Yerdek',
    alive: true,
    ammo: 5,
    width: 100,
    height: 70,
    posX: 100,
    posY: 200,
    speed: 3,
    dirX: 0,
    dirY: 0,
};

let = isRunning = false;

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGui() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Player ' + player.name + ' is ' + (player.alive ? 'alive' : 'dead'), 40, 40, 150);
    ctx.fillText('Ammo: ' + player.ammo, 40, 65, 150), ctx.fillText('Running:  ' + (isRunning ? 'On' : 'No'), 40, 90, 150);

    ctx.font = '10px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(player.name, player.posX + 20, player.posY, 70);
}

function drawPlayer() {
    ctx.drawImage(playerImg, player.posX, player.posY, player.width, player.height);
}

function drawBullet() {
    for (let i = 0; i < bulletsArr.length; i++) {
        ctx.drawImage(bulletsArr[i].texture, bulletsArr[i].posX, bulletsArr[i].posY, bulletsArr[i].width, bulletsArr[i].height);
    }
}

function drawTree() {
    for (let i = 0; i < treesArr.length; i++) {
        ctx.drawImage(treesArr[i].texture, treesArr[i].posX, treesArr[i].posY), treesArr[i].width, treesArr[i].height;
    }
}

function drawSupply() {
    for (let i = 0; i < ammoBoxArr.length; i++) {
        ctx.drawImage(ammoBoxArr[i].texture, ammoBoxArr[i].posX, ammoBoxArr[i].posY, ammoBoxArr[i].width, ammoBoxArr[i].height);
    }
}

function createTree() {
    for (let i = 0; i < options.treeNumber; i++) {
        let tree = new Tree();
        treesArr.push(tree);
    }
}

function createSupply() {
    for (let i = 0; i < options.ammoSupply; i++) {
        let ammoBox = new Box();
        ammoBoxArr.push(ammoBox);
    }
}

function createBullet() {
    if (player.ammo > 0) {
        if (bulletsArr.length == 0) {
            let bullet1 = new Bullet();
            bulletsArr.push(bullet1);
            --player.ammo;
        } else {
            bulletsArr = [];
        }
    }
}

function newPossition() {
    player.posX += player.dirX;
    player.posY += player.dirY;
}

function wallDetection() {
    player.posX < 0 ? (player.posX = 0) : null;
    player.posY < 0 ? (player.posY = 0) : null;
    player.posX + player.width > canvas.width ? (player.posX = canvas.width - player.width) : null;
    player.posY + player.height > canvas.height ? (player.posY = canvas.height - player.height) : null;
}

function keyDownEvent(e) {
    playerIsRunning(e);

    e.key === 'e' ? createBullet() : null;
    e.key === 'd' ? (player.dirX = 1 * player.speed) : null;
    e.key === 'a' ? (player.dirX = -1 * player.speed) : null;
    e.key === 'w' ? (player.dirY = -1 * player.speed) : null;
    e.key === 's' ? (player.dirY = 1 * player.speed) : null;
}

function keyUpEvent(e) {
    e.key === 'd' ? (player.dirX = 0) : null;
    e.key === 'a' ? (player.dirX = 0) : null;
    e.key === 'w' ? (player.dirY = 0) : null;
    e.key === 's' ? (player.dirY = 0) : null;
}

function playerIsRunning(e) {
    e.key === 'Shift' ? (isRunning = !isRunning) : null;
    isRunning ? (player.speed = 5) : (player.speed = 1);
}

function gunFire() {
    if (bulletsArr.length > 0) {
        bulletsArr[0].posX += bulletsArr[0].dirX;
    }
}

function update() {
    clearScreen();
    drawSupply();
    drawPlayer();
    drawTree();
    drawBullet();
    drawGui();
    newPossition();
    gunFire();
    wallDetection();
    requestAnimationFrame(update);
}


createTree();
createSupply();
update();

document.addEventListener('keydown', keyDownEvent);
document.addEventListener('keyup', keyUpEvent);
document.addEventListener('onClick', createBullet);
