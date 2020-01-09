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
  this.load.spritesheet("player", "static/assets/sprites/spritesheet.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  this.load.spritesheet("walk", "static/assets/sprites/walk.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  this.load.spritesheet("jump", "static/assets/sprites/jump.png", {
    frameWidth: 80,
    frameHeight: 110
  });
}

function create() {
  this.add.image(400, 300, "background");
  const platforms = this.physics.add.staticGroup();
  platforms.create(35, 550, "ground");

  player = this.physics.add.sprite(100, 450, "player");

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("walk", { start: 0, end: 1 }),
    frameRepeat: 5,
    repeat: -1
  });

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("walk", { start: 1, end: 0 }),
    frameRepeat: 5,
    repeat: -1
  });

  this.anims.create({
    key: "idle",
    frames: [{ key: "player", frame: 22 }]
  });

  this.anims.create({
    key: "jump",
    frames: [{ key: "jump", frame: 0 }],
    frameRepeat: 1,
    repeat: -1
  });

  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);
}

function update() {
  cursors = this.input.keyboard.createCursorKeys();
  if (cursors.right.isDown && player.body.touching.down) {
    player.setVelocityX(200);
    player.anims.play("right", true);
  } else if (cursors.left.isDown && player.body.touching.down) {
    player.setVelocityX(200);
    player.anims.play("left", true);
  } else if ((cursors.up.isDown && player.body.touching.down)) {
    player.setVelocityY(-300);
    player.anims.play("jump", true);
  } else if (player.body.touching.down){
    player.setVelocityX(0);
    player.anims.play("idle", true);
  }
}
