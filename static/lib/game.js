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

  // Health 
  this.load.image("heart_3", "static/assets/sprites/heart_3.png");
  this.load.image("heart_2", "static/assets/sprites/heart_2.png");
  this.load.image("heart_1", "static/assets/sprites/heart_1.png");
  this.load.image("heart_0", "static/assets/sprites/heart_0.png");


  // Coin
  this.load.spritesheet("coin", "static/assets/sprites/Gold_21.png",{
    frameWidth: 563,
    frameHeight: 564
  })

  // Ground Emnemy
  this.load.spritesheet("enemy", "static/assets/sprites/enemy_1.png",{
    frameWidth: 365,
    frameHeight: 365
  })

  // Player
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
  this.load.spritesheet("hurt", "static/assets/sprites/hurt.png", {
    frameWidth: 80,
    frameHeight: 110
  });
}

function create() {
  // Background
  this.add.image(400, 300, "background");

  const platforms = this.physics.add.staticGroup();

  // Score
  let score=0
  let scoreText=this.add.text(20,20,`Score:${score}`, {fontSize: '32px', fill: '#000'})

  // Health 
  let health=3
  let heart_key=["heart_0","heart_1","heart_2","heart_3"]
  let healthText=this.add.text(20,50, 'Health: ',{fontSize: '32px', fill: '#000'})
  this.add.image(198,66,heart_key[health])

  // Ground
  platforms.create(35, 550, "ground");

  // Platforms
  platforms.create(650, 450, "platform");
  platforms.create(175, 375, "platform");
  platforms.create(670, 260, "platform");

  // Add Coin
  coin= this.physics.add.sprite(200,300,"coin")
  coin.setScale(0.065)
  coin.setCollideWorldBounds(true);
  this.physics.add.collider(coin, platforms);

  // Enemey
  groundEnemey=this.physics.add.sprite(600,418,"enemy")
  groundEnemey.setScale(0.085)
  groundEnemey.setCollideWorldBounds(true);
  this.physics.add.collider(groundEnemey,platforms);

  // walking animation
  this.anims.create({
    key: "e_walk",
    frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 1 }),
    frameRepeat: 0.005,
    repeat: -1
  });

  groundEnemey.anims.play("e_walk", true);

  // Player
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

  this.anims.create({
    key: "hurt",
    frames: [{ key: "hurt", frame: 0 }],
    frameRepeat: 1,
  });

  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);

  // Collision with the coin
  this.physics.add.overlap(player, coin, getCoin, null, this);

  function getCoin(player,coin){
    coin.disableBody(true,true)
    score+=10
    scoreText.setText(`Score:${score}`);
  }

  let enemyCollide=true;

  // Collision with the enemy sprite
  this.physics.add.overlap(player, groundEnemey,hurtPlayer, ()=>{return enemyCollide}, this);

  function hurtPlayer(){
    health-=1
    //player.play.anims("hurt",true)
    //player.anims.play("right", true);
    this.add.image(198,66,heart_key[health])
    enemyCollide=false;
    setTimeout(()=>{enemyCollide=true},1000)
  }

}

let stand=true;

function update() {

  // Ground Enemy Handles
  //setTimeout(groundEnemey.setVelocityX(100),3000)

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
