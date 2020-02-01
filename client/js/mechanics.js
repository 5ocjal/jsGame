function newPossition() {
    player.posX += player.dirX;
    player.posY += player.dirY;
}

function gunFire() {
    bulletsArr.forEach(b => {
        b.posX += b.dirX;
    });
}

function useSupply() {
    ammoBoxArr.forEach(a => {
        if (a.posX - player.posX <= 30 && a.posY - player.posY <= 20) {
            player.ammo = player.ammo + 3;
            ammoBoxArr.splice(a, 1); // FIXME - doesn't hide exact item
        }
    });
}

function useAidKit() {
    if (player.status === 1) {
        aidSupplyArr.forEach(a => {
            if (a.posX - player.posX < 30 && a.posY - player.posY < 3) {
                console.log('Aid', a.id);
                player.status = 2;
                // FIXME - doesn't hide exact item
            }
        });
    }
}

function youAreDead() {
    bulletsArr.forEach(b => {
        let hitZone = getDistance(player.posX, player.posY, b.posX, b.posY);
        
        if(hitZone <= 50){
            --player.status
        }
    });
}