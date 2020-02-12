import Overlay from "/static/lib/gameObjects/overlay.js";
export default class Hud extends Phaser.Scene {
  constructor(scene) {
    super("hud");
    this.main=scene

  }

  create() {
    this.overlay = new Overlay(this);
  }

  update() {
    this.overlay.update()
  }
}
