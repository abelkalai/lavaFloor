import Platform from "/static/lib/gameObjects/platform.js";
import outOfBounds from "/static/lib/utilities/outOfBounds.js";

export default class Boundaries {
  constructor(scene) {
    this.scene = scene;
    this.render();
    this.nextSet = 2;
    this.heighest = 500; //Heighest point player reached. For scoring purposes.
    this.heightIncrease = -400; //Next height to increase for platforms
  }

  render() {
    // Static Groups
    this.platforms = this.scene.physics.add.staticGroup();
    this.walls = this.scene.physics.add.staticGroup();
    this.scene.physics.collide(this.platforms, this.walls);

    // Ground
    let ground = this.platforms.create(125, 550, "ground");
    ground.setDepth(100);

    //Hash map that stores boundaries
    this.boundaryList = new Map();
    this.boundaryList.set(1, [
      [650, 450],
      [175, 375],
      [0, 300],
      [-100, 225]
    ]);

    this.boundaryList.set(2, [
      [350, 160],
      [700, 100],
      [925, 15]
    ]);

    this.boundaryList.set(3, [
      [360, -40],
      [10, -110],
      [-125, -195]
    ]);

    // Initial Boundaries
    this.createBoundary(1, 0, 346, "platform");
    this.createBoundary(2, 0, 346, "platform");
    this.createBoundary(3, 0, 346, "platform");

    //Last boundary is always on top so set it as the heighest
    this.heighest = this.platforms.getChildren()[
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
        type: type
      });
      let randInt = Phaser.Math.Between(1, 4);
      if (
        randInt === 3 &&
        this.scene.enemies != undefined &&
        xPos > 200 &&
        xPos < 900
      ) {
        this.scene.enemies.renderRandom(xPos, yPos);
      } else if (randInt === 2 && this.scene.pickups != undefined) {
        this.scene.pickups.renderRandom(xPos, yPos);
      }
    }
  }

  update() {
    if (this.heighest + 500 > this.scene.player.character.y) {
      this.createBoundary(this.nextSet, this.heightIncrease, 346, "platform");
      this.nextSet = this.nextSet == 2 ? 3 : 2;
      this.heightIncrease -= this.nextSet == 2 ? 400 : 0;
      this.heighest = this.platforms.getChildren()[
        this.platforms.getChildren().length - 1
      ].y;
    }

    outOfBounds(this.scene, this.platforms);
  }
}
