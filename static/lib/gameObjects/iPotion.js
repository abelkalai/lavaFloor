import GenericPickUp from "/static/lib/gameObjects/genericPickUp.js";

export default class IPotion extends GenericPickUp {
  constructor(props) {
    super({
      scene: props.scene,
      type: "iPotion",
      scale: 0.4,
      group: props.group,
      xPos: props.xPos, 
      yPos: props.yPos, 
      allowGravity: true
    });
    this.collide()
  }

  collide() {
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
      this.scene.backgroundMusic.pause();
      this.scene.invincibleMusic.play();
      setTimeout(() => {
        this.scene.player.enemyCollide = true;
        clearInterval(isInvincible);
        character.clearTint();
        this.scene.invincibleMusic.pause();
        this.scene.backgroundMusic.resume();
      }, 7500);
    }
  }
}
