var r = Runner();
var JUMP_ARGS = { keyCode: 38 };
var DUCK_ARGS = { keyCode: 40, preventDefault: function () {} };

function duck() {
    r.onKeyDown(DUCK_ARGS);
    setTimeout(function () { r.onKeyUp(DUCK_ARGS); }, 400);
}

function jump(obstacle) {
    r.onKeyDown(JUMP_ARGS);
    if (shouldQuickJump(obstacle))
        r.onKeyUp(JUMP_ARGS);
}

function shouldQuickJump(obstacle) {
    var next = r.horizon.obstacles[1];
    return next && next.xPos - obstacle.xPos <= r.currentSpeed*42;
}

setInterval(function () {
    if (!r || r.horizon.obstacles.length === 0) return;
    var obstacle = r.horizon.obstacles[0];
    // if too high, ignore it
    if (obstacle.yPos < 75) return;
    // Otherwise, jump or duck, depending
    if (obstacle.xPos <= r.currentSpeed*18) {
        if (obstacle.yPos == 75) {
            // for low flying pterodactyls
            duck();
        } else {
            jump(obstacle);
        }
    }
}, 2);
