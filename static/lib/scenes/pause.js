import pauseFunction from "../utilities/pauseUtil.js";

export default class Pause extends Phaser.Scene {
  constructor() {
    super("pause");
  }

  create() {
    this.pauseImage = this.add.image(400, 300, "pauseImage");
    this.pauseImage.setDepth(200)
    this.pauseSound= this.sound.add("pauseSound")
  }

  update() {
    pauseFunction(this, "pause");
  }
}
