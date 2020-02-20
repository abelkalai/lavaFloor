import Platform from "/static/lib/gameObjects/platform.js";

export default class Boundaries {
  constructor(scene) {
    this.heighest = 500;
    this.scene = scene;
    this.render();
    this.nextSet = 2;
    this.heightIncrease = -400; //Next height to increase
  }

  render() {
    // Static Groups
    this.platforms = this.scene.physics.add.staticGroup();
    this.walls = this.scene.physics.add.staticGroup();
    this.scene.physics.collide(this.platforms, this.walls);

    // Ground
    this.platforms.create(125, 550, "ground");

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
      [850, 15]
    ]);

    this.boundaryList.set(3, [
      [360, -40],
      [10, -110],
      [-100, -180]
    ]);

    // Initial Boundaries
    this.createBoundary(1, 0, 346, "platform");
    this.createBoundary(2, 0, 346, "platform");
    this.createBoundary(3, 0, 346, "platform");

    //Make enemy walls invisible
    this.walls.setVisible(false);
  }

  //Method creatse boundary and walls
  createBoundary(set, yAdjust, width, type) {
    for (let i = 0; i < this.boundaryList.get(set).length; i++) {
      new Platform({
        platforms: this.platforms,
        walls: this.walls,
        x: this.boundaryList.get(set)[i][0],
        y: this.boundaryList.get(set)[i][1] + yAdjust,
        width: width,
        type: type
      });
    }
  }

  update() {
    for (let ele of this.platforms.getChildren()) {
      this.heighest = Math.min(this.heighest, ele.y);
    }

    if (this.heighest + 1000 > this.scene.player.character.y) {
      this.createBoundary(this.nextSet, this.heightIncrease, 346, "platform");
      this.nextSet = this.nextSet == 2 ? 3 : 2;
      this.heightIncrease-= this.nextSet==2 ? 400 : 0
    }
    this.walls.setVisible(false);
  }
}
