function drawGui() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Player ' + player.name + ' is ' + player.description, 40, 40, 150);
    ctx.fillText('Ammo: ' + player.ammo, 40, 65, 150), ctx.fillText('Running:  ' + (player.isRunning ? 'On' : 'No'), 40, 90, 150);

    ctx.font = '10px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(player.name, player.posX + 20, player.posY, 70);
}

function drawAim() {
    ctx.drawImage(aim.texture, mouseX, mouseY, 30, 30);
}

function drawPlayer() {
    ctx.drawImage(playerImg, player.posX, player.posY, player.width, player.height);
    ctx.rotate(angle);
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

    for (let i = 0; i < aidSupplyArr.length; i++) {
        ctx.drawImage(aidSupplyArr[i].texture, aidSupplyArr[i].posX, aidSupplyArr[i].posY, aidSupplyArr[i].width, aidSupplyArr[i].height);
    }
}

function drawGunFlash() {
    for (let i = 0; i < gunFlashArr.length; i++) {
        ctx.drawImage(gunFlashArr[i].texture, gunFlashArr[i].posX, gunFlashArr[i].posY, gunFlashArr[i].width, gunFlashArr[i].height);
    }
}
