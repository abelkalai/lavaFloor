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

    // M Poition
    new MPotion(this.scene, { group: this.pickUpsObj, xPos: 200, yPos: 400 });

    // I Potion
    new IPotion(this.scene, { group: this.pickUpsObj, xPos: 310, yPos: 300 });

    // Heart
    new Heart(this.scene, { group: this.pickUpsObj, xPos: 100, yPos: 250 });

    // Coin
    new Coin(this.scene, { group: this.pickUpsObj, xPos: 200, yPos: 300 });
  }

  update() {
    outOfBounds(this.scene, this.pickUpsObj);
  }
}
