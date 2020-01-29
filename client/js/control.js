function keyDownEvent(e) {
    playerIsRunning(e);

    e.key === 'q' ? console.log('Test: ', setPlayerStatus(player.status)) : null;
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
    e.keyCode === 16 ? (player.isRunning = !player.isRunning) : null;
    player.isRunning ? (player.speed = 4) : (player.speed = 1);
}
