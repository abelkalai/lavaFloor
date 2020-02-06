import pauseFunction from "/static/lib/utilities/pauseUtil.js";

export default class Pause extends Phaser.Scene {
  constructor() {
    super("pause");
  }

  create() {
    this.pauseImage = this.add.image(400, 300, "pauseImage");
  }

  update() {
    pauseFunction(this, "pause");
  }
}
