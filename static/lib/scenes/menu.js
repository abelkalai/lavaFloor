export default class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  create() {
    this.enterKey = this.input.keyboard.addKey("ENTER");
    this.add.image(400, 300, "background");
    this.add.text(200, 50, "The Floor is Lava!", {
      fontSize: "40px",
      color: "#000000"
    });

    this.add.text(225, 450, "Press Enter to Start", {
      fontSize: "30px",
      color: "#000000"
    });
  }

  update() {
    this.enterKey.onDown = () => {
      this.scene.start("main");
    };
  }
}
