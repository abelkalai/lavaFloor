import GenericPickUp from "/static/lib/gameObjects/genericPickUp.js";

export default class IPotion extends GenericPickUp {
  constructor(scene, props) {
    super({
      scene: scene,
      type: "iPotion",
      scale: 0.4,
      group: props.group,
      xPos: props.xPos, //310
      yPos: props.yPos, //300
      allowGravity: true
    });
    this.update();
  }

  update() {
    // Collision with potion
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getPotion,
      null,
      this
    );

    function getPotion(character, iPotion) {
      this.scene.player.enemyCollide = false;
      iPotion.disableBody(true, true);

      let isInvincible = setInterval(() => {
        character.tint = Math.random() * 0xffffff;
      }, 100);
      this.scene.backMusic.backgroundMusic.pause();
      this.scene.backMusic.invincibleMusic.play();
      setTimeout(() => {
        this.scene.player.enemyCollide = true;
        clearInterval(isInvincible);
        character.clearTint();
        this.scene.backMusic.invincibleMusic.pause();
        this.scene.backMusic.backgroundMusic.resume();
      }, 7500);
    }
  }
}
