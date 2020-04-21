export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    let pBox = this.add.graphics();
    pBox.fillStyle(0x222222, 0.8);
    pBox.fillRect(240, 270, 335, 35);
    let loadText = this.make.text({
      x: 350,
      y: 240,
      text: "Loading...",
      style: {
        font: "30px"
      }
    });

    let pBar = this.add.graphics();

    this.load.on("progress", function(val) {
      pBar.fillStyle(0xffffff, 1);
      pBar.fillRect(245, 275, 325 * val, 25);
    });

    this.load.on("complete", () => {
      pBox.destroy();
      pBar.destroy();
      loadText.destroy();
    });
    
    //Load Enviornment Assetss
    this.load.image("background", "/static/assets/env/background.png");
    this.load.image("platform", "/static/assets/env/grass.png");
    this.load.image("platformSmall", "/static/assets/env/grassSmall.png");
    this.load.image("lava", "/static/assets/env/lava.png");
    this.load.image("wall", "/static/assets/env/invisibleWall.png");
    this.load.image("cloud", "/static/assets/env/cloud.png");
    this.load.image("star", "/static/assets/env/star.png");

    // Health
    this.load.image("heart_3", "/static/assets/sprites/heartThree.png");
    this.load.image("heart_2", "/static/assets/sprites/heartTwo.png");
    this.load.image("heart_1", "/static/assets/sprites/heartOne.png");
    this.load.image("heart_0", "/static/assets/sprites/heartZero.png");

    // Heart to Pick Up
    this.load.spritesheet("heart", "/static/assets/sprites/heartInGame.png", {
      frameWidth: 50,
      frameHeight: 20
    });

    // Coin
    this.load.spritesheet("coin", "/static/assets/sprites/coin.png", {
      frameWidth: 563,
      frameHeight: 564
    });

    // Ground Enemy
    this.load.spritesheet("enemyOne", "/static/assets/sprites/enemyOne.png", {
      frameWidth: 350,
      frameHeight: 371
    });

    // Ground Enemy 2
    this.load.spritesheet("enemyTwo", "/static/assets/sprites/enemyTwo.png", {
      frameWidth: 580,
      frameHeight: 650
    });

    // Enemy 3
    this.load.spritesheet("enemyThree", "/static/assets/sprites/enemyThree.png", {
      frameWidth: 60,
      frameHeight: 48
    });

    // Invincibility Potion
    this.load.spritesheet(
      "iPotion",
      "/static/assets/sprites/invincibilityPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Score Multiplier Potion
    this.load.spritesheet(
      "mPotion",
      "/static/assets/sprites/multiplierPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Player
    this.load.spritesheet("character", "/static/assets/sprites/stand.png", {
      frameWidth: 67,
      frameHeight: 92
    });

    this.load.spritesheet("character_b", "/static/assets/sprites/standBackFacing.png", {
      frameWidth: 67,
      frameHeight: 92
    });
    this.load.spritesheet("walk", "/static/assets/sprites/walk.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("walk_b", "/static/assets/sprites/walkBackFacing.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("jump", "/static/assets/sprites/jump.png", {
      frameWidth: 80,
      frameHeight: 96
    });
    this.load.spritesheet("jump_b", "/static/assets/sprites/jumpBackFacing.png", {
      frameWidth: 80,
      frameHeight: 96
    });

    // Pause Button and sound
    this.load.image("pauseImage", "/static/assets/env/pause.png");
    this.load.audio("pauseSound", "/static/assets/sounds/pause.mp3");

    // Main Scene Sounds
    this.load.audio("collectCoin", "/static/assets/sounds/coinCollect.mp3");
    this.load.audio("collectHeart", "/static/assets/sounds/getHeart.mp3");
    this.load.audio(
      "coinMultiplierCollect",
      "/static/assets/sounds/coinMultiplierCollect.mp3"
    );
    this.load.audio(
      "multiplierPotion",
      "/static/assets/sounds/multiplierPotion.mp3"
    );
    this.load.audio("collideEnemy", "/static/assets/sounds/collideEnemy.mp3");
    this.load.audio("scoreIncrease", "/static/assets/sounds/heightIncrease.mp3");

    //Death Sound
    this.load.audio("deathSound", "/static/assets/sounds/deathSound.mp3");

    // Background Music
    this.load.audio(
      "backgroundMusic",
      "/static/assets/music/backgroundMusic.wav"
    );
    this.load.audio(
      "invincibleMusic",
      "/static/assets/music/invincibleMusic.wav"
    );

    // Lava Sound Effects
    this.load.audio("lava", "/static/assets/sounds/lavaApproaching.mp3");
    this.load.audio("burn", "/static/assets/sounds/burn.mp3");

  }

  create() {
    this.scene.start("menu");
  }
}
