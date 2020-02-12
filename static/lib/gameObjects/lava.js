export default class Lava {
  constructor(scene) {
    this.scene = scene;
    scene.lava = this;
    this.collide= this.scene.sound.add("burn");
    this.counter = 0;
    this.render();
  }

  render() {
    this.lava = this.scene.physics.add.sprite(100, 1278, "lava");
    // this.lava.setX
    this.lava.body.setAllowGravity(false);
    this.lava.setVelocityX(500);
    this.lava.setVelocityY(-1);
    this.lava.body.setAccelerationY(-.25)
    this.volume = 0.5;
    //setAccelerationY(value)
    this.lavaSound = this.scene.sound.add("lava", { volume: this.volume });
    this.lavaSound.play();
    this.lavaSound.loop = true;
  }

  update() {
    this.volume = Math.abs(this.scene.player.character.y + this.lava.y) / 12000;
    this.lavaSound.volume = this.volume;
    this.counter += 1;
  
    if (this.counter == 100) {
      this.lava.setVelocityX(this.lava.body.velocity.x * -1);
      this.counter = 0;
    }
    //Collision with player
    this.scene.physics.add.overlap(
        this.scene.player.character,
        this.lava,
        hurtPlayer,
        () => {
          return this.scene.player.enemyCollide;
        },
        this
      );

    function hurtPlayer() {
        
      if (this.scene.overlay.health !== 0) this.scene.overlay.health -= 1;
      if (this.scene.overlay.health !== 0)
        this.scene.overlay.healthImage.destroy();
      this.scene.overlay.healthImage = this.scene.add.image(
        198,
        66,
        this.scene.overlay.heart_key[this.scene.overlay.health]
      );
      this.scene.player.enemyCollide = false;
      this.collide.play()

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
}
