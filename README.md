# T-Rex runner bot

My internet was down for half an hour, so...

## Usage

1. Lose your internet.
2. Open Chrome, go to foxnews.com.
3. Desperately smash refresh.
4. Go through the five stages of grief.
5. Open Chrome developer tools.
6. Paste into console:
  ```
  var r=Runner();var JUMP_ARGS={keyCode:38};var DUCK_ARGS={keyCode:40,preventDefault:function(){}};function duck(){r.onKeyDown(DUCK_ARGS);setTimeout(function(){r.onKeyUp(DUCK_ARGS)},400)}function jump(obstacle){r.onKeyDown(JUMP_ARGS);if(shouldQuickJump(obstacle))r.onKeyUp(JUMP_ARGS)}function shouldQuickJump(obstacle){var next=r.horizon.obstacles[1];return next&&next.xPos-obstacle.xPos<=r.currentSpeed*42}setInterval(function(){if(!r||r.horizon.obstacles.length===0)return;var obstacle=r.horizon.obstacles[0];if(obstacle.yPos<75)return;if(obstacle.xPos<=r.currentSpeed*18){if(obstacle.yPos==75){duck()}else{jump(obstacle)}}},2);
  ```
7. Profit.
