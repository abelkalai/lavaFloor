import Preload from "./scenes/preload";
import Menu from "./scenes/menu";
import Main from "./scenes/main";
import Pause from "./scenes/pause";
import GameOver from "./scenes/gameOver";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 800,
    height: 600,
},
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
game.scene.add("gameOver", new GameOver());

game.scene.start("preload", new Preload());
