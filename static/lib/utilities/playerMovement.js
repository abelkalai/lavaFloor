let playerMovement = function() {
  let cursors = this.input.keyboard.createCursorKeys();

  //Jumping while idle
  if (cursors.up.isDown && this.player.body.touching.down) {
    this.player.setVelocityY(-225);
    this.player.anims.play("jump", true);
  }
  // Controlling right in mid-air
  else if (cursors.right.isDown && !this.player.body.touching.down) {
    this.player.setVelocityX(250);
    this.player.anims.play("jump", true);
    this.playerStanding = true;
  }
  // Controlling left in mid-air
  else if (cursors.left.isDown && !this.player.body.touching.down) {
    this.player.setVelocityX(-225);
    this.player.anims.play("jump_b", true);
    this.playerStanding = false;
  }
  // Holding arrow keys while jumping right
  else if (
    cursors.up.isDown &&
    cursors.right.isDown &&
    this.player.body.touching.down
  ) {
    this.player.setVelocityY(-225);
    this.player.setVelocityX(250);
    this.player.anims.play("jump", true);
    this.playerStanding = true;

    // Holding arrow keys while jumping left
  } else if (
    cursors.up.isDown &&
    cursors.left.isDown &&
    this.player.body.touching.down
  ) {
    this.player.setVelocityY(-225);
    this.player.setVelocityX(-225);
    this.player.anims.play("jump_b", true);
    this.playerStanding = false;
  } else if (cursors.right.isDown && this.player.body.touching.down) {
    this.player.setVelocityX(250);
    this.player.anims.play("right", true);
    this.playerStanding = true;
  } else if (cursors.left.isDown && this.player.body.touching.down) {
    this.player.setVelocityX(-225);
    this.player.anims.play("left", true);
    this.playerStanding = false;
  }
  //Resetting animation on idle
  else if (this.player.body.touching.down) {
    this.player.setVelocityX(0);
    this.playerStanding
      ? this.player.anims.play("idle", true)
      : this.player.anims.play("idle_b", true);
  }
};

export default playerMovement;
