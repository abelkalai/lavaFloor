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

  // Heart to Pick Up
  this.load.spritesheet("heart", "static/assets/sprites/heart_world.png", {
    frameWidth: 50,
    frameHeight: 20
  });

  // Coin
  this.load.spritesheet("coin", "static/assets/sprites/Gold_21.png", {
    frameWidth: 563,
    frameHeight: 564
  });

  // Ground Emnemy
  this.load.spritesheet("enemy", "static/assets/sprites/enemy_1.png", {
    frameWidth: 350,
    frameHeight: 365
  });

  // Ground Enemey 2
  this.load.spritesheet("enemy2", "static/assets/sprites/enemy_2.png", {
    frameWidth: 580,
    frameHeight: 650
  });

  // Invincibility Potion
  this.load.spritesheet(
    "potion",
    "static/assets/sprites/invincibilityPotion.png",
    {
      frameWidth: 125,
      frameHeight: 125
    }
  );

  // Score Multiplier Potion
  this.load.spritesheet(
    "potionMultiplier",
    "static/assets/sprites/multiplierPotion.png",
    {
      frameWidth: 125,
      frameHeight: 125
    }
  );

  // Player
  this.load.spritesheet("player", "static/assets/sprites/stand.png", {
    frameWidth: 67,
    frameHeight: 110
  });
  this.load.spritesheet("player_b", "static/assets/sprites/stand_b.png", {
    frameWidth: 67,
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

  // Pause Button
  this.load.image("pauseImage","static/assets/env/pause.png")

  // In Game Sounds
  this.load.audio("collectCoin", "static/assets/sounds/coinCollect.mp3");
  this.load.audio("collectHeart", "static/assets/sounds/getHeart.mp3");
  this.load.audio(
    "coinMultiplierCollect",
    "static/assets/sounds/coinMultiplierCollect.mp3"
  );
  this.load.audio(
    "multiplierPotion",
    "static/assets/sounds/multiplierPotion.mp3"
  );
  this.load.audio("collideEnemy",
  "static/assets/sounds/collideEnemy.mp3")

  // Background Music
  this.load.audio("backgroundMusic", "static/assets/music/backgroundMusic.wav");
  this.load.audio("invincibleMusic","static/assets/music/invincibleMusic.wav")

}

let sound = "ON";

function create() {
  // Background
  this.add.image(400, 300, "background");

  // Score
  let score = 0;
  let scoreText = this.add.text(20, 20, `Score:${score}`, {
    fontSize: "32px",
    fill: "#000"
  });

  // Health
  let health = 3;
  let heart_key = ["heart_0", "heart_1", "heart_2", "heart_3"];
  let healthText = this.add.text(20, 50, "Health: ", {
    fontSize: "32px",
    fill: "#000"
  });
  let healthImage = this.add.image(198, 66, heart_key[health]);

  // Sound Toggle
  soundText = this.add.text(620, 20, `Sound:${sound}`, {
    fontSize: "32px",
    fill: "#000"
  });
  
  // Platforms
  const platforms = this.physics.add.staticGroup();

  // Ground
  platforms.create(35, 550, "ground");

  // Platforms
  platforms.create(650, 450, "platform");
  platforms.create(175, 375, "platform");
  platforms.create(0, 300, "platform");
  platforms.create(-100, 225, "platform");
  platforms.create(350, 160 , "platform");

  // Add Heart Pickup
  heart = this.physics.add.sprite(100, 250, "heart");
  heart.setCollideWorldBounds(true);
  this.physics.add.collider(heart, platforms);

  //Add Invincibility Potion Pickup
  potion = this.physics.add.sprite(310, 300, "potion");
  potion.setScale(0.4);
  potion.setCollideWorldBounds(true);
  this.physics.add.collider(potion, platforms);

  //Add Score Multiplier Potion
  potionMultiplier = this.physics.add.sprite(450, 400, "potionMultiplier");
  potionMultiplier.setScale(0.4);
  potionMultiplier.setCollideWorldBounds(true);
  this.physics.add.collider(potionMultiplier, platforms);

  // Add Coin
  coin = this.physics.add.sprite(200, 300, "coin");
  coin.setScale(0.065);
  coin.setCollideWorldBounds(true);
  this.physics.add.collider(coin, platforms);

  // Sound Effects
  coinSound = this.sound.add("collectCoin");
  heartSound = this.sound.add("collectHeart");
  coinMultiplierCollect = this.sound.add("coinMultiplierCollect");
  multiplierSound = this.sound.add("multiplierPotion");
  collideEnemySound= this.sound.add("collideEnemy")

  // Background Music
  backgroundMusic = this.sound.add("backgroundMusic", { volume: 0.25 });
  backgroundMusic.loop = true;
  backgroundMusic.play(); 

  // Invincible Music
  invincibleMusic= this.sound.add("invincibleMusic", {volume: 0.25})
  invincibleMusic.loop=true

  // Invincible boolean variable, initially false
  playInvincible=false 

  // Walking animation for small enemy
  this.anims.create({
    key: "e_walk",
    frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 1 }),
    frameRepeat: .1,
    repeat: -1,
    frameRate: 10
  });

  // Enemy
  groundEnemy = this.physics.add.sprite(600, 418, "enemy");
  groundEnemy.setScale(0.085);
  groundEnemy.setCollideWorldBounds(true);
  this.physics.add.collider(groundEnemy, platforms);
  groundEnemy.anims.play("e_walk", true); //Enemy walking animation

  //Enemy2 walking animation
  this.anims.create({
    key: "e_walk2",
    frames: this.anims.generateFrameNumbers("enemy2", { start: 0, end: 1 }),
    frameRepeat: .1,
    frameRate: 10,
    repeat: -1
  });

  // Enemy 2
  groundEnemy2= this.physics.add.sprite(300,50,"enemy2")
  groundEnemy2.setScale(.065)
  groundEnemy2.setCollideWorldBounds(true);
  this.physics.add.collider(groundEnemy2, platforms);
  groundEnemy2.anims.play("e_walk2", true); //Enemy walking animation

  // Player
  player = this.physics.add.sprite(100, 450, "player");
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("walk", { start: 0, end: 1 }),
    frameRepeat: 5,
    repeat: -1,
    frameRate: 20
  });

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("walk_b", { start: 0, end: 1 }),
    frameRepeat: 5,
    repeat: -1,
    frameRate: 20
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
    repeat: -1,
    frameRate: 20
  });

  this.anims.create({
    key: "jump_b",
    frames: [{ key: "jump_b", frame: 0 }],
    frameRepeat: 1,
    repeat: -1,
    frameRate: 20
  });


  // Collision with the coin
  this.physics.add.overlap(player, coin, getCoin, null, this);

  scoreMultiplier = false; //If true, get double points

  function getCoin(player, coin) {
    scoreMultiplier ? coinMultiplierCollect.play() : coinSound.play();
    coin.disableBody(true, true);
    score += scoreMultiplier ? 20 : 10;
    scoreText.setText(`Score:${score}`);
  }

  let enemyCollide = true;

  // Collision with the enemy_1 sprite
  this.physics.add.overlap(
    player,
    groundEnemy,
    hurtPlayer,
    () => {
      return enemyCollide;
    },
    this
  );

  //Collide with enemy 2
  this.physics.add.overlap(
    player,
    groundEnemy2,
    hurtPlayer,
    () => {
      return enemyCollide;
    },
    this
  );

  function hurtPlayer() {
    if (health !== 0) health -= 1;
    if (health !== 0) healthImage.destroy();
    healthImage = this.add.image(198, 66, heart_key[health]);
    enemyCollide = false;
    collideEnemySound.play()
    flipper=true

    hurt=setInterval(()=>{player.tint=(flipper) ? 0xFF0000:0xffffff, flipper=!flipper}, 100)
    setTimeout(()=>{clearInterval(hurt)},500)
    setTimeout(() => {
      enemyCollide = true;
      player.tint= 0xffffff
    }, 750);
  }

  // Collision with potion
  this.physics.add.overlap(player, potion, getPotion, null, this);

  function getPotion() {
    enemyCollide = false;
    potion.disableBody(true, true);

    invincible=setInterval(() => {player.tint = Math.random() * 0xffffff}, 100);
    backgroundMusic.pause()
    invincibleMusic.play()
    setTimeout(() => {
      enemyCollide = true;
      clearInterval(invincible)
      player.tint= 0xffffff
      invincibleMusic.pause()
      backgroundMusic.resume()
    }, 7500);
  }

  // Collision with heart pickup
  this.physics.add.overlap(player, heart, getHeart, null, this);

  function getHeart() {
    if (health <= 2) {
      health++;
      heartSound.play();
      healthImage.destroy();
      heart.disableBody(true, true);
      healthImage = this.add.image(198, 66, heart_key[health]);
    }
  }

  // Collision with score multiplier pickup
  this.physics.add.overlap(player, potionMultiplier, getMultiplier, null, this);

  function getMultiplier() {
    multiplierSound.play();
    potionMultiplier.disableBody(true, true);
    let multiplierText = this.add.text(500, 60, "Score Multiplier Active!", {
      fontSize: "20px",
      fill: "#000"
    });
    scoreMultiplier = true;
    setTimeout(() => {
      multiplierText.destroy(), (scoreMultiplier = false);
    }, 10000);
  }

    // Pause
    pauseImage=this.add.image(400,300,"pauseImage")
    pauseImage.visible=false
}

