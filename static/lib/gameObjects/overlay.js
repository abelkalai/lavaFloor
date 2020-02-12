export default class Overlay {
  constructor(scene) {
    this.scene = scene;
    this.score = 0;
    this.health = 3;
    this.soundContent = "ON";
    this.scoreMultiplier = false;
    this.render();
  }

  render() {
    // Score
    this.scoreText = this.scene.add.text(20, 20, `Score:${this.score}`, {
      fontSize: "32px",
      fill: "#000"
    });

    // Multipler Text
    this.multiplierText = this.scene.add.text(
      500,
      48,
      "Score Multiplier Active!",
      {
        fontSize: "20px",
        fill: "#000"
      }
    );
    this.multiplierText.visible = false;

    // Health
    this.healthText = this.scene.add.text(20, 50, "Health: ", {
      fontSize: "32px",
      fill: "#000"
    });

    this.healthImage = this.scene.add.image(198, 66, `heart_${this.health}`);

    this.oldHealth = this.health;

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
    oKey.onDown = () => {
      this.soundContent = this.soundContent === "ON" ? "OFF" : "ON";
      this.scene.sound.mute = this.soundContent === "OFF" ? true : false;
      this.soundText.setText(`Sound:${this.soundContent}`);
    };

    //Updates visibility based on multiplier potion pickup
    this.multiplierText.visible = this.scoreMultiplier;

    //Updates image
    if (this.oldHealth != this.health) {
      this.oldHealth = this.health;
      this.healthImage.destroy();
      this.healthImage = this.scene.add.image(198, 66, `heart_${this.health}`);
    }
  }
}
