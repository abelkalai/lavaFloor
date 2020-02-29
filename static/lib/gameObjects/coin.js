import Pickup from "./pickUp.js";

export default class Coin extends Pickup {
  constructor(props) {
    super({
      scene: props.scene,
      type: "coin",
      scale: 0.065,
      group: props.group,
      xPos: props.xPos, 
      yPos: props.yPos, 
      allowGravity: false
    });
    this.coinSound = this.scene.sound.add("collectCoin");
    this.coinMultiplierCollect = this.scene.sound.add("coinMultiplierCollect");
    this.collide()
  }

  collide() {
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
      this.scene.hud.score += this.scene.hud.scoreMultiplier
        ? 100
        : 50;
      this.scene.hud.scoreText.setText(
        `Score:${this.scene.hud.score}`
      );
    }
  }
}
