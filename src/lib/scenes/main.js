import Hud from "./hud";
import Platform from "GameObjects/platform";
import Lava from "GameObjects/lava";
import Player from "GameObjects/player";
import multiplierPotion from "GameObjects/multiplierPotion";
import invinciblePotion from "GameObjects/invinciblePotion";
import Heart from "GameObjects/heart";
import Coin from "GameObjects/coin";
import Enemy from "GameObjects/enemy";
import pauseFunction from "Utilities/pauseUtil";
import outOfBounds from "Utilities/outOfBounds";
export default class Main extends Phaser.Scene {
  constructor(game) {
    super("main");
    this.game = game;
    this.boundarySetSet = 2;
    this.heighestBoundary = 500; //Heighest point player reached. For scoring purposes.
    this.heightIncrease = -400; //Next height to increase for platforms
    this.latestEnvHeight = 0;
  }

  create() {
    //Background
    this.backGround = this.add.image(400, 300, "background");

    // Background Music
    this.backgroundMusic = this.sound.add("backgroundMusic", { volume: 0.35 });
    this.backgroundMusic.loop = true;
    this.backgroundMusic.play();

    // Invincible Music
    this.invincibleMusic = this.sound.add("invincibleMusic", { volume: 0.35 });
    this.invincibleMusic.loop = true;

    // Pause Sound
    this.pauseSound = this.sound.add("pauseSound");

    //HUD
    this.hud = this.scene.add("hud", new Hud());
    this.scene.launch("hud");

    // Powerups
    this.pickups = this.physics.add.group();

    // //Boundaries
    this.renderBoundary();

    // Player
    this.player = new Player(this);

    // Lava
    this.lava = new Lava(this);
    this.lava.lavaSound.play();

    //Enemies
    this.enemies = this.physics.add.group();

    // Initial Boundaries
    this.createBoundary(1, 0, 346, "platform");
    this.createBoundary(2, 0, 346, "platform");
    this.createBoundary(3, 0, 346, "platform");

    // Set Camera Bounds
    this.cameras.main.startFollow(this.player.character, true, 0, 1);
    this.cameras.main.setBackgroundColor(0xcbeffc);
  }

  renderBoundary() {
    // Static Groups
    this.platforms = this.physics.add.staticGroup();
    this.walls = this.physics.add.staticGroup();
    this.physics.collide(this.platforms, this.walls);

    // Ground
    let ground = this.platforms.create(280, 500, "platform");
    ground.setDepth(25);

    //Hash map that stores boundaries
    this.boundaryList = new Map();
    this.boundaryList.set(1, [
      [650, 450],
      [175, 375],
      [0, 285],
      [-100, 200],
    ]);

    this.boundaryList.set(2, [
      [350, 160],
      [700, 100],
      [925, 15],
    ]);

    this.boundaryList.set(3, [
      [360, -40],
      [10, -110],
      [-125, -195],
    ]);

    // Background sprites group
    this.backSprites = this.physics.add.group();

    //Last boundary is always on top so set it as the heighest
    this.heighestBoundary = this.platforms.getChildren()[
      this.platforms.getChildren().length - 1
    ].y;
  }

  //Method Creates platform, random item or enemy and invisible wall
  createBoundary(set, yAdjust, width, type) {
    for (let i = 0; i < this.boundaryList.get(set).length; i++) {
      let xPos = this.boundaryList.get(set)[i][0];
      let yPos = this.boundaryList.get(set)[i][1] + yAdjust;
      new Platform({
        platforms: this.platforms,
        walls: this.walls,
        x: xPos,
        y: yPos,
        width: width,
        type: type,
      });
      let randInt = Phaser.Math.Between(1, 5);
      if (randInt === 1 && xPos >= 10 && xPos < 900) {
        this.renderRandomEnemy(xPos + 50, yPos);
      } else if (randInt === 2) {
        this.renderRandomPowerUp(xPos, yPos);
      }

      let xStart = Phaser.Math.Between(50, 650);
      if (
        Phaser.Math.Between(0, 5) === 1 &&
        this.latestEnvHeight - 200 > yPos &&
        this.player.character.y < -1500
      ) {
        if (this.player.character.y > -8500) {
          let backgroundObj = this.backSprites.create(
            xStart,
            yPos - 125,
            "cloud"
          );
          backgroundObj.setVelocityX(xStart < 300 ? 10 : -10);
          backgroundObj.setDepth(1);
          backgroundObj.body.setAllowGravity(false);
          this.latestEnvHeight = yPos;
        }
      } else if (this.player.character.y < -9500) {
        let backgroundObj = this.backSprites.create(xStart, yPos, "star");
        backgroundObj.setScale(0.25);
        backgroundObj.setDepth(1);

        this.latestEnvHeight = yPos;
      }
    }
  }
  renderEnemyOne(xPos, yPos) {
    new Enemy({
      scene: this,
      speed: -40,
      type: "enemyOne",
      scale: 0.085,
      group: this.enemies,
      xPos: xPos,
      yPos: yPos,
      allowGravity: true,
      frameRate: 5,
    });
  }

