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

game.scene.add('main',new Main())
game.scene.start('main')
