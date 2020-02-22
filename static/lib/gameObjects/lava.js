import hurtPlayer from "/static/lib/utilities/hurtPlayer.js";
export default class Lava {
  constructor(scene) {
    this.scene = scene;
    this.collide = this.scene.sound.add("burn");
    this.counter = 0;
    this.render();
  }

  render() {
    this.lavaObj = this.scene.physics.add.sprite(100, 1025, "lava");

    this.lavaObj.body.setAllowGravity(false);
    this.lavaObj.setVelocityX(500);
    this.lavaObj.setVelocityY(-1);
    this.lavaObj.body.setAccelerationY(-0.25);
    this.lavaObj.setDepth(50); 
    this.volume = 0.5;
    this.lavaSound = this.scene.sound.add("lava", { volume: this.volume });
    this.lavaSound.play();
    this.lavaSound.loop = true;
  }

  update() {
    let distance = Math.abs(this.scene.player.character.y - this.lavaObj.y);
    this.lavaSound.volume =
      (12 - distance / 125) / 12 < 0 ? 0 : (12 - distance / 125) / 12;
    this.counter += 1;

    if (this.counter == 100) {
      this.lavaObj.setVelocityX(this.lavaObj.body.velocity.x * -1);
      this.counter = 0;
    }
    //Collision with player
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.lavaObj,
      hurtPlayer,
      null,
      { this: this, enemy: this, scene: this.scene }
    );
  }
}
