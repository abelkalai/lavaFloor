import outOfBounds from "/static/lib/utilities/outOfBounds.js";
import MPotion from "/static/lib/gameObjects/mPotion.js";
import IPotion from "/static/lib/gameObjects/iPotion.js";
import Heart from "/static/lib/gameObjects/heart.js";
import Coin from "/static/lib/gameObjects/Coin.js";

export default class Pickups {
  constructor(scene) {
    this.scene = scene;
    this.render();
  }

  render() {
    this.pickUpsObj = this.scene.physics.add.group();
  }

  renderRandom(x, y) {
    if (x >= 925) {
      x = 775;
    } else if (x < 0) {
      x = 25;
    } else if (x <= 15) {
      x = 75;
    }
    let randInt = Phaser.Math.Between(1, 4);
    if (randInt === 1) {
      new MPotion({
        scene: this.scene,
        group: this.pickUpsObj,
        xPos: x,
        yPos: y - 38
      });
    } else if (randInt === 2) {
      new IPotion({
        scene: this.scene,
        group: this.pickUpsObj,
        xPos: x,
        yPos: y - 38
      });
    } else if (randInt === 3) {
      new Coin({
        scene: this.scene,
        group: this.pickUpsObj,
        xPos: x,
        yPos: y - 35
      });
    } else if (randInt === 4) {
      new Heart({
        scene: this.scene,
        group: this.pickUpsObj,
        xPos: x,
        yPos: y - 30
      });
    }
  }

  update() {
    outOfBounds(this.scene, this.pickUpsObj);
  }
}
