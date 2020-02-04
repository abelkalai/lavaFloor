import Boot from "/static/lib/scenes/boot.js"
import Preload from "/static/lib/scenes/preload.js"
import Main from "/static/lib/scenes/main.js";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
});

game.scene.add('boot',new Boot())
game.scene.add('preload',new Preload())
game.scene.add('main',new Main())

game.scene.start('boot', new Boot())
