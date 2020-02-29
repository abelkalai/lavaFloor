export default class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  create() {
    this.add.image(400, 300, "background");
    this.add.text(207.5, 50, "The Floor is Lava!", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#000000"
    });

    this.add.text(185, 400, "Press Enter to Start", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#000000"
    });
    this.enterKey = this.input.keyboard.addKey("ENTER");
  }

  update() {
    this.enterKey.onDown = () => {
      this.scene.start("main");
    };
  }
}
