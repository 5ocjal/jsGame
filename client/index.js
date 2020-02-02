const canvas = document.getElementById('canvas');
canvas.width = 800; //window.innerWidth;
canvas.height = 600; //window.innerWidth;
const ctx = canvas.getContext('2d');

const playerImg = document.getElementById('playerImg');

const aim = new Aim();

let mouseX;
let mouseY;
let angle = Math.atan2(mouseX - 150, mouseY - 150);

let playersAlive = [];
let treesArr = [];
let grassArr = [];
let bulletsArr = [];
let ammoBoxArr = [];
let aidSupplyArr = [];
let gunFlashArr = [];
let bloodSplashArr = [];

let options = {
    ammo: 7,
    treeNumber: 1, // canvas.height /20,
    grassNumber: canvas.width *4,
    ammoSupply: 4,
    aidSupply: 2,
    timer: null,
    saftyZone: null,
    instantKill: false,
};

const player = {
    name: 'Rambo',
    texture: playerImg,
    status: 2,
    description: '',
    ammo: options.ammo,
    width: 100,
    height: 70,
    posX: 100,
    posY: 200,
    speed: 1,
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
        player.texture = deadImg;
        player.speed = 0;
        player.ammo = 0;

        ctx.font = '250px Bangers';
        ctx.fillStyle = '#E8BA00';
        ctx.fillText('You are', 250, 300, 300);
        ctx.fillText('dead!', 250, 490, 300);
    }
    if (player.status === 1) {
        player.description = 'hurt';
        player.speed = 1;
        drawGui();
    }
    if (player.status === 2) {
        player.description = 'alive';
        drawGui();
    }
}

function update() {
    clearScreen();
    drawGrass();
    drawSupply();
    drawAim();
    drawPlayer();
    drawTree();
    drawBullet();
    drawGunFlash();
    drawBloodSplash();
    newPossition();
    playerStatusMonitor();
    gunFire();
    wallDetection();
    youAreDead();
    useSupply();
    useAidKit();
    timeEventsMonitor();
    requestAnimationFrame(update);
}

createTree();
createGrass();
createSupply();
update();

document.addEventListener('keydown', keyDownEvent);
document.addEventListener('keyup', keyUpEvent);
document.addEventListener('mousedown', createBullet);
document.onmousemove = function(mouse) {
    mouseX = mouse.clientX;
    mouseY = mouse.clientY;
};
