import Pickup from "/static/lib/gameObjects/pickUp.js";

export default class MPotion extends Pickup {
  constructor(props) {
    super({
      scene: props.scene,
      type: "mPotion",
      scale: 0.4,
      group: props.group,
      xPos: props.xPos, 
      yPos: props.yPos, 
      allowGravity: true
    });
    this.multiplierSound = this.scene.sound.add("multiplierPotion");
    this.collide()
  }

  collide() {
    // Collision with score multiplier pickup
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getMultiplier,
      null,
      this
    );
    // Get Multiplier function
    function getMultiplier(character, mPotion) {
      this.multiplierSound.play();
      mPotion.disableBody(true, true);

      this.scene.hud.scoreMultiplier = true;
      setTimeout(() => {
        this.scene.hud.scoreMultiplier = false;
      }, 10000);
    }
  }
}
