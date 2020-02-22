import GenericPickUp from "/static/lib/gameObjects/genericPickUp.js";

export default class Coin extends GenericPickUp {
  constructor(scene, props) {
    super({
      scene: scene,
      type: "coin",
      scale: 0.065,
      group: props.group,
      xPos: props.xPos, //200
      yPos: props.yPos, //300
      allowGravity: false
    });
    this.coinSound = this.scene.sound.add("collectCoin");
    this.coinMultiplierCollect = this.scene.sound.add("coinMultiplierCollect");
    this.update();
  }

  update() {
    //Collision with coin
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getCoin,
      null,
      this
    );

    //Get Coin Function
    function getCoin(character, coin) {
      this.scene.player.scoreMultiplier
        ? this.coinMultiplierCollect.play()
        : this.coinSound.play();
      coin.disableBody(true, true);
      this.scene.hud.overlay.score += this.scene.hud.overlay.scoreMultiplier
        ? 100
        : 50;
      this.scene.hud.overlay.scoreText.setText(
        `Score:${this.scene.hud.overlay.score}`
      );
    }
  }
}
