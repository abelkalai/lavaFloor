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

    // Invisible Wall
    this.walls = this.scene.physics.add.staticGroup();
    this.walls.create(490.5, 387.5, "wall"); //Lower Level
    this.walls.create(810, 387.5, "wall"); //Lower Level
    this.walls.create(509.5, 97.5, "wall"); //Higher Level
    this.walls.create(187.5, 97.5, "wall"); //Higher Level
    this.scene.physics.collide(this.platforms, this.walls);
    this.walls.setVisible(false);
  }
}
