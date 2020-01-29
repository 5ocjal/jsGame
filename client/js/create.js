function createTree() {
    for (let i = 0; i < options.treeNumber; i++) {
        let tree = new Tree();
        treesArr.push(tree);
    }
}

function createSupply() {
    const box = document.getElementById('boxImg');
    const aid = document.getElementById('aidImg');

    if (options.ammoSupply > 0) {
        for (let i = 0; i < options.ammoSupply; i++) {
            let ammoBox = new Supply(box);
            ammoBoxArr.push(ammoBox);
        }
    }

    if (options.ammoSupply > 0 && !options.instantKill) {
        for (let i = 0; i < options.aidSupply; i++) {
            let aidBox = new Supply(aid);
            aidSupplyArr.push(aidBox);
        }
    }
}

function createBullet() {
    if (player.ammo > 0) {
        let bullet = new Bullet();
        bulletsArr.push(bullet);
        --player.ammo;
        let gunFlash = new GunFlash();
        gunFlashArr.push(gunFlash);
    }
}
