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
    //Enemy One
    new Enemyone({
      scene: this.scene,
      group: this.enemiesObj,
      xPos: 600,
      yPos: 418
    });

    // Enemy Two
    new Enemytwo({
      scene: this.scene,
      group: this.enemiesObj,
      xPos: 290,
      yPos: 120
    });

    // Enemy Three
    new Enemythree({
      scene: this.scene,
      group: this.enemiesObj,
      xPos: 600,
      yPos: 50
    });
  }

  update() {
    outOfBounds(this.scene, this.enemiesObj);
  }
}
