import preloadAssets from "/static/lib/preloadAssets.js"
import overlay from "/static/lib/gameObjects/overlay.js"
export default class Main extends Phaser.Scene{

    constructor(){
      super()
    }

    player;
    pauseImage;
    playerStanding = true;
    
    soundToggle = true;
    
    togglePause = true;
    pauseAbsent = true;
    soundText;
    soundContent = "ON";
    isInvincible
    hurtAgain
  
    preload(){
      preloadAssets(this)
    }
    
    create() {
      //Background
      this.add.image(400,300,"background")
      
      // Platforms
      this.platforms = this.physics.add.staticGroup();
    
      // Ground
      this.platforms.create(35, 550, "ground");
    
      // Platforms
      this.platforms.create(650, 450, "platform");
      this.platforms.create(175, 375, "platform");
      this.platforms.create(0, 300, "platform");
      this.platforms.create(-100, 225, "platform");
      this.platforms.create(350, 160, "platform");
    
      // Lava
      this.add.sprite(500, 700, "lava");
    
      // Add Heart Pickup
      this.heart = this.physics.add.sprite(100, 250, "heart");
      this.heart.setCollideWorldBounds(true);
      this.physics.add.collider(this.heart, this.platforms);
    
      //Add Invincibility Potion Pickup
      this.potion = this.physics.add.sprite(310, 300, "potion");
      this.potion.setScale(0.4);
      this.potion.setCollideWorldBounds(true);
      this.physics.add.collider(this.potion, this.platforms);
    
      //Add Score Multiplier Potion
      this.potionMultiplier = this.physics.add.sprite(450, 400, "potionMultiplier");
      this.potionMultiplier.setScale(0.4);
      this.potionMultiplier.setCollideWorldBounds(true);
      this.physics.add.collider(this.potionMultiplier, this.platforms);
    
      // Add Coin
      this.coin = this.physics.add.sprite(200, 300, "coin");
      this.coin.setScale(0.065);
      this.coin.setCollideWorldBounds(true);
      this.physics.add.collider(this.coin, this.platforms);
    
      // Sound Effects
      this.coinSound = this.sound.add("collectCoin");
      this.heartSound = this.sound.add("collectHeart");
      this.coinMultiplierCollect = this.sound.add("coinMultiplierCollect");
      this.multiplierSound = this.sound.add("multiplierPotion");
      this.collideEnemySound = this.sound.add("collideEnemy");
    
      // Background Music
      this.backgroundMusic = this.sound.add("backgroundMusic", { volume: 0.25 });
      this.backgroundMusic.loop = true;
      this.backgroundMusic.play();
    
      // Invincible Music
      this.invincibleMusic = this.sound.add("invincibleMusic", { volume: 0.25 });
      this.invincibleMusic.loop = true;
    
      // Invincible boolean variable, initially false
      this.playInvincible = false;
    
      // Walking animation for small enemy
      this.anims.create({
        key: "e_walk",
        frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 1 }),
        frameRepeat: 0.1,
        repeat: -1,
        frameRate: 5
      });
    
      this.anims.create({
        key: "e_walkb",
        frames: this.anims.generateFrameNumbers("enemyb", { start: 0, end: 1 }),
        frameRepeat: 0.1,
        repeat: -1,
        frameRate: 5
      });
    
      // Enemy
      this.groundEnemy = this.physics.add.sprite(600, 418, "enemy");
      this.groundEnemy.setScale(0.085);
      this.groundEnemy.setCollideWorldBounds(true);
      this.physics.add.collider(this.groundEnemy, this.platforms);
      this.groundEnemy.anims.play("e_walk", true); //Enemy walking animation
      this.groundEnemy.setVelocityX(-40);
    
      //Enemy2 walking animation
      this.anims.create({
        key: "e_walk2",
        frames: this.anims.generateFrameNumbers("enemy2", { start: 0, end: 1 }),
        frameRepeat: 0.1,
        frameRate: 5,
        repeat: -1
      });
    
      this.anims.create({
        key: "e_walk2b",
        frames: this.anims.generateFrameNumbers("enemy2b", { start: 0, end: 1 }),
        frameRepeat: 0.1,
        frameRate: 5,
        repeat: -1
      });
    
      // Enemy 2
      this.groundEnemy2 = this.physics.add.sprite(290, 120, "enemy2");
      this. groundEnemy2.setScale(0.065);
      this.groundEnemy2.setCollideWorldBounds(true);
      this.physics.add.collider(this.groundEnemy2, this.platforms);
      this.groundEnemy2.anims.play("e_walk2", true); //Enemy walking animation
      this.groundEnemy2.setVelocityX(80);
    
      // Invisible Wall
      this.walls = this.physics.add.staticGroup();
      this.walls.create(490.5, 387.5, "wall"); //Lower Level
      this.walls.create(810, 387.5, "wall"); //Lower Level
      this.walls.create(509.5, 97.5, "wall"); //Higher Level
      this.walls.create(187.5, 97.5, "wall"); //Higher Level
      this.physics.collide(this.platforms, this.walls);
      this.walls.setVisible(false);
    
      // Player
      this.player = this.physics.add.sprite(100, 450, "player");
      this.player.setCollideWorldBounds(true);
      this.physics.add.collider(this.player, this.platforms);
    
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
    
      // Score
      this.score = 0;
      this.scoreText = this.add.text(20, 20, `Score:${this.score}`, {
        fontSize: "32px",
        fill: "#000"
      });
    
      // Health
      this.health = 3;
      this.heart_key = ["heart_0", "heart_1", "heart_2", "heart_3"];
      this.healthText = this.add.text(20, 50, "Health: ", {
        fontSize: "32px",
        fill: "#000"
      });
      this.healthImage = this.add.image(198, 66, this.heart_key[this.health]);
      
      
      // Sound Toggle
      this.soundText = this.add.text(620, 20, `Sound:${this.soundContent}`, {
        fontSize: "32px",
        fill: "#000"
      });
    
      // Collision with the coin
      this.physics.add.overlap(this.player, this.coin, getCoin, null, this);
    
      this.scoreMultiplier = false; //If true, get double points
    
      function getCoin(player, coin) {
        this.scoreMultiplier ? this.coinMultiplierCollect.play() : this.coinSound.play();
        coin.disableBody(true, true);
        this.score += this.scoreMultiplier ? 20 : 10;
        this.scoreText.setText(`Score:${this.score}`);
      }
    
      this.enemyCollide = true;
    
      // Collision with the enemy_1 sprite
      this.physics.add.overlap(
        this.player,
        this.groundEnemy,
        hurtPlayer,
        () => {
          return this.enemyCollide;
        },
        this
      );
    
      //Collide with enemy 2
      this.physics.add.overlap(
        this.player,
        this.groundEnemy2,
        hurtPlayer,
        () => {
          return this.enemyCollide;
        },
        this
      );
        
      function hurtPlayer() {
        if (this.health !== 0) this.health -= 1;
        if (this.health !== 0) this.healthImage.destroy();
        this.healthImage = this.add.image(198, 66, this.heart_key[this.health]);
        this.enemyCollide = false;
        this.collideEnemySound.play();
    
        let hurt = setInterval(() => {
          (this.player.tint = this.hurtAgain ? 0xff0000 : 0xffffff), (this.hurtAgain = !this.flipper);
        }, 100);
        setTimeout(() => {
          clearInterval(hurt);
        }, 500);
        setTimeout(() => {
          this.enemyCollide = true;
          this.player.tint = 0xffffff;
        }, 750);
      }
    
      this.g1Anim = ["e_walkb", "e_walk"];
      this.g2Anim = ["e_walk2", "e_walk2b"];
      // Enemy collides with wall
      this.physics.add.overlap(this.groundEnemy, this.walls, enemyWall, null, {
        this: this,
        anim: this.g1Anim
      });
      this.physics.add.overlap(this.groundEnemy2, this.walls, enemyWall, null, {
        this: this,
        anim: this.g2Anim
      });
    
      function enemyWall(enemy, anim) {
        enemy.setVelocityX(enemy.body.velocity.x * -1);
        enemy.anims.play(
          enemy.body.velocity.x > 0 ? this.anim[0] : this.anim[1],
          true
        ); //Enemy walking animation
      }
    
      // Collision with potion
      this.physics.add.overlap(this.player, this.potion, getPotion, null, this);
    
      function getPotion(player,potion) {
        this.enemyCollide = false;
        potion.disableBody(true, true);
    
        this.isInvincible = setInterval(() => {
          player.tint = Math.random() * 0xffffff;
        }, 100);
        this.backgroundMusic.pause();
        this.invincibleMusic.play();
        setTimeout(() => {
          this.enemyCollide = true;
          clearInterval(this.isInvincible);
          player.tint = 0xffffff;
          this.invincibleMusic.pause();
          this.backgroundMusic.resume();
        }, 7500);
      }
    
      // Collision with heart pickup
      this.physics.add.overlap(this.player, this.heart, getHeart, null, this);
    
      function getHeart() {
        if (this.health <= 2) {
          this.health++;
          this.heartSound.play();
          this.healthImage.destroy();
          this.heart.disableBody(true, true);
          this.healthImage = this.add.image(198, 66, this.heart_key[this.health]);
        }
      }
    
      // Collision with score multiplier pickup
      this.physics.add.overlap(this.player, this.potionMultiplier, getMultiplier, null, this);
    
      function getMultiplier() {
        this.multiplierSound.play();
        this.potionMultiplier.disableBody(true, true);
        this.multiplierText = this.add.text(500, 60, "Score Multiplier Active!", {
          fontSize: "20px",
          fill: "#000"
        });
        this.scoreMultiplier = true;
        setTimeout(() => {
          this.multiplierText.destroy(), (this.scoreMultiplier = false);
        }, 10000);
      }
    
      //Pause
      this.pauseImage = this.add.image(400, 300, "pauseImage");
      this.pauseImage.visible = false;

      
    }
    
    /********************************************************************************************************************************* */
    
    // playerStanding is a global var, change later
    
    update() {
      // Ground Enemy Handles
    
      let cursors = this.input.keyboard.createCursorKeys();
    
      // this.player can turn sound off with "o" key
      let oKey = this.input.keyboard.addKey("O");
      if (oKey.isDown && this.soundToggle) {
        this.soundContent = this.soundContent === "ON" ? "OFF" : "ON";
        this.sound.mute = this.soundContent === "OFF" ? true : false;
        this.soundText.setText(`Sound:${this.soundContent}`);
        this.soundToggle = false;
        setTimeout(() => {
          this.soundToggle = true;
        }, 200);
      }
    
      // Pause button feature
    
      let pKey = this.input.keyboard.addKey("P");
    
      if (pKey.isDown && this.togglePause) {
        this.pauseAbsent = !this.pauseAbsent;
        this.pauseImage.visible = this.pauseAbsent == false ? true : false; //Implement pause later using scenes
    
        this.togglePause = false;
    
        setTimeout(() => {
          this.togglePause = true;
        }, 200);
      }
    
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
        this.playerStanding ? this.player.anims.play("idle", true) : this.player.anims.play("idle_b", true);
      }
    }
  }
    

