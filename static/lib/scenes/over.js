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

    this.startKey = this.input.keyboard.addKey("S");
    this.menuKey = this.input.keyboard.addKey("M");
    this.add.text(300, 100, "Game Over", {
      fontSize: "30px",
      color: "#ffffff"
    });
    this.add.text(225, 200, `Final Score: ${this.finalScore}`, {
      fontSize: "30px",
      color: "#ffffff"
    });
    this.add.text(225, 250, "Press S to Try Again", {
      fontSize: "30px",
      color: "#ffffff"
    });
    this.add.text(225, 300, "Press M to Go to Main Menu", {
      fontSize: "30px",
      color: "#ffffff"
    });
  }

  update() {
    this.startKey.onDown = () => {
      this.scene.start("main");
    };

    this.menuKey.onDown = () => {
      this.scene.start("menu");
    };
  }
}
