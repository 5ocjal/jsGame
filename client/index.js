const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
const ctx = canvas.getContext('2d');

const playerImg = document.getElementById('playerImg');
const flash = document.getElementById('flashImg');
const aim = new Aim();

let mouseX;
let mouseY;
let angle = Math.atan2(mouseX - 150, mouseY - 150);

let playersAlive = [];
let treesArr = [];
let bulletsArr = [];
let ammoBoxArr = [];
let aidSupplyArr = [];
let gunFlashArr = [];

let options = {
    ammo: 7,
    treeNumber: 2, // canvas.height /20,
    ammoSupply: 1,
    aidSupply: 2,
    timer: null,
    saftyZone: null,
    instantKill: false,
};

const player = {
    name: 'Rambo',
    status: 1,
    description: 'hurt',
    ammo: options.ammo,
    width: 100,
    height: 70,
    posX: 100,
    posY: 200,
    speed: 3,
    isRunning: false,
    dirX: 0,
    dirY: 0,
};

let isRunning = false;

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function playerStatusMonitor() {
    if (player.status === 0) {
        player.description = 'dead';
    }
    if (player.status === 1) {
        player.description = 'hurt';
    }
    if (player.status === 2) {
        player.description = 'alive';
    }
}

function update() {
    clearScreen();
    drawSupply();
    drawAim();
    drawPlayer();
    drawTree();
    drawBullet();
    drawGunFlash();
    drawGui();
    newPossition();
    playerStatusMonitor();
    gunFire();
    wallDetection();
    useSupply();
    useAidKit();
    requestAnimationFrame(update);
}

createTree();
createSupply();
update();

document.addEventListener('keydown', keyDownEvent);
document.addEventListener('keyup', keyUpEvent);
document.addEventListener('mousedown', createBullet);
document.onmousemove = function(mouse) {
    mouseX = mouse.clientX;
    mouseY = mouse.clientY;
};
