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
    this.load.image("background", "/src/assets/env/background.png");
    this.load.image("platform", "/src/assets/env/grass.png");
    this.load.image("platformSmall", "/src/assets/env/grassSmall.png");
    this.load.image("lava", "/src/assets/env/lava.png");
    this.load.image("wall", "/src/assets/env/invisibleWall.png");
    this.load.image("cloud", "/src/assets/env/cloud.png");
    this.load.image("star", "/src/assets/env/star.png");

    // Health
    this.load.image("heart_3", "/src/assets/sprites/heartThree.png");
    this.load.image("heart_2", "/src/assets/sprites/heartTwo.png");
    this.load.image("heart_1", "/src/assets/sprites/heartOne.png");
    this.load.image("heart_0", "/src/assets/sprites/heartZero.png");

    // Heart to Pick Up
    this.load.spritesheet("heart", "/src/assets/sprites/heartInGame.png", {
      frameWidth: 50,
      frameHeight: 20
    });

    // Coin
    this.load.spritesheet("coin", "/src/assets/sprites/coin.png", {
      frameWidth: 563,
      frameHeight: 564
    });

    // Ground Enemy
    this.load.spritesheet("enemyOne", "/src/assets/sprites/enemyOne.png", {
      frameWidth: 350,
      frameHeight: 371
    });

    // Ground Enemy 2
    this.load.spritesheet("enemyTwo", "/src/assets/sprites/enemyTwo.png", {
      frameWidth: 580,
      frameHeight: 650
    });

    // Enemy 3
    this.load.spritesheet("enemyThree", "/src/assets/sprites/enemyThree.png", {
      frameWidth: 60,
      frameHeight: 48
    });

    // Invincibility Potion
    this.load.spritesheet(
      "iPotion",
      "/src/assets/sprites/invincibilityPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Score Multiplier Potion
    this.load.spritesheet(
      "mPotion",
      "/src/assets/sprites/multiplierPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Player
    this.load.spritesheet("character", "/src/assets/sprites/stand.png", {
      frameWidth: 67,
      frameHeight: 92
    });

    this.load.spritesheet("character_b", "/src/assets/sprites/standBackFacing.png", {
      frameWidth: 67,
      frameHeight: 92
    });
    this.load.spritesheet("walk", "/src/assets/sprites/walk.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("walk_b", "/src/assets/sprites/walkBackFacing.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("jump", "/src/assets/sprites/jump.png", {
      frameWidth: 80,
      frameHeight: 96
    });
    this.load.spritesheet("jump_b", "/src/assets/sprites/jumpBackFacing.png", {
      frameWidth: 80,
      frameHeight: 96
    });

    // Pause Button and sound
    this.load.image("pauseImage", "/src/assets/env/pause.png");
    this.load.audio("pauseSound", "/src/assets/sounds/pause.mp3");

    // Main Scene Sounds
    this.load.audio("collectCoin", "/src/assets/sounds/coinCollect.mp3");
    this.load.audio("collectHeart", "/src/assets/sounds/getHeart.mp3");
    this.load.audio(
      "coinMultiplierCollect",
      "/src/assets/sounds/coinMultiplierCollect.mp3"
    );
    this.load.audio(
      "multiplierPotion",
      "/src/assets/sounds/multiplierPotion.mp3"
    );
    this.load.audio("collideEnemy", "/src/assets/sounds/collideEnemy.mp3");
    this.load.audio("scoreIncrease", "/src/assets/sounds/heightIncrease.mp3");

    //Death Sound
    this.load.audio("deathSound", "/src/assets/sounds/deathSound.mp3");

    // Background Music
    this.load.audio(
      "backgroundMusic",
      "/src/assets/music/backgroundMusic.wav"
    );
    this.load.audio(
      "invincibleMusic",
      "/src/assets/music/invincibleMusic.wav"
    );

    // Lava Sound Effects
    this.load.audio("lava", "/src/assets/sounds/lavaApproaching.mp3");
    this.load.audio("burn", "/src/assets/sounds/burn.mp3");

  }

  create() {
    this.scene.start("menu");
  }
}
