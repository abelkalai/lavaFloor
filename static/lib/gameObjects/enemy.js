import hurtPlayer from "../utilities/hurtPlayer.js";

export default class Enemy {
  constructor(props) {
    this.scene = props.scene;
    this.speed = props.speed;
    this.type = props.type;
    this.scale = props.scale;
    this.xPos = props.xPos;
    this.yPos = props.yPos;
    this.group = props.group;
    this.allowGravity = props.allowGravity;
    this.frameRate = props.frameRate;
    this.collide = this.scene.sound.add("collideEnemy");
    this.animate();
    this.render();
    this.update();
  }

  render() {
    this.sprite = this.group.create(
      this.xPos,
      this.yPos,
      this.type
    );
    this.sprite.setDepth(125); 
    this.sprite.setScale(this.scale);
    this.sprite.body.setAllowGravity(this.allowGravity);
    this.scene.physics.add.collider(
      this.sprite,
      this.scene.platforms
    );
    this.sprite.anims.play(`${this.type}Walk`, true);
    this.sprite.setVelocityX(this.speed);
  }

  animate() {
    this.scene.anims.create({
      key: `${this.type}Walk`,
      frames: this.scene.anims.generateFrameNumbers(this.type, {
        start: 0,
        end: 1
      }),
      frameRate: this.frameRate,
      repeat: -1
    });
  }

  update() {
    //Collide with player
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      hurtPlayer,
      null,
      { this: this, enemy: this, scene: this.scene }
    );

    //Wall Collision
    this.scene.physics.add.overlap(
      this.sprite,
      this.scene.walls,
      () => {
        this.sprite.setVelocityX(-this.sprite.body.velocity.x);
        this.sprite.toggleFlipX();
      }
    );
  }
}
