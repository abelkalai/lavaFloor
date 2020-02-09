export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {

    this.make.text({
      x: 350,
      y: 240,
      text: "Loading...",
      style: {
        font: "30px"
      }
    });

    let pBar = this.add.graphics();

    this.load.on("progress", function(val) {
      pBar.fillStyle(0xFFFFFF, 1);
      pBar.fillRect(245, 275, 325 * val, 25);
    });

    this.load.image("background", "static/assets/env/background.png");
    this.load.image("ground", "static/assets/env/grassMid.png");
    this.load.image("platform", "static/assets/env/grass.png");
    this.load.image("lava", "static/assets/env/lava.png");
    this.load.image("wall", "static/assets/env/invisibleWall.png");

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

    // Ground Enemy
    this.load.spritesheet("enemyOne", "static/assets/sprites/enemy_1.png", {
      frameWidth: 350,
      frameHeight: 365
    });

    // Ground Enemy 2
    this.load.spritesheet("enemyTwo", "static/assets/sprites/enemy_2.png", {
      frameWidth: 580,
      frameHeight: 650
    });

    // Enemy 3
    this.load.spritesheet("enemyThree", "static/assets/sprites/enemy_3.png", {
      frameWidth: 60,
      frameHeight: 48
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
    this.load.spritesheet("character", "static/assets/sprites/stand.png", {
      frameWidth: 67,
      frameHeight: 108
    });

    this.load.spritesheet("character_b", "static/assets/sprites/stand_b.png", {
      frameWidth: 67,
      frameHeight: 108
    });
    this.load.spritesheet("walk", "static/assets/sprites/walk.png", {
      frameWidth: 80,
      frameHeight: 108
    });
    this.load.spritesheet("walk_b", "static/assets/sprites/walk_b.png", {
      frameWidth: 80,
      frameHeight: 108
    });
    this.load.spritesheet("jump", "static/assets/sprites/jump.png", {
      frameWidth: 80,
      frameHeight: 108
    });
    this.load.spritesheet("jump_b", "static/assets/sprites/jump_b.png", {
      frameWidth: 80,
      frameHeight: 108
    });

    // Pause Button
    this.load.image("pauseImage", "static/assets/env/pause.png");

    // In scene Sounds
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
    this.load.audio("collideEnemy", "static/assets/sounds/collideEnemy.mp3");

    // Background Music
    this.load.audio(
      "backgroundMusic",
      "static/assets/music/backgroundMusic.wav"
    );
    this.load.audio(
      "invincibleMusic",
      "static/assets/music/invincibleMusic.wav"
    );

    // Lava Sound Effects
    this.load.audio("lava", "static/assets/sounds/lavaApproaching.mp3");
    this.load.audio("burn", "static/assets/sounds/burn.mp3");

    //Personal logo placeholder
    this.load.image("logo", "static/assets/logo/placeholder.png");

    //When loading assets are complete
    this.load.on("complete", () => {
      console.log("complete");
    });
  }

  create() {
    this.add.image(400, 300, "logo");
    setTimeout(() => {
      this.scene.start("main");
    }, 1750);
  }
}
