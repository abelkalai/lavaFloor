const PLATFORM_WIDTH= 346;
export default class Boundaries {
  constructor(scene) {
    this.scene = scene;
    scene.boundaries = this;
    this.render();
  }

  render() {
    // Static Groups
    this.platforms = this.scene.physics.add.staticGroup();
    this.walls = this.scene.physics.add.staticGroup();
    this.scene.physics.collide(this.platforms, this.walls);

    // Ground
    this.platforms.create(35, 550, "ground");

    // Boundaries
    this.spawnBoundary(650, 450,"platform",PLATFORM_WIDTH/2); 
    this.spawnBoundary(175, 375,"platform",PLATFORM_WIDTH/2);
    this.spawnBoundary(0, 300,"platform",PLATFORM_WIDTH/2); 
    this.spawnBoundary(-100, 225,"platform",PLATFORM_WIDTH/2);
    this.spawnBoundary(350, 160,"platform",PLATFORM_WIDTH/2);
    this.spawnBoundary(700, 260,"platform",PLATFORM_WIDTH/2);

   

    this.spawnBoundary(700, 100,"platform",PLATFORM_WIDTH/2);

    //Make enemy walls invisible
    this.walls.setVisible(false)

  }

  spawnBoundary(x, y, type,width) {
    this.platforms.create(x, y, type);
    this.walls.create(x-width <= 0 ? 2 : x-width, y - 40, "wall");
    this.walls.create(x+width >= 800 ? 797 : x+width, y - 40, "wall");
  }

}
