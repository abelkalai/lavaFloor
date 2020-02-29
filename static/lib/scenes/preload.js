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
    this.load.image("background", "../../assets/env/background.png");
    this.load.image("platform", "../../assets/env/grass.png");
    this.load.image("platformSmall", "../../assets/env/grassSmall.png");
    this.load.image("lava", "../../assets/env/lava.png");
    this.load.image("wall", "../../assets/env/invisibleWall.png");
    this.load.image("cloud", "../../assets/env/cloud.png");
    this.load.image("star", "../../assets/env/star.png");

    // Health
    this.load.image("heart_3", "../../assets/sprites/heart_3.png");
    this.load.image("heart_2", "../../assets/sprites/heart_2.png");
    this.load.image("heart_1", "../../assets/sprites/heart_1.png");
    this.load.image("heart_0", "../../assets/sprites/heart_0.png");

    // Heart to Pick Up
    this.load.spritesheet("heart", "../../assets/sprites/heart_world.png", {
      frameWidth: 50,
      frameHeight: 20
    });

    // Coin
    this.load.spritesheet("coin", "../../assets/sprites/coin.png", {
      frameWidth: 563,
      frameHeight: 564
    });

    // Ground Enemy
    this.load.spritesheet("enemyOne", "../../assets/sprites/enemy_1.png", {
      frameWidth: 350,
      frameHeight: 371
    });

    // Ground Enemy 2
    this.load.spritesheet("enemyTwo", "../../assets/sprites/enemy_2.png", {
      frameWidth: 580,
      frameHeight: 650
    });

    // Enemy 3
    this.load.spritesheet("enemyThree", "../../assets/sprites/enemy_3.png", {
      frameWidth: 60,
      frameHeight: 48
    });

    // Invincibility Potion
    this.load.spritesheet(
      "iPotion",
      "../../assets/sprites/invincibilityPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Score Multiplier Potion
    this.load.spritesheet(
      "mPotion",
      "../../assets/sprites/multiplierPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Player
    this.load.spritesheet("character", "../../assets/sprites/stand.png", {
      frameWidth: 67,
      frameHeight: 92
    });

    this.load.spritesheet("character_b", "../../assets/sprites/stand_b.png", {
      frameWidth: 67,
      frameHeight: 92
    });
    this.load.spritesheet("walk", "../../assets/sprites/walk.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("walk_b", "../../assets/sprites/walk_b.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("jump", "../../assets/sprites/jump.png", {
      frameWidth: 80,
      frameHeight: 96
    });
    this.load.spritesheet("jump_b", "../../assets/sprites/jump_b.png", {
      frameWidth: 80,
      frameHeight: 96
    });

    // Pause Button and sound
    this.load.image("pauseImage", "../../assets/env/pause.png");
    this.load.audio("pauseSound", "../../assets/sounds/pause.mp3");

    // Main Scene Sounds
    this.load.audio("collectCoin", "../../assets/sounds/coinCollect.mp3");
    this.load.audio("collectHeart", "../../assets/sounds/getHeart.mp3");
    this.load.audio(
      "coinMultiplierCollect",
      "../../assets/sounds/coinMultiplierCollect.mp3"
    );
    this.load.audio(
      "multiplierPotion",
      "../../assets/sounds/multiplierPotion.mp3"
    );
    this.load.audio("collideEnemy", "../../assets/sounds/collideEnemy.mp3");
    this.load.audio("scoreIncrease", "../../assets/sounds/heightIncrease.mp3");

    //Death Sound
    this.load.audio("deathSound", "../../assets/sounds/deathSound.mp3");

    // Background Music
    this.load.audio(
      "backgroundMusic",
      "../../assets/music/backgroundMusic.wav"
    );
    this.load.audio(
      "invincibleMusic",
      "../../assets/music/invincibleMusic.wav"
    );

    // Lava Sound Effects
    this.load.audio("lava", "../../assets/sounds/lavaApproaching.mp3");
    this.load.audio("burn", "../../assets/sounds/burn.mp3");

  }

  create() {
    this.scene.start("menu");
  }
}
