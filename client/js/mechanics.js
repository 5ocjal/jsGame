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

    if (gunFlashArr.length > 0) {
        for (let i = 0; i < gunFlashArr.length; i++) {
            setTimeout(() => gunFlashArr.splice(i, 1), 40);
        }
    }
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
        if (ammoBoxArr[i].posX - player.posX <= 30 && ammoBoxArr[i].posY - player.posY <= 20) {
            player.ammo = player.ammo + 3;
            ammoBoxArr.splice(i);
        }
    }
}

function useAidKit() {
    if (player.status === 1) {
        for (let i = 0; i < aidSupplyArr.length; i++) {
            if (aidSupplyArr[i].posX - player.posX <= 30 && aidSupplyArr[i].posY - player.posY <= 20) {
                player.status = 2;
                aidSupplyArr.splice(i);
            }
        }
    }
}
