function drawGui() {
    ctx.font = '20px Roboto';
    ctx.fillStyle = 'white';
    ctx.fillText('Player ' + player.name + ' is ' + player.description, 40, 40, 200);
    ctx.fillText('Ammo: ' + player.ammo, 40, 65, 200), ctx.fillText('Running:  ' + statusInfo(), 40, 90, 200);

    ctx.font = '10px Roboto';
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
    bulletsArr.forEach(b => {
        ctx.drawImage(b.texture, b.posX, b.posY, b.width, b.height);
    });
}

function drawTree() {
    treesArr.forEach(t => {
        ctx.drawImage(t.texture, t.posX, t.posY, t.width, t.height);
    });
}

function drawSupply() {
    ammoBoxArr.forEach(a => {
        ctx.drawImage(a.texture, a.posX, a.posY, a.width, a.height);
    });

    aidSupplyArr.forEach(a => {
        ctx.drawImage(a.texture, a.posX, a.posY, a.width, a.height);
    });
}

function drawGunFlash() {
    gunFlashArr.forEach(f => {
        ctx.drawImage(f.texture, f.posX, f.posY, f.width, f.height);
    });
}

function statusInfo() {
    if (player.status === 2) {
        if (player.isRunning) {
            return 'On';
        }
        if (!player.isRunning) {
            return 'No';
        }
    }
    if (player.status === 1) {
        return "I'm hurt, can't run";
    }
    if (player.status === 0) {
        return "Dead don't run";
    }
}
