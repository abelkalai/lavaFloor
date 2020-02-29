export default class Over extends Phaser.Scene {
  constructor() {
    super("over");
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    this.scene.stop("main");
    this.enterKey = this.input.keyboard.addKey("ENTER");
    this.add.image(400, 300, "lava");
    this.add.text(275, 50, "Game Over", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#ffffff"
    });
    this.add.text(230, 200, `Final Score: ${this.finalScore}`, {
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
