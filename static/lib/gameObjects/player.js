export default class Player {
  constructor(scene) {
    this.scene = scene;
    this.hurtAgain;
    this.playerStanding = true;
    this.characterFacingRight = true;
    this.enemyCollide = true;
    this.yMax = 0;
    this.scoreHeight = 500;
    this.deathSound=this.scene.sound.add("deathSound")
    this.render();
    this.animate();
    
  }

  render() {
    //Adds player character to the scene
    this.character = this.scene.physics.add.sprite(400, 457, "character");
    this.character.setCollideWorldBounds(true);
    this.character.setDepth(5);
    this.scene.physics.add.collider(
      this.character,
      this.scene.boundaries.platforms
    );
    this.yStart = this.character.y;
    this.getPoints = this.scene.sound.add("scoreIncrease");
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
      frames: this.scene.anims.generateFrameNumbers("walk_b", {
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
      key: "idle_b",
      frames: [{ key: "character_b", frame: 0 }]
    });

    this.scene.anims.create({
      key: "jump",
      frames: [{ key: "jump", frame: 0 }],
      repeat: -1,
      frameRate: 20
    });

    this.scene.anims.create({
      key: "jump_b",
      frames: [{ key: "jump_b", frame: 0 }],
      repeat: -1,
      frameRate: 20
    });
  }

  update() {
    this.yMax = Math.max(this.yMax, Math.abs(this.character.y - this.yStart));
    let cursors = this.scene.input.keyboard.createCursorKeys();
    
    //Handle jumping
    if (this.character.body.onFloor() && cursors.up.isDown) {
      this.characterFacingRight
        ? this.character.anims.play("jump", true)
        : this.character.anims.play("jump_b", true);
      this.character.setVelocityY(-235);
    }

    // Holding arrow keys while jumping right
    else if (
      cursors.right.isDown &&
      this.character.body.onFloor() &&
      cursors.up.isDown
    ) {
      this.character.anims.play("jump", true);
      this.character.setVelocityY(-235);
      this.character.setVelocityX(200);
      this.characterFacingRight = true;
    }

    // Holding arrow keys while jumping left
    else if (
      cursors.left.isDown &&
      this.character.body.onFloor() &&
      cursors.up.isDown
    ) {
      this.character.anims.play("jump_b", true);
      this.character.setVelocityY(-235);
      this.character.setVelocityX(-200);
      this.characterFacingRight = false;
    }

    // Controlling right in mid-air
    else if (cursors.right.isDown && !this.character.body.onFloor()) {
      this.character.anims.play("jump", true);
      this.character.setVelocityX(200);
      this.characterFacingRight = true;
    }

    // Controlling left in mid-air
    else if (cursors.left.isDown && !this.character.body.onFloor()) {
      this.character.anims.play("jump_b", true);
      this.character.setVelocityX(-200);
      this.characterFacingRight = false;
    }

    //Moving right on ground
    else if (cursors.right.isDown && this.character.body.onFloor()) {
      this.character.anims.play("right", true);
      this.character.setVelocityX(275);
      this.characterFacingRight = true;

      //Moving left on ground
    } else if (cursors.left.isDown && this.character.body.onFloor()) {
      this.character.anims.play("left", true);
      this.character.setVelocityX(-275);
      this.characterFacingRight = false;
    }

    //Resetting animation on idle
    else if (this.character.body.onFloor()) {
      this.character.setVelocityX(0);
      this.characterFacingRight
        ? this.character.anims.play("idle", true)
        : this.character.anims.play("idle_b", true);
    }

    //Update score based on heighest point reached, increasing every 500
    if (this.character.y < this.scoreHeight - 500) {
      this.scoreHeight -= 500;
      this.scene.hud.overlay.score += this.scene.hud.overlay.scoreMultiplier
        ? 200
        : 100;
      this.scene.hud.overlay.scoreText.setText(
        `Score:${this.scene.hud.overlay.score}`
      );
      this.getPoints.play();
    }

    //Adjusts background based on player height
    if (this.character.y < 0) {
      if (this.character.y < -2500 && this.character.y > -4500)
        this.scene.cameras.main.setBackgroundColor(0x9fe1f9);
      else if (this.character.y < -4500 && this.character.y > -5500)
        this.scene.cameras.main.setBackgroundColor(0x6ed2f7);
      else if (this.character.y < -5500 && this.character.y > -6500)
        this.scene.cameras.main.setBackgroundColor(0x3ec3f4);
      else if (this.character.y < -6500 && this.character.y > -7500)
        this.scene.cameras.main.setBackgroundColor(0x0eb4f1);
      else if (this.character.y < -7500 && this.character.y > -8500)
        this.scene.cameras.main.setBackgroundColor(0x0b90c1);
      //Clouds
      else if (this.character.y < -8500 && this.character.y > -9500)
        this.scene.cameras.main.setBackgroundColor(0x086c91);
      else if (this.character.y < -9500 && this.character.y > -10500)
        this.scene.cameras.main.setBackgroundColor(0x064860);
      //Stars
      else if (this.character.y < -10500 && this.character.y > -11500)
        this.scene.cameras.main.setBackgroundColor(0x032430);
      else if (this.character.y < -11500)
        this.scene.cameras.main.setBackgroundColor(0x000000);
    }
  }
}
