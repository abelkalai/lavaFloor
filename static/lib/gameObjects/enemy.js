export default class Enemy {
  constructor(props) {
    this.scene = props.scene;
    this.speed = props.speed;
    this.type = props.type;
    this.scale = props.scale;
    this.xPos = props.xPos;
    this.yPos = props.yPos;
    this.allowGravity=props.allowGravity
    this.frameRate= props.frameRate
    this.collideEnemySound = this.scene.sound.add("collideEnemy");
    this.animate();
    this.render();
    this.handleCollision()
  }

  render() {
    this.sprite = this.scene.physics.add.sprite(
      this.xPos,
      this.yPos,
      this.type
    );
    this.sprite.setScale(this.scale);
    this.sprite.setCollideWorldBounds(true);
    this.sprite.body.setAllowGravity(this.allowGravity)
    this.scene.physics.add.collider(this.sprite, this.scene.boundaries.platforms);
    this.sprite.anims.play(`${this.type}Walk`, true);
    this.sprite.setVelocityX(this.speed);
  }

  animate() {
    this.scene.anims.create({
      key: `${this.type}Walk`,
      frames: this.scene.anims.generateFrameNumbers(this.type, { start: 0, end: 1 }),
      frameRepeat: 0.1,
      frameRate: this.frameRate,
      repeat: -1
    });

  }

  handleCollision() {
    //Collide with player
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
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
      this.collideEnemySound.play();

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
        this.scene.player.character.clearTint()
      }, 750);
    }

    //Wall Collision
    this.scene.physics.add.overlap(
      this.sprite,
      this.scene.boundaries.walls,
      enemyHitWall,
      null,
      this
    );

    function enemyHitWall(enemy) {
      enemy.setVelocityX(enemy.body.velocity.x * -1);
      enemy.toggleFlipX()
    }
  }
}
