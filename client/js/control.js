class Controls{
    constructor() {
        
        function keyDownEvent(e) {
            playerIsRunning(e);

            e.key === 'q' ? console.log('Test: ', gunFlashArr) : null;
            e.keyCode === 69 ? createBullet() : null;
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
            e.keyCode === 16 ? (isRunning = !isRunning) : null;
            isRunning ? (player.speed = 5) : (player.speed = 1);
        }

        function gunFire() {
            if (bulletsArr.length > 0) {
                for (let i = 0; i < bulletsArr.length; i++) {
                    bulletsArr[i].posX += bulletsArr[i].dirX;
                }
            }
        }
    }
}