const flash = document.getElementById('flashImg');
const deadImg = document.getElementById('graveImg');
const bloodLImg = document.getElementById('bloodLImg');
const bloodRImg = document.getElementById('bloodRImg');


function createTree() {
    for (let i = 0; i < options.treeNumber; i++) {
        let tree = new Tree();
        treesArr.push(tree);
    }
}

function createGrass(){
    for (let i = 0; i < options.grassNumber; i++){
        let grass = new Grass();
        grassArr.push(grass);
    }
}

function createSupply() {
    const box = document.getElementById('boxImg');
    const aid = document.getElementById('aidImg');

    if (options.ammoSupply > 0) {
        for (let i = 0; i < options.ammoSupply; i++) {
            const id = Math.floor(Math.random() * 1000);
            let ammoBox = new Supply(id, box);
            ammoBoxArr.push(ammoBox);
        }
    }

    if (options.ammoSupply > 0 && !options.instantKill) {
        for (let i = 0; i < options.aidSupply; i++) {
            const id = Math.floor(Math.random() * 1000);
            let aidBox = new Supply(id, aid);
            aidSupplyArr.push(aidBox);
        }
    }
}

function createBullet() {
    if (player.ammo > 0) {
        const id = Math.floor(Math.random() * 1000);
        let bullet = new Bullet(id, player.name);
        bulletsArr.push(bullet);
        --player.ammo;
        console.log('Bullet: ', bulletsArr);
        let gunFlash = new GunFlash();
        gunFlashArr.push(gunFlash);
    }
}

