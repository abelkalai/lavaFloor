import Overlay from "/static/lib/gameObjects/overlay.js";
import Boundaries from "/static/lib/gameObjects/boundaries.js";
import Lava from "/static/lib/gameObjects/lava.js";
import Player from "/static/lib/gameObjects/player.js";
import Pickups from "/static/lib/gameObjects/pickUps.js";
import Backmusic from "/static/lib/utilities/backMusic.js"
import pauseFunction from "/static/lib/utilities/pauseUtil.js"

export default class Main extends Phaser.Scene {
  constructor() {
    super("main");
  }

  create() {
    //Background
    this.add.image(400, 300, "background");

    // Background Music
    const backMusic = new Backmusic(this)

    //Boundaries
    const boundaries = new Boundaries(this);

    // Lava
    const lava = new Lava(this);

    // Overlay
    const overlay = new Overlay(this);

    // Player
    const player = new Player(this);

    // Powerups
    const pickUps = new Pickups(this);

    // Collide enemy sound
    this.collideEnemySound = this.sound.add("collideEnemy");

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
    this.physics.add.collider(this.groundEnemy, this.boundaries.platforms);
    this.groundEnemy.anims.play("e_walk", true);
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
    this.groundEnemy2.setScale(0.065);
    this.groundEnemy2.setCollideWorldBounds(true);
    this.physics.add.collider(this.groundEnemy2, this.boundaries.platforms);
    this.groundEnemy2.anims.play("e_walk2", true); //Enemy walking animation
    this.groundEnemy2.setVelocityX(80);

    // Collision with the enemy_1 sprite
    this.physics.add.overlap(
      this.player.character,
      this.groundEnemy,
      hurtPlayer,
      () => {
        return this.player.enemyCollide;
      },
      this
    );

    //Collide with enemy 2
    this.physics.add.overlap(
      this.player.character,
      this.groundEnemy2,
      hurtPlayer,
      () => {
        return this.player.enemyCollide;
      },
      this
    );

    function hurtPlayer() {
      if (this.overlay.health !== 0) this.overlay.health -= 1;
      if (this.overlay.health !== 0) this.overlay.healthImage.destroy();
      this.overlay.healthImage = this.add.image(198, 66, this.overlay.heart_key[this.overlay.health]);
      this.player.enemyCollide = false;
      this.collideEnemySound.play();

      let hurt = setInterval(() => {
        (this.player.character.tint = this.player.hurtAgain ? 0xff0000 : 0xffffff),
          (this.player.hurtAgain = !this.player.hurtAgain);
      }, 100);

      setTimeout(() => {
        clearInterval(hurt);
      }, 500);
      setTimeout(() => {
        this.player.enemyCollide = true;
        this.player.character.tint = 0xffffff;
      }, 750);
    }

    this.g1Anim = ["e_walkb", "e_walk"];
    this.g2Anim = ["e_walk2", "e_walk2b"];

    // Enemy collides with wall
    this.physics.add.overlap(
      this.groundEnemy,
      this.boundaries.walls,
      enemyHitWall,
      null,
      {
        this: this,
        anim: this.g1Anim
      }
    );
    this.physics.add.overlap(
      this.groundEnemy2,
      this.boundaries.walls,
      enemyHitWall,
      null,
      {
        this: this,
        anim: this.g2Anim
      }
    );

    function enemyHitWall(enemy, anim) {
      enemy.setVelocityX(enemy.body.velocity.x * -1);
      enemy.anims.play(
        enemy.body.velocity.x > 0 ? this.anim[0] : this.anim[1],
        true
      );
    }

    //Pause
    this.pauseImage = this.add.image(400, 300, "pauseImage");
    this.pauseImage.visible = false;
  }

  update() {
    this.player.update();
    this.overlay.update();
    pauseFunction(this,"main")
  }
}
