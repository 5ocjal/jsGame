const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
const ctx = canvas.getContext('2d');

const playerImg = document.getElementById('playerImg');

let playersAlive = [];
let treesArr = [];
let bulletsArr = [];
let ammoBoxArr = [];

let options = {
    treeNumber: 2, // canvas.height /20,
    ammoSupply: 1,
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
        let bullet = new Bullet();
        bulletsArr.push(bullet);
        --player.ammo;
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

    if (bulletsArr.length > 0) {
        for (let i = 0; i < bulletsArr.length; i++) {
            if (bulletsArr[i].posX >= canvas.width || bulletsArr[i].posX < 0 || bulletsArr[i].posY >= canvas.height || bulletsArr[i].posY < 0) {
                bulletsArr.splice(i, 1);
            }
        }
    }
}

function keyDownEvent(e) {
    playerIsRunning(e);

    e.key === 'q' ? console.log('Bullets: ', bulletsArr) : null;
    e.keyCode === 69 ? createBullet() : null;
    e.keyCode == 68 ? (player.dirX = 1 * player.speed) : null;
    e.keyCode === 65 ? (player.dirX = -1 * player.speed) : null;
    e.keyCode === 87 ? (player.dirY = -1 * player.speed) : null;
    e.keyCode === 83 ? (player.dirY = 1 * player.speed) : null;
}

function keyUpEvent(e) {
    e.keyCode === 68 ? (player.dirX = 0) : null;
    e.keyCode === 65 ? (player.dirX = 0) : null;
    e.keyCode === 87 ? (player.dirY = 0) : null;
    e.keyCode === 83 ? (player.dirY = 0) : null;
}

function playerIsRunning(e) {
    e.keyCode === 16 ? (isRunning = !isRunning) : null;
    isRunning ? (player.speed = 5) : (player.speed = 1);
}

function gunFire() {
    if (bulletsArr.length > 0) {
        for (let i = 0; i < bulletsArr.length; i++) {
            bulletsArr[i].posX += bulletsArr[i].dirX;
        }
    }
}

function useSupply() {
    for (let i = 0; i < ammoBoxArr.length; i++) {
<<<<<<< HEAD
=======
        let pX = player.posX;
        let pY = player.posY;
        let aX = ammoBoxArr[i].posX;
        let aY = ammoBoxArr[i].posY;

        console.log('aX - pX: ', aX - pX);
        console.log('aY - pY: ', aY - pY);

>>>>>>> 7fdd31084934285196a307880f7ceb4bcc6952f2
        if (ammoBoxArr[i].posX - player.posX <= 30 && ammoBoxArr[i].posY - player.posY <= 20) {
            player.ammo = player.ammo + 3;
            ammoBoxArr = [];
        }
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
    useSupply();
    requestAnimationFrame(update);
}

createTree();
createSupply();
update();

document.addEventListener('keydown', keyDownEvent);
document.addEventListener('keyup', keyUpEvent);
document.addEventListener('onClick', createBullet);
