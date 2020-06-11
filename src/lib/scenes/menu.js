export default class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  create() {
    this.add.image(400, 300, "background");
    this.add.text(7.5, 7.5, "github.com/abelkalai", {
      fontFamily: "inGame",
      fontSize: "26px",
      color: "#000000",
    });
    this.add.text(7.5, 30, "linkedin.com/in/abelkalai", {
      fontFamily: "inGame",
      fontSize: "26px",
      color: "#000000",
    });

    this.add.text(207.5, 65, "The Floor is Lava!", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#000000",
    });

    this.add.text(185, 450, "Press Enter to Start", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#000000",
    });

    this.enterKey = this.input.keyboard.addKey("ENTER");
  }

  update() {
    this.enterKey.onDown = () => {
      this.scene.start("main");
    };
  }
}
