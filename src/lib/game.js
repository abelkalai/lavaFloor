import Preload from "./scenes/preload";
import Menu from "./scenes/menu";
import Main from "./scenes/main";
import Pause from "./scenes/pause";
import Over from "./scenes/over";

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