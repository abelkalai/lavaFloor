import Platform from "/static/lib/gameObjects/platform.js";

export default class Boundaries {
  constructor(scene) {
    this.smallest = 9999999999;
    this.scene = scene;
    this.render();
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
      [0, 300]
    ]);
    this.boundaryList.set(2, [
      [-100, 225],
      [350, 160],
      [700, 260],
      [700, 100]
    ]);

    // Boundaries

    //Group 1
    for (let i = 0; i < this.boundaryList.get(1).length; i++) {
      new Platform({
        platforms: this.platforms,
        walls: this.walls,
        x: this.boundaryList.get(1)[i][0],
        y: this.boundaryList.get(1)[i][1],
        width: 346,
        type: "platform"
      });
    }

    //Group 2
    for (let i = 0; i < this.boundaryList.get(2).length; i++) {
      new Platform({
        platforms: this.platforms,
        walls: this.walls,
        x: this.boundaryList.get(2)[i][0],
        y: this.boundaryList.get(2)[i][1],
        width: 346,
        type: "platform"
      });
    }

    //Make enemy walls invisible
    this.walls.setVisible(false);
  }

  update() {
    //Adjusted group
    // for (let i = 0; i < this.boundaryList.get(1).length; i++) {
    //   new Platform({
    //     platforms: this.platforms,
    //     walls: this.walls,
    //     x: this.boundaryList.get(1)[i][0],
    //     y:
    //       this.boundaryList.get(1)[i][1] +
    //       this.scene.game.scale.height +
    //       this.scene.player.yMax,
    //     width: 346,
    //     type: "platform"
    //   });
    // }
    // let smallest=this.smallest
    // this.platforms.children.each(function(elem) {
    //      smallest = Math.min(smallest,elem.y);
    //      console.log(smallest)
    //   }
    // );
    // this.smallest=smallest
    // this.walls.setVisible(false);
  }
}
