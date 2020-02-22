import GenericPickUp from "/static/lib/gameObjects/genericPickUp.js";

export default class Heart extends GenericPickUp {
  constructor(scene, props) {
    super({
      scene: scene,
      type: "heart",
      scale: 1,
      group: props.group,
      xPos: props.xPos, //100
      yPos: props.yPos, //250
      allowGravity: false
    });
    this.heartSound = this.scene.sound.add("collectHeart");
    this.update();
  }

  update() {
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
      if (this.scene.hud.overlay.health <= 2) {
        this.scene.hud.overlay.health++;
        this.heartSound.play();
        heart.disableBody(true, true);
      }
    }
  }
}
