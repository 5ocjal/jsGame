class DrawFunctions {
    constructor() {
        function drawGui() {
            ctx.font = '20px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText('Player ' + player.name + ' is ' + (player.alive ? 'alive' : 'dead'), 40, 40, 150);
            ctx.fillText('Ammo: ' + player.ammo, 40, 65, 150), ctx.fillText('Running:  ' + (isRunning ? 'On' : 'No'), 40, 90, 150);

            ctx.font = '10px Arial';
            ctx.fillStyle = 'black';
            ctx.fillText(player.name, player.posX + 20, player.posY, 70);
        }

        function drawPlayer() {
            ctx.drawImage(playerImg, player.posX, player.posY, player.width, player.height);
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
        }

        function drawGunFlash() {
            for (let i = 0; i < gunFlashArr.length; i++) {
                ctx.drawImage(gunFlashArr[i].texture, gunFlashArr[i].posX, gunFlashArr[i].posY, gunFlashArr[i].width, gunFlashArr[i].height);
            }
        }
    }
}
