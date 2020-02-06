export default class Overlay {
  constructor(scene) {
    this.scene = scene;
    scene.overlay = this;
    this.score = 0;
    this.health = 3;
    this.soundContent = "ON";
    this.soundToggle = true;
    this.render();
  }

  render() {
    // Score
    this.scoreText = this.scene.add.text(20, 20, `Score:${this.score}`, {
      fontSize: "32px",
      fill: "#000"
    });

    // Health
    this.heart_key = ["heart_0", "heart_1", "heart_2", "heart_3"];
    this.healthText = this.scene.add.text(20, 50, "Health: ", {
      fontSize: "32px",
      fill: "#000"
    });

    this.healthImage = this.scene.add.image(
      198,
      66,
      this.heart_key[this.health]
    );

    // Sound Toggle
    this.soundText = this.scene.add.text(
      620,
      20,
      `Sound:${this.soundContent}`,
      {
        fontSize: "32px",
        fill: "#000"
      }
    );
  }

  update() {
    // player can turn sound off with "o" key
    let oKey = this.scene.input.keyboard.addKey("O");
    if (oKey.isDown && this.soundToggle) {
      this.soundContent = this.soundContent === "ON" ? "OFF" : "ON";
      this.scene.sound.mute = this.soundContent === "OFF" ? true : false;
      this.soundText.setText(`Sound:${this.soundContent}`);
      this.soundToggle = false;
      setTimeout(() => {
        this.soundToggle = true;
      }, 200);
    }
  }
}
