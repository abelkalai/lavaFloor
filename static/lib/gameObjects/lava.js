import hurtPlayer from "/static/lib/utilities/hurtPlayer.js";
export default class Lava {
  constructor(scene) {
    this.scene = scene;
    this.collide = this.scene.sound.add("burn");
    this.counter = 0;
    this.render();
  }

  render() {
    this.lava = this.scene.physics.add.sprite(100, 1278, "lava");

    this.lava.body.setAllowGravity(false);
    this.lava.setVelocityX(500);
    this.lava.setVelocityY(-1);
    this.lava.body.setAccelerationY(-0.25);
    this.lava.setDepth(1000); //High depth to always be rendered in front
    this.volume = 0.5;
    this.lavaSound = this.scene.sound.add("lava", { volume: this.volume });
    this.lavaSound.play();
    this.lavaSound.loop = true;
  }

  update() {
    let distance = Math.abs(this.scene.player.character.y - this.lava.y);
    this.lavaSound.volume =
      (12 - distance / 125) / 12 < 0 ? 0 : (12 - distance / 125) / 12;
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
