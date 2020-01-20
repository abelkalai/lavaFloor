const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
});

function preload() {
  this.load.image("background", "static/assets/env/background.png");
  this.load.image("ground", "static/assets/env/grassMid.png");
  this.load.image("platform", "static/assets/env/grass.png");

  this.load.spritesheet("player", "static/assets/sprites/stand.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  this.load.spritesheet("player_b", "static/assets/sprites/stand_b.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  this.load.spritesheet("walk", "static/assets/sprites/walk.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  this.load.spritesheet("walk_b", "static/assets/sprites/walk_b.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  this.load.spritesheet("jump", "static/assets/sprites/jump.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  this.load.spritesheet("jump_b", "static/assets/sprites/jump_b.png", {
    frameWidth: 80,
    frameHeight: 110
  });
}

function create() {
  this.add.image(400, 300, "background");
  const platforms = this.physics.add.staticGroup();
  //Ground
  platforms.create(35, 550, "ground");

  //Platforms
  platforms.create(650, 450, "platform");
  platforms.create(175, 375, "platform");
  platforms.create(650, 275, "platform");

  player = this.physics.add.sprite(100, 450, "player");

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("walk", { start: 0, end: 1 }),
    frameRepeat: 5,
    repeat: -1
  });

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("walk_b", { start: 0, end: 1 }),
    frameRepeat: 5,
    repeat: -1
  });

  this.anims.create({
    key: "idle",
    frames: [{ key: "player", frame: 0 }]
  });
  this.anims.create({
    key: "idle_b",
    frames: [{ key: "player_b", frame: 0 }]
  });
  this.anims.create({
    key: "jump",
    frames: [{ key: "jump", frame: 0 }],
    frameRepeat: 1,
    repeat: -1
  });

  this.anims.create({
    key: "jump_b",
    frames: [{ key: "jump_b", frame: 0 }],
    frameRepeat: 1,
    repeat: -1
  });

  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);
}

let stand=true;

function update() {
  cursors = this.input.keyboard.createCursorKeys();
    //Jumping while idle
    if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-225);
    player.anims.play("jump", true);
    }
    // Controlling right in mid-air
    else if (cursors.right.isDown && !player.body.touching.down) {
      player.setVelocityX(250);
      player.anims.play("jump", true);
      stand=true
    }
    // Controlling left in mid-air
    else if (cursors.left.isDown && !player.body.touching.down) {
      player.setVelocityX(-225);
      player.anims.play("jump_b", true);
      stand=false
    }
    // Holding arrow keys while jumping right
    else if (cursors.up.isDown && cursors.right.isDown && player.body.touching.down) {
    player.setVelocityY(-225);
    player.setVelocityX(250);
    player.anims.play("jump", true);
    stand=true

    // Holding arrow keys while jumping left
  } else if (cursors.up.isDown && cursors.left.isDown && player.body.touching.down) {
    player.setVelocityY(-225);
    player.setVelocityX(-225);
    player.anims.play("jump_b", true);
    stand=false
  }
    else if (cursors.right.isDown && player.body.touching.down) {
    player.setVelocityX(250);
    player.anims.play("right", true);
    stand=true

  } else if (cursors.left.isDown && player.body.touching.down) {
    player.setVelocityX(-225);
    player.anims.play("left", true);
    stand=false
  }
    //Resetting animation on idle 
    else if (player.body.touching.down) {
    player.setVelocityX(0);
    stand ? player.anims.play("idle", true) : player.anims.play("idle_b", true)
  }
 
}
