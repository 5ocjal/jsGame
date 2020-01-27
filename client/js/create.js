class CreateFunctions {
    constructor(){
        function createTree() {
            for (let i = 0; i < options.treeNumber; i++) {
                let tree = new Tree();
                treesArr.push(tree);
            }
        }

        function createSupply() {
            for (let i = 0; i < options.ammoSupply; i++) {
                let ammoBox = new Box();
                ammoBoxArr.push(ammoBox);
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
    }
}