import hurtPlayer from "/static/lib/utilities/hurtPlayer.js"
export default class Lava {
  constructor(scene) {
    this.scene = scene;
    this.collide = this.scene.sound.add("burn");
    this.counter = 0;
    this.render();
  }

  render() {
    this.lava = this.scene.physics.add.sprite(100, 1278, "lava");
    // this.lava.setX
    this.lava.body.setAllowGravity(false);
    this.lava.setVelocityX(500);
    this.lava.setVelocityY(-1);
    this.lava.body.setAccelerationY(-0.25);
    this.volume = 0.5;
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
      null,
      { this: this, enemy: this, scene: this.scene }
    );
  }
}
