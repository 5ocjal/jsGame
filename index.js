const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
const ctx = canvas.getContext('2d');

const playerImg = document.getElementById('playerImg');

let playersAlive = [];
let treesArr = [];
let bulletsArr = [];

let options = {
    treeNumber: 7,
};

const player = {
    name: 'Yerdek',
    alive: true,
    ammo: 5,
    width: 100,
    height: 70,
    posX: 100,
    posY: 200,
    speed: 1,
    dirX: 0,
    dirY: 0,
};

const tree = {
    width: 400,
    height: 400,
    posX: Math.floor(Math.random() * (canvas.width - 200 - 0 + 1)) + 0,
    posY: Math.floor(Math.random() * (canvas.height - 200 - 0 + 1)) + 0,
    dirX: 0,
    dirY: 0,
    speed: 0,
};

let = isRunning = false;

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGui() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'green';
    ctx.fillText('Player ' + player.name + ' is ' + (player.alive ? 'alive' : 'dead'), 40, 40, 150);
    ctx.fillText('Ammo: ' + player.ammo, 40, 65, 150), ctx.fillText('Running:  ' + (isRunning ? 'On' : 'No'), 40, 90, 150);

    ctx.font = '10px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(player.name, player.posX + 20, player.posY, 70);
}

function drawPlayer() {
    ctx.drawImage(playerImg, player.posX, player.posY, player.width, player.height);
}

function drawTree() {
    for (let i = 0; i < treesArr.length; i++) {
        ctx.drawImage(treesArr[i].texture, treesArr[i].posX, treesArr[i].posY), treesArr[i].width, treesArr[i].height;
    }
}

function createTree() {
    for (let i = 0; i < options.treeNumber; i++) {
        let tree = new Tree();
        treesArr.push(tree);
    }
}

function createBullet() {
    if (bulletsArr.length == 0) {
        console.log('ODŁAMKOWYM!');
        let bullet1 = new Bullet();
        bulletsArr.push(bullet1);
    } else {
        console.log('JEST JUŻ KULKA');
    }
}

function newPossition() {
    player.posX += player.dirX;
    player.posY += player.dirY;
}

function update() {
    clearScreen();
    drawPlayer();
    drawTree();
    drawGui();
    newPossition();
    wallDetection();
    requestAnimationFrame(update);
}

function wallDetection() {
    player.posX < 0 ? (player.posX = 0) : null;
    player.posY < 0 ? (player.posY = 0) : null;
    player.posX + player.width > canvas.width ? (player.posX = canvas.width - player.width) : null;
    player.posY + player.height > canvas.height ? (player.posY = canvas.height - player.height) : null;
}

function keyDownEvent(e) {
    console.log('KEY: ', e.key);
    playerIsRunning(e);

    e.key === 'q' ? createBullet() : null;
    e.key === 'e' ? createTree() : null;
    e.key === 'z' ? gunFire() : null;
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
    bulletsArr = [];
    console.log('Fire: ', bulletsArr);
}

createTree();
update();

document.addEventListener('keydown', keyDownEvent);
document.addEventListener('keyup', keyUpEvent);
