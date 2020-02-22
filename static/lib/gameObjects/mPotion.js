import GenericPickUp from "/static/lib/gameObjects/genericPickUp.js";

export default class MPotion extends GenericPickUp {
  constructor(scene, props) {
    super({
      scene: scene,
      type: "mPotion",
      scale: 0.4,
      group: props.group,
      xPos: props.xPos, //200
      yPos: props.yPos, //400
      allowGravity: true
    });
    this.multiplierSound = this.scene.sound.add("multiplierPotion");
    this.update();
  }

  update() {
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

      this.scene.hud.overlay.scoreMultiplier = true;
      setTimeout(() => {
        this.scene.hud.overlay.scoreMultiplier = false;
      }, 10000);
    }
  }
}
