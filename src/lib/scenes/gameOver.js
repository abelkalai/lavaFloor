import Main from "./main"
export default class GameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    this.scene.remove("main");
    this.scene.add("main", new Main(this.scene.game));
    this.enterKey = this.input.keyboard.addKey("ENTER");
    this.add.image(400, 300, "lava");
    this.add.text(285, 50, "Game Over", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#ffffff"
    });
    this.add.text(250, 200, `Final Score: ${this.finalScore}`, {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#ffffff"
    });
    this.add.text(140, 400, "Press ENTER to Try Again", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#ffffff"
    });
  }

  update() {
    this.enterKey.onDown = () => {
      this.scene.start("main");
    };
  }
}
