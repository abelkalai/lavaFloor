export default class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  create() {
    this.startKey = this.input.keyboard.addKey("S");
    this.howKey = this.input.keyboard.addKey("H");

    this.add.text(300, 100, "Main Menu", {
      fontSize: "30px",
      color: "#ffffff"
    });
    this.add.text(200, 200, "Press H for How to Play", {
        fontSize: "30px",
        color: "#ffffff"
      });
    this.add.text(250, 300, "Press S to Start", {
      fontSize: "30px",
      color: "#ffffff"
    });
  }

  update() {
    this.startKey.onDown = () => {
      this.scene.start("main");
    };

    this.howKey.onDown = () => {
      this.scene.start("preload");
    };
  }
}
