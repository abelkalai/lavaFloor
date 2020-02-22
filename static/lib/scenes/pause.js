import pauseFunction from "/static/lib/utilities/pauseUtil.js";

export default class Pause extends Phaser.Scene {
  constructor() {
    super("pause");
  }

  create() {
    this.pauseImage = this.add.image(400, 300, "pauseImage");
    this.pauseSound= this.sound.add("pauseSound")
  }

  update() {
    pauseFunction(this, "pause");
  }
}
