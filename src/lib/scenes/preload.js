export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 335, 35);
    let loadText = this.make.text({
      x: 350,
      y: 240,
      text: "Loading...",
      style: {
        font: "30px"
      }
    });

    let progressBar = this.add.graphics();

    this.load.on("progress", function(val) {
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(245, 275, 325 * val, 25);
    });

    this.load.on("complete", () => {
      progressBox.destroy();
      progressBar.destroy();
      loadText.destroy();
    });
    
    //Load Enviornment Assets
    this.load.image("background", "env/background.png");
    this.load.image("platform", "env/grass.png");
    this.load.image("platformSmall", "env/grassSmall.png");
    this.load.image("lava", "env/lava.png");
    this.load.image("wall", "env/invisibleWall.png");
    this.load.image("cloud", "env/cloud.png");
    this.load.image("star", "env/star.png");

    // Health
    this.load.image("heart_3", "sprites/heartThree.png");
    this.load.image("heart_2", "sprites/heartTwo.png");
    this.load.image("heart_1", "sprites/heartOne.png");
    this.load.image("heart_0", "sprites/heartZero.png");

    // Heart to Pick Up
    this.load.spritesheet("heart", "sprites/heartInGame.png", {
      frameWidth: 50,
      frameHeight: 20
    });

    // Coin
    this.load.spritesheet("coin", "sprites/coin.png", {
      frameWidth: 563,
      frameHeight: 564
    });

    // Ground Enemy
    this.load.spritesheet("enemyOne", "sprites/enemyOne.png", {
      frameWidth: 350,
      frameHeight: 371
    });

    // Ground Enemy 2
    this.load.spritesheet("enemyTwo", "sprites/enemyTwo.png", {
      frameWidth: 580,
      frameHeight: 650
    });

    // Enemy 3
    this.load.spritesheet("enemyThree", "sprites/enemyThree.png", {
      frameWidth: 60,
      frameHeight: 48
    });

    // Invincibility Potion
    this.load.spritesheet(
      "iPotion",
      "sprites/invincibilityPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Score Multiplier Potion
    this.load.spritesheet(
      "mPotion",
      "sprites/multiplierPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Player
    this.load.spritesheet("character", "sprites/stand.png", {
      frameWidth: 67,
      frameHeight: 92
    });

    this.load.spritesheet("character_b", "sprites/standBackFacing.png", {
      frameWidth: 67,
      frameHeight: 92
    });
    this.load.spritesheet("walk", "sprites/walk.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("walk_b", "sprites/walkBackFacing.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("jump", "sprites/jump.png", {
      frameWidth: 80,
      frameHeight: 96
    });
    this.load.spritesheet("jump_b", "sprites/jumpBackFacing.png", {
      frameWidth: 80,
      frameHeight: 96
    });

    // Pause Button and sound
    this.load.image("pauseImage", "env/pause.png");
    this.load.audio("pauseSound", "sounds/pause.mp3");

    // Main Scene Sounds
    this.load.audio("collectCoin", "sounds/coinCollect.mp3");
    this.load.audio("collectHeart", "sounds/getHeart.mp3");
    this.load.audio(
      "coinMultiplierCollect",
      "sounds/coinMultiplierCollect.mp3"
    );
    this.load.audio(
      "multiplierPotion",
      "sounds/multiplierPotion.mp3"
    );
    this.load.audio("collideEnemy", "sounds/collideEnemy.mp3");
    this.load.audio("scoreIncrease", "sounds/heightIncrease.mp3");

    //Death Sound
    this.load.audio("deathSound", "sounds/deathSound.mp3");

    // Background Music
    this.load.audio(
      "backgroundMusic",
      "music/backgroundMusic.wav"
    );
    this.load.audio(
      "invincibleMusic",
      "music/invincibleMusic.wav"
    );

    // Lava Sound Effects
    this.load.audio("lava", "sounds/lavaApproaching.mp3");
    this.load.audio("burn", "sounds/burn.mp3");

  }

  create() {
    this.scene.start("menu");
  }
}