// Stand is a global var, change later
let stand = true;

let toggle = true;

let togglePause=true
let pauseAbsent=true

function update() {
  // Ground Enemy Handles
  //setTimeout(groundEnemy.setVelocityX(100),3000)

  cursors = this.input.keyboard.createCursorKeys();

  // Space bar (change this to pause later)
  //spaceBar = this.input.keyboard;

  // Player can turn sound off with "o" key
  oKey = this.input.keyboard.addKey("O");
  if (oKey.isDown && toggle) {
    console.log(toggle)
    sound = sound === "ON" ? "OFF" : "ON";
    this.sound.mute = sound === "OFF" ? true : false;
    soundText.setText(`Sound:${sound}`);
    toggle = false;
    setTimeout(() => {
      toggle = true;
    }, 200);
  }

  // Pause button feature

  pKey=this.input.keyboard.addKey("P")
  
  if (pKey.isDown && togglePause) {
    
    pauseAbsent=!pauseAbsent
    pauseImage.visible= pauseAbsent==false ? true: false //Implement pause later using scenes
    
    togglePause = false;

    setTimeout(() => {
      togglePause = true;
    }, 200);
  }


  //Jumping while idle
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-225);
    player.anims.play("jump", true);
  }
  // Controlling right in mid-air
  else if (cursors.right.isDown && !player.body.touching.down) {
    player.setVelocityX(250);
    player.anims.play("jump", true);
    stand = true;
  }
  // Controlling left in mid-air
  else if (cursors.left.isDown && !player.body.touching.down) {
    player.setVelocityX(-225);
    player.anims.play("jump_b", true);
    stand = false;
  }
  // Holding arrow keys while jumping right
  else if (
    cursors.up.isDown &&
    cursors.right.isDown &&
    player.body.touching.down
  ) {
    player.setVelocityY(-225);
    player.setVelocityX(250);
    player.anims.play("jump", true);
    stand = true;

    // Holding arrow keys while jumping left
  } else if (
    cursors.up.isDown &&
    cursors.left.isDown &&
    player.body.touching.down
  ) {
    player.setVelocityY(-225);
    player.setVelocityX(-225);
    player.anims.play("jump_b", true);
    stand = false;
  } else if (cursors.right.isDown && player.body.touching.down) {
    player.setVelocityX(250);
    player.anims.play("right", true);
    stand = true;
  } else if (cursors.left.isDown && player.body.touching.down) {
    player.setVelocityX(-225);
    player.anims.play("left", true);
    stand = false;
  }
  //Resetting animation on idle
  else if (player.body.touching.down) {
    player.setVelocityX(0);
    stand ? player.anims.play("idle", true) : player.anims.play("idle_b", true);
  }
}
