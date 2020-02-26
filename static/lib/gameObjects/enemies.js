import Enemy from "/static/lib/gameObjects/supers/enemy.js";
import outOfBounds from "/static/lib/utilities/outOfBounds.js";

export default class Enemies {
  constructor(scene) {
    this.scene = scene;
    this.render();
  }

  render() {
    //Create group of enemies
    this.enemiesObj = this.scene.physics.add.group();
  }

  renderEnemyOne(x, y) {
    new Enemy({
      scene: this.scene,
      speed: -40,
      type: "enemyOne",
      scale: 0.085,
      group: this.enemiesObj,
      xPos: x,
      yPos: y,
      allowGravity: true,
      frameRate: 5
    });
  }

  renderEnemyTwo(x, y) {
    new Enemy({
      scene: this.scene,
      speed: 80,
      type: "enemyTwo",
      scale: 0.065,
      group: this.enemiesObj,
      xPos: x,
      yPos: y,
      allowGravity: true,
      frameRate: 5
    });
  }

  renderEnemyThree(x, y) {
    new Enemy({
      scene: this.scene,
      speed: -50,
      type: "enemyThree",
      scale: 0.75,
      group: this.enemiesObj,
      xPos: x,
      yPos: y,
      allowGravity: false,
      frameRate: 5
    });
  }

  renderRandom(x, y) {
    let randInt = Phaser.Math.Between(1, 3);
    if (randInt == 1) {
      this.renderEnemyOne(x, y - 32.5);
    } else if (randInt == 2) {
      this.renderEnemyTwo(x, y - 37.5);
    } else if (randInt == 3) {
      this.renderEnemyThree(x, y - 50);
    }
  }

  update() {
    outOfBounds(this.scene, this.enemiesObj);
  }
}
