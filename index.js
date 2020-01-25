const canvas = document.getElementById('canvas');
canvas.width = 1024;
canvas.height = 1024;
const ctx = canvas.getContext('2d');

const playerImg = document.getElementById('playerImg')
const treeImg = document.getElementById('treeImg');

const player = {
    name: 'Yerdek',
    alive: true,
    width: 100,
    height: 70,
    posX: 100,
    posY: 200,
    speed: 1,
    dirX: 0,
    dirY: 0,
}

const bullet = {
    posX: (player.posX + player.width - 7),
    posY: (player.posY + player.height - 19),
    dirX: 0,
    dirY: 0,
    speed: 15,
    size: 12,
    sAngle: 0,
    eAngle: Math.PI *2,
}

const tree = {
    width: 400,
    height: 400,
    posX: Math.floor(Math.random() * (canvas.width - 0 + 1)) + 0,
    posY: Math.floor(Math.random() * (canvas.height - 0 + 1)) + 0,
    dirX: 0,
    dirY: 0,
    speed: 0,
}

let = isRunning = false;

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawGui() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'green';
    ctx.fillText('Player ' + player.name + ' is ' + (player.alive ? 'alive' : 'dead'), 40, 40, 150);

    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Running:  ' + (isRunning ? 'On' : 'No'), 40, 65);
}

function drawPlayer() {
    ctx.drawImage(playerImg, player.posX, player.posY, player.width, player.height);     
}

function drawTree() {
    ctx.drawImage(treeImg, tree.posX, tree.posY, tree.width, tree.height);
}

function drawBullet() {
    ctx.beginPath();
    ctx.arc(bullet.posX, bullet.posY, bullet.size, bullet.sAngle, bullet.eAngle);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
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
    player.posX < 0 ? player.posX = 0 : null;
    player.posY < 0 ? player.posY = 0 : null;
    player.posX + player.width > canvas.width ? player.posX = canvas.width - player.width : null;
    player.posY + player.height > canvas.height ? player.posY = canvas.height - player.height : null;
}

function keyDownEvent(e) {

    playerIsRunning(e);

    e.key === 'd' ? player.dirX = 1 * player.speed : null;
    e.key === 'a' ? player.dirX = -1 * player.speed : null;
    e.key === 'w' ? player.dirY = -1 * player.speed : null;
    e.key === 's' ? player.dirY = 1 * player.speed : null;
}


function keyUpEvent(e) {
    e.key === 'd' ? player.dirX = 0 : null;
    e.key === 'a' ? player.dirX = 0 : null;
    e.key === 'w' ? player.dirY = 0 : null;
    e.key === 's' ? player.dirY = 0 : null;
}

function playerIsRunning(e) {
    e.key === 'Shift' ? isRunning = !isRunning : null;
    isRunning ? player.speed = 5 : player.speed = 1;
}

update();

document.addEventListener('keydown', keyDownEvent)
document.addEventListener('keyup', keyUpEvent);


