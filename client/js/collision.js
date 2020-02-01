function wallDetection() {
    player.posX < 0 ? (player.posX = 0) : null;
    player.posY < 0 ? (player.posY = 0) : null;
    player.posX + player.width > canvas.width ? (player.posX = canvas.width - player.width) : null;
    player.posY + player.height > canvas.height ? (player.posY = canvas.height - player.height) : null;

    if (bulletsArr.length > 0) {
        bulletsArr.forEach(b => {
            if (b.posX >= canvas.width || b.posX < 0) {
                b.dirX *= -1;
            }
        });
    }

    if (gunFlashArr.length > 0) {
        gunFlashArr.forEach(f => {
            setTimeout(() => gunFlashArr.splice(f, 1), 40);
        });
    }
}

function getDistance(x1, y1, x2, y2){
    let xDistance = x2-x1;
    let yDistance = y2-y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance,2));
}