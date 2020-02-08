export default class Boundaries {
  constructor(scene) {
    this.scene = scene;
    scene.boundaries = this;
    this.render();
  }

  render() {
    // Platforms
    this.platforms = this.scene.physics.add.staticGroup();

    // Ground
    this.platforms.create(35, 550, "ground");

    // Platforms
    this.platforms.create(650, 450, "platform");
    this.platforms.create(175, 375, "platform");
    this.platforms.create(0, 300, "platform");
    this.platforms.create(-100, 225, "platform");
    this.platforms.create(350, 160, "platform");

    this.platforms.create(700, 260, "platform");

    // Invisible Wall
    this.walls = this.scene.physics.add.staticGroup();
    this.walls.create(480, 408, "wall"); //Lower Level
    this.walls.create(798, 408, "wall"); //Lower Level
    this.walls.create(523, 120, "wall"); //Higher Level
    this.walls.create(178, 120, "wall"); //Higher Level

    this.walls.create(528, 218, "wall"); //Mid Level
    this.walls.create(798, 218, "wall"); //Mid Level

    this.scene.physics.collide(this.platforms, this.walls);
    this.walls.setVisible(false);
  }
}