  renderEnemyTwo(xPos, yPos) {
    new Enemy({
      scene: this,
      speed: 80,
      type: "enemyTwo",
      scale: 0.065,
      group: this.enemies,
      xPos: xPos,
      yPos: yPos,
      allowGravity: true,
      frameRate: 5,
    });
  }

  renderEnemyThree(xPos, yPos) {
    new Enemy({
      scene: this,
      speed: -50,
      type: "enemyThree",
      scale: 0.75,
      group: this.enemies,
      xPos: xPos,
      yPos: yPos,
      allowGravity: false,
      frameRate: 5,
    });
  }

  renderRandomEnemy(xPos, yPos) {
    let randInt = Phaser.Math.Between(1, 3);
    if (randInt === 1) {
      this.renderEnemyOne(xPos, yPos - 32.5);
    } else if (randInt === 2) {
      this.renderEnemyTwo(xPos, yPos - 37.5);
    } else if (randInt === 3) {
      this.renderEnemyThree(xPos, yPos - 50);
    }
  }

  renderRandomPowerUp(xPos, yPos) {
    if (xPos >= 925) {
      xPos = 775;
    } else if (xPos < 0) {
      xPos = 25;
    } else if (xPos <= 15) {
      xPos = 75;
    }
    let randInt = Phaser.Math.Between(1, 4);
    if (randInt === 1) {
      new multiplierPotion({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 38,
      });
    } else if (randInt === 2) {
      new invinciblePotion({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 38,
      });
    } else if (randInt === 3) {
      new Coin({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 35,
      });
    } else if (randInt === 4) {
      new Heart({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 30,
      });
    }
  }

  update() {
    this.player.update();
    this.lava.update();

    outOfBounds(this, this.enemies);
    outOfBounds(this, this.pickups);
    outOfBounds(this, this.platforms);
    outOfBounds(this, this.backSprites);

    pauseFunction(this, "main");

    this.physics.world.bounds.setTo(
      0,
      -this.player.yMax,
      this.game.scale.width,
      this.game.scale.height + this.player.yMax
    );

    if (this.heighestBoundary + 500 > this.player.character.y) {
      this.createBoundary(
        this.boundarySetSet,
        this.heightIncrease,
        346,
        "platform"
      );
      this.boundarySetSet = this.boundarySetSet === 2 ? 3 : 2;
      this.heightIncrease -= this.boundarySetSet === 2 ? 400 : 0;
      this.heighestBoundary = this.platforms.getChildren()[
        this.platforms.getChildren().length - 1
      ].y;
    }

    //Adjusts background based on player height
    if (this.player.character.y < 0) {
      if (this.player.character.y < -2500 && this.player.character.y > -4500)
        this.cameras.main.setBackgroundColor(0x9fe1f9);
      else if (
        this.player.character.y < -4500 &&
        this.player.character.y > -5500
      )
        this.cameras.main.setBackgroundColor(0x6ed2f7);
      else if (
        this.player.character.y < -5500 &&
        this.player.character.y > -6500
      )
        this.cameras.main.setBackgroundColor(0x3ec3f4);
      else if (
        this.player.character.y < -6500 &&
        this.player.character.y > -7500
      )
        this.cameras.main.setBackgroundColor(0x0eb4f1);
      else if (
        this.player.character.y < -7500 &&
        this.player.character.y > -8500
      )
        this.cameras.main.setBackgroundColor(0x0b90c1);
      else if (
        this.player.character.y < -8500 &&
        this.player.character.y > -9500
      )
        this.cameras.main.setBackgroundColor(0x086c91);
      else if (
        this.player.character.y < -9500 &&
        this.player.character.y > -10500
      )
        this.cameras.main.setBackgroundColor(0x064860);
      else if (
        this.player.character.y < -10500 &&
        this.player.character.y > -11500
      )
        this.cameras.main.setBackgroundColor(0x032430);
      else if (this.player.character.y < -11500)
        this.cameras.main.setBackgroundColor(0x000000);
    }

    if (this.hud.health === 0) {
      this.backgroundMusic.destroy();
      this.lava.lavaSound.destroy();
      setTimeout(() => {
        this.player.deathSound.play();
        this.scene.remove("hud");
        this.scene.start("over", { score: this.hud.score }), 100;
      });
    }
  }
}
