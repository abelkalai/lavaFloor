export default class Player {
  constructor(scene) {
    this.scene = scene;
    this.hurtAgain;
    this.playerStanding = true;
    this.characterFacingRight = true;
    this.enemyCollide = true;
    this.yMax = 0;
    this.scoreHeight = 500;
    this.deathSound = this.scene.sound.add("deathSound");
    this.render();
    this.animate();
  }

  render() {
    //Adds player character to the scene
    this.character = this.scene.physics.add.sprite(400, 438, "character");
    this.character.setCollideWorldBounds(true);
    this.character.setDepth(5);
    this.scene.physics.add.collider(this.character, this.scene.platforms);
    this.yStart = this.character.y;
    this.getPoints = this.scene.sound.add("scoreIncrease");
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  animate() {
    this.scene.anims.create({
      key: "right",
      frames: this.scene.anims.generateFrameNumbers("walk", {
        start: 0,
        end: 1
      }),
      repeat: -1,
      frameRate: 20
    });

    this.scene.anims.create({
      key: "left",
      frames: this.scene.anims.generateFrameNumbers("walkBackFacing", {
        start: 0,
        end: 1
      }),
      repeat: -1,
      frameRate: 20
    });

    this.scene.anims.create({
      key: "idle",
      frames: [{ key: "character", frame: 0 }]
    });

    this.scene.anims.create({
      key: "idleBackFacing",
      frames: [{ key: "characterBackFacing", frame: 0 }]
    });

    this.scene.anims.create({
      key: "jump",
      frames: [{ key: "jump", frame: 0 }],
      repeat: -1,
      frameRate: 20
    });

    this.scene.anims.create({
      key: "jumpBackFacing",
      frames: [{ key: "jumpBackFacing", frame: 0 }],
      repeat: -1,
      frameRate: 20
    });
  }

  update() {
    //Record player maximum height
    this.yMax = Math.max(this.yMax, Math.abs(this.character.y - this.yStart));

    //Handle jumping
    if (this.character.body.onFloor() && this.cursors.up.isDown) {
      this.characterFacingRight
        ? this.character.anims.play("jump", true)
        : this.character.anims.play("jumpBackFacing", true);
      this.character.setVelocityY(-235);
    }

    // Holding arrow keys while jumping right
    else if (
      this.cursors.right.isDown &&
      this.character.body.onFloor() &&
      this.cursors.up.isDown
    ) {
      this.character.anims.play("jump", true);
      this.character.setVelocityY(-235);
      this.character.setVelocityX(200);
      this.characterFacingRight = true;
    }

    // Holding arrow keys while jumping left
    else if (
      this.cursors.left.isDown &&
      this.character.body.onFloor() &&
      this.cursors.up.isDown
    ) {
      this.character.anims.play("jumpBackFacing", true);
      this.character.setVelocityY(-235);
      this.character.setVelocityX(-200);
      this.characterFacingRight = false;
    }

    // Controlling right in mid-air
    else if (this.cursors.right.isDown && !this.character.body.onFloor()) {
      this.character.anims.play("jump", true);
      this.character.setVelocityX(200);
      this.characterFacingRight = true;
    }

    // Controlling left in mid-air
    else if (this.cursors.left.isDown && !this.character.body.onFloor()) {
      this.character.anims.play("jumpBackFacing", true);
      this.character.setVelocityX(-200);
      this.characterFacingRight = false;
    }

    //Moving right on ground
    else if (this.cursors.right.isDown && this.character.body.onFloor()) {
      this.character.anims.play("right", true);
      this.character.setVelocityX(275);
      this.characterFacingRight = true;

      //Moving left on ground
    } else if (this.cursors.left.isDown && this.character.body.onFloor()) {
      this.character.anims.play("left", true);
      this.character.setVelocityX(-275);
      this.characterFacingRight = false;
    }

    //Resetting animation on idle
    else if (this.character.body.onFloor()) {
      this.character.setVelocityX(0);
      this.characterFacingRight
        ? this.character.anims.play("idle", true)
        : this.character.anims.play("idleBackFacing", true);
    }

    //Update score based on heighest point reached, increasing every 500
    if (this.character.y < this.scoreHeight - 500) {
      this.scoreHeight -= 500;
      this.scene.hud.score += this.scene.hud.scoreMultiplier ? 200 : 100;
      this.scene.hud.scoreText.setText(`Score:${this.scene.hud.score}`);
      this.getPoints.play();
    }
  }
}
