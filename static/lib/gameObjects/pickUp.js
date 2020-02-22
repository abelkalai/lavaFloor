export default class Pickup {
  constructor(scene) {
    this.scene = scene;
    this.render();
    
  }
  render() {
    //Power Ups
    // Add Heart Pickup
    this.heart = this.scene.physics.add.sprite(100, 250, "heart");
    this.heart.setCollideWorldBounds(true);
    this.scene.physics.add.collider(
      this.heart,
      this.scene.boundaries.platforms
    );

    //Add Invincibility Potion Pickup
    this.potion = this.scene.physics.add.sprite(310, 300, "potion");
    this.potion.setScale(0.4);
    this.potion.setCollideWorldBounds(true);
    this.scene.physics.add.collider(
      this.potion,
      this.scene.boundaries.platforms
    );

    //Add Score Multiplier Potion
    this.potionMultiplier = this.scene.physics.add.sprite(
      200,
      400,
      "potionMultiplier"
    );
    this.potionMultiplier.setScale(0.4);
    this.potionMultiplier.setCollideWorldBounds(true);
    this.scene.physics.add.collider(
      this.potionMultiplier,
      this.scene.boundaries.platforms
    );

    // Add Coin
    this.coin = this.scene.physics.add.sprite(200, 300, "coin");
    this.coin.setScale(0.065);
    this.coin.setCollideWorldBounds(true);
    this.scene.physics.add.collider(this.coin, this.scene.boundaries.platforms);

    // Sound Effects
    this.coinSound = this.scene.sound.add("collectCoin");
    this.heartSound = this.scene.sound.add("collectHeart");
    this.coinMultiplierCollect = this.scene.sound.add("coinMultiplierCollect");
    this.multiplierSound = this.scene.sound.add("multiplierPotion");
  }

  update() {
    // Collision with potion
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.potion,
      getPotion,
      null,
      this
    );

    function getPotion(character, potion) {
      this.scene.player.enemyCollide = false;
      potion.disableBody(true, true);

      let isInvincible = setInterval(() => {
        character.tint = Math.random() * 0xffffff;
      }, 100);
      this.scene.backMusic.backgroundMusic.pause();
      this.scene.backMusic.invincibleMusic.play();
      setTimeout(() => {
        this.scene.player.enemyCollide = true;
        clearInterval(isInvincible);
        character.clearTint()
        this.scene.backMusic.invincibleMusic.pause();
        this.scene.backMusic.backgroundMusic.resume();
      }, 7500);
    }

    // Collision with heart pickup
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.heart,
      getHeart,
      null,
      this
    );

    // Get Heart Function
    function getHeart(character, heart) {
      if (this.scene.hud.overlay.health <= 2) {
        this.scene.hud.overlay.health++;
        this.scene.pickups.heartSound.play();
        heart.disableBody(true, true);
      }
    }

    // Collision with score multiplier pickup
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.potionMultiplier,
      getMultiplier,
      null,
      this
    );
    // Get Multiplier function
    function getMultiplier(character, potionMultiplier) {
      this.multiplierSound.play();
      potionMultiplier.disableBody(true, true);

      this.scene.hud.overlay.scoreMultiplier = true;
      setTimeout(() => {this.scene.hud.overlay.scoreMultiplier = false;
      }, 10000);
    }

    // Collision with the coin
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.coin,
      getCoin,
      null,
      this
    );

    //Get Coin Function
    function getCoin(character, coin) {
      this.scene.player.scoreMultiplier
        ? this.coinMultiplierCollect.play()
        : this.coinSound.play();
      coin.disableBody(true, true);
      this.scene.hud.overlay.score += this.scene.hud.overlay.scoreMultiplier ? 100 : 50;
      this.scene.hud.overlay.scoreText.setText(`Score:${this.scene.hud.overlay.score}`);
    }


  }
}
