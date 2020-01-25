const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const playerImg = document.getElementById('playerImg')

const player = {
    width: 100,
    height: 70,
    posX: 100,
    posY: 200,
    speed: 1,
    dirX: 0,
    dirY: 0,
}

let = isRunning = false;

function drawPlayer() {
    ctx.drawImage(playerImg, player.posX, player.posY, player.width, player.height);
}

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPossition() {
    player.posX += player.dirX;
    player.posY += player.dirY;
}

function update() {
    clearScreen();
    drawPlayer();
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


