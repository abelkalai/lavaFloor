let preloadAssets = scene => {
  // Background
  scene.load.image("background", "static/assets/env/background.png");
  scene.load.image("ground", "static/assets/env/grassMid.png");
  scene.load.image("platform", "static/assets/env/grass.png");
  scene.load.image("lava", "static/assets/env/lava.png");
  scene.load.image("wall", "static/assets/env/invisibleWall.png");

  // Health
  scene.load.image("heart_3", "static/assets/sprites/heart_3.png");
  scene.load.image("heart_2", "static/assets/sprites/heart_2.png");
  scene.load.image("heart_1", "static/assets/sprites/heart_1.png");
  scene.load.image("heart_0", "static/assets/sprites/heart_0.png");

  // Heart to Pick Up
  scene.load.spritesheet("heart", "static/assets/sprites/heart_world.png", {
    frameWidth: 50,
    frameHeight: 20
  });

  // Coin
  scene.load.spritesheet("coin", "static/assets/sprites/Gold_21.png", {
    frameWidth: 563,
    frameHeight: 564
  });

  // Ground Emnemy
  scene.load.spritesheet("enemy", "static/assets/sprites/enemy_1.png", {
    frameWidth: 350,
    frameHeight: 365
  });
  // Going Backwards
  scene.load.spritesheet("enemyb", "static/assets/sprites/enemy_1_b.png", {
    frameWidth: 350,
    frameHeight: 365
  });

  // Ground Enemy 2
  scene.load.spritesheet("enemy2", "static/assets/sprites/enemy_2.png", {
    frameWidth: 580,
    frameHeight: 650
  });
  // Going Backwards
  scene.load.spritesheet("enemy2b", "static/assets/sprites/enemy_2_b.png", {
    frameWidth: 580,
    frameHeight: 650
  });

  // Invincibility Potion
  scene.load.spritesheet(
    "potion",
    "static/assets/sprites/invincibilityPotion.png",
    {
      frameWidth: 125,
      frameHeight: 125
    }
  );

  // Score Multiplier Potion
  scene.load.spritesheet(
    "potionMultiplier",
    "static/assets/sprites/multiplierPotion.png",
    {
      frameWidth: 125,
      frameHeight: 125
    }
  );

  // Player
  scene.load.spritesheet("player", "static/assets/sprites/stand.png", {
    frameWidth: 67,
    frameHeight: 110
  });
  scene.load.spritesheet("player_b", "static/assets/sprites/stand_b.png", {
    frameWidth: 67,
    frameHeight: 110
  });
  scene.load.spritesheet("walk", "static/assets/sprites/walk.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  scene.load.spritesheet("walk_b", "static/assets/sprites/walk_b.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  scene.load.spritesheet("jump", "static/assets/sprites/jump.png", {
    frameWidth: 80,
    frameHeight: 110
  });
  scene.load.spritesheet("jump_b", "static/assets/sprites/jump_b.png", {
    frameWidth: 80,
    frameHeight: 110
  });

  // Pause Button
  scene.load.image("pauseImage", "static/assets/env/pause.png");

  // In scene Sounds
  scene.load.audio("collectCoin", "static/assets/sounds/coinCollect.mp3");
  scene.load.audio("collectHeart", "static/assets/sounds/getHeart.mp3");
  scene.load.audio(
    "coinMultiplierCollect",
    "static/assets/sounds/coinMultiplierCollect.mp3"
  );
  scene.load.audio(
    "multiplierPotion",
    "static/assets/sounds/multiplierPotion.mp3"
  );
  scene.load.audio("collideEnemy", "static/assets/sounds/collideEnemy.mp3");

  // Background Music
  scene.load.audio(
    "backgroundMusic",
    "static/assets/music/backgroundMusic.wav"
  );
  scene.load.audio(
    "invincibleMusic",
    "static/assets/music/invincibleMusic.wav"
  );
};

export default preloadAssets;
