//Function used by Phaser physics add collider method, this is passed through as a parameter within the callback function
export default function hurtPlayer() {
  if (this.scene.player.enemyCollide && this.scene.hud.overlay.health !== 0) {

    this.scene.hud.overlay.health -= 1;
    this.scene.player.enemyCollide = false;
    this.enemy.collide.play();

    let hurt = setInterval(() => {
      (this.scene.player.character.tint = this.scene.player.hurtAgain
        ? 0xff0000
        : 0xffffff),
        (this.scene.player.hurtAgain = !this.scene.player.hurtAgain);
    }, 100);

    setTimeout(() => {
      clearInterval(hurt);
    }, 500);
    setTimeout(() => {
      this.scene.player.enemyCollide = true;
      this.scene.player.character.clearTint();
    }, 750);
  }
}
