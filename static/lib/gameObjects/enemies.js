import Enemyone from "/static/lib/gameObjects/enemyOne.js";
import Enemytwo from "/static/lib/gameObjects/enemyTwo.js";
import Enemythree from "/static/lib/gameObjects/enemyThree.js";
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

  renderRandom(x, y) {
    let randInt = Phaser.Math.Between(1, 3);
    if (randInt == 1) {
      new Enemyone({
        scene: this.scene,
        group: this.enemiesObj,
        xPos: x,
        yPos: y - 32.5
      });
    } else if (randInt == 2) {
      new Enemytwo({
        scene: this.scene,
        group: this.enemiesObj,
        xPos: x,
        yPos: y - 37.5
      });
    } else if (randInt == 3) {
      new Enemythree({
        scene: this.scene,
        group: this.enemiesObj,
        xPos: x,
        yPos: y - 50
      });
    }
  }

  update() {
    outOfBounds(this.scene, this.enemiesObj);
  }
}
