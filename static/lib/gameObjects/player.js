export default class Player {
  constructor(scene) {
    this.scene = scene;
    this.hurtAgain;
    this.playerStanding = true;
    this.characterFacingRight = true;
    this.enemyCollide = true;
    this.yMax=0
    this.render();
    this.animate();
  }

  render() {
    //Adds player character to the scene
    this.character = this.scene.physics.add.sprite(100, 448, "character");
    this.character.setCollideWorldBounds(true);
    this.scene.physics.add.collider(
      this.character,
      this.scene.boundaries.platforms
    );
    this.yStart=this.character.y
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
    this.yMax = Math.max(this.yMax, Math.abs( this.character.y - this.yStart ) )
    let cursors = this.scene.input.keyboard.createCursorKeys();

    //Handle jumping
    cursors.up.onDown = () => {
      if (this.character.body.touching.down) {
        this.character.setVelocityY(-225);
        this.character.anims.play("jump", true);
      }
      // Holding arrow keys while jumping right
      else if (cursors.right.isDown && this.character.body.touching.down) {
        this.character.setVelocityY(-225);
        this.character.setVelocityX(250);
        this.character.anims.play("jump", true);
        this.characterFacingRight = true;

        // Holding arrow keys while jumping left
      } else if (cursors.left.isDown && this.character.body.touching.down) {
        this.character.setVelocityY(-225);
        this.character.setVelocityX(-225);
        this.character.anims.play("jump_b", true);
        this.characterFacingRight = false;
      }
    };
    
    // Controlling right in mid-air
    if (cursors.right.isDown && !this.character.body.touching.down) {
      this.character.setVelocityX(250);
      this.character.anims.play("jump", true);
      this.characterFacingRight = true;
    }
    // Controlling left in mid-air
    else if (cursors.left.isDown && !this.character.body.touching.down) {
      this.character.setVelocityX(-225);
      this.character.anims.play("jump_b", true);
      this.characterFacingRight = false;
    }

    //Moving right on ground
    else if (cursors.right.isDown && this.character.body.touching.down) {
      this.character.setVelocityX(250);
      this.character.anims.play("right", true);
      this.characterFacingRight = true;

      //Moving left on ground
    } else if (cursors.left.isDown && this.character.body.touching.down) {
      this.character.setVelocityX(-225);
      this.character.anims.play("left", true);
      this.characterFacingRight = false;
    }
    //Resetting animation on idle
    else if (this.character.body.touching.down) {
      this.character.setVelocityX(0);
      this.characterFacingRight
        ? this.character.anims.play("idle", true)
        : this.character.anims.play("idle_b", true);
    }
  }
}
