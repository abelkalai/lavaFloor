import Platform from "/static/lib/gameObjects/platform.js";

const PLATFORM_WIDTH = 346;
export default class Boundaries {
  constructor(scene) {
    this.scene = scene;
    this.render();
  }

  render() {
    // Static Groups
    this.platforms = this.scene.physics.add.staticGroup();
    this.walls = this.scene.physics.add.staticGroup();
    this.scene.physics.collide(this.platforms, this.walls);

    // Ground
    this.platforms.create(35, 550, "ground");

    //Hash map that stores boundaries
    let boundaryMap = new Map();
    boundaryMap.set(1, [
      [650, 450],
      [175, 375],
      [0, 300]
    ]);
    boundaryMap.set(2, [
      [-100, 225],
      [350, 160],
      [700, 260],
      [700, 100]
    ]);

    // Boundaries

    //Group 1
    for (let i = 0; i < boundaryMap.get(1).length; i++) {
      new Platform({
        platforms: this.platforms,
        walls: this.walls,
        x: boundaryMap.get(1)[i][0],
        y: boundaryMap.get(1)[i][1],
        width: 346,
        type: "platform"
      });
    }

    //Group 2
    for (let i = 0; i < boundaryMap.get(2).length; i++) {
      new Platform({
        platforms: this.platforms,
        walls: this.walls,
        x: boundaryMap.get(2)[i][0],
        y: boundaryMap.get(2)[i][1],
        width: 346,
        type: "platform"
      });
    }

    //Adjusted group
    for (let i = 0; i < boundaryMap.get(1).length; i++) {
      new Platform({
        platforms: this.platforms,
        walls: this.walls,
        x: boundaryMap.get(1)[i][0],
        y: boundaryMap.get(1)[i][1],
        width: 346,
        type: "platform"
      });
    }
    //Make enemy walls invisible
    this.walls.setVisible(false);
  }

  update() {}
}
