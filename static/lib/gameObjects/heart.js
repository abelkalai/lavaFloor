import Pickup from "./pickUp.js";

export default class Heart extends Pickup {
  constructor(props) {
    super({
      scene: props.scene,
      type: "heart",
      scale: 1,
      group: props.group,
      xPos: props.xPos, 
      yPos: props.yPos, 
      allowGravity: false
    });
    this.heartSound = this.scene.sound.add("collectHeart");
    this.collide()
  }

  collide() {
    // Collision with heart pickup
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getHeart,
      null,
      this
    );

    // Get Heart Function
    function getHeart(character, heart) {
      if (this.scene.hud.health <= 2) {
        this.scene.hud.health++;
        this.heartSound.play();
        heart.disableBody(true, true);
      }
    }
  }
}
