export default class Hud extends Phaser.Scene {
  constructor() {
    super("hud");
    this.score = 0;
    this.health = 3;
    this.soundContent = "ON";
    this.scoreMultiplier = false;
  }

  create() {
    // Score
    this.scoreText = this.add.text(20, 20, `Score:${this.score}`, {
      fontSize: "32px",
      fill: "#ee3231"
    });

    // Multipler Text
    this.multiplierText = this.add.text(500, 48, "Score Multiplier Active!", {
      fontSize: "20px",
      fill: "#ee3231"
    });
    this.multiplierText.visible = false;

    // Health
    this.healthText = this.add.text(20, 50, "Health: ", {
      fontSize: "32px",
      fill: "#ee3231"
    });

    this.healthImage = this.add.image(198, 66, `heart_${this.health}`);

    this.oldHealth = this.health;

    // Sound Toggle
    this.soundText = this.add.text(620, 20, `Sound:${this.soundContent}`, {
      fontSize: "32px",
      fontFamily: "inGame",
      fill: "#ee3231"
    });
    this.oKey = this.input.keyboard.addKey("O");
  }

  update() {
    // Player can turn sound off with "o" key
    this.oKey.onDown = () => {
      this.soundContent = this.soundContent === "ON" ? "OFF" : "ON";
      this.sound.mute = this.soundContent === "OFF" ? true : false;
      this.soundText.setText(`Sound:${this.soundContent}`);
    };

    //Updates visibility based on multiplier potion pickup
    this.multiplierText.visible = this.scoreMultiplier;

    //Updates image
    if (this.oldHealth != this.health) {
      this.oldHealth = this.health;
      this.healthImage.destroy();
      this.healthImage = this.add.image(198, 66, `heart_${this.health}`);
    }
  }
}
