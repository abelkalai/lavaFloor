import Preload from "/static/lib/scenes/preload.js";
import Menu from "/static/lib/scenes/menu.js";
import Main from "/static/lib/scenes/main.js";
import Pause from "/static/lib/scenes/pause.js";
import Over from "/static/lib/scenes/over.js";

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
  }
});

game.scene.add("preload", new Preload());
game.scene.add("main", new Main(game));
game.scene.add("menu", new Menu());
game.scene.add("pause", new Pause());
game.scene.add("over", new Over());

game.scene.start("preload", new Preload());
