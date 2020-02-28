import Main from "/static/lib/scenes/main.js";
export default class Over extends Phaser.Scene {
  constructor() {
    super("over");
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    this.scene.remove("main");
    this.scene.add("main", new Main(this.scene.game));

    this.enterKey = this.input.keyboard.addKey("ENTER");
   
    this.add.text(300, 100, "Game Over", {
      fontSize: "30px",
      color: "#ffffff"
    });
    this.add.text(225, 200, `Final Score: ${this.finalScore}`, {
      fontSize: "30px",
      color: "#ffffff"
    });
    this.add.text(225, 250, "Press ENTER to Try Again", {
      fontSize: "30px",
      color: "#ffffff"
    });
  }

  update() {
    this.enterKey.onDown = () => {
      this.scene.start("main");
    };

  }
}
