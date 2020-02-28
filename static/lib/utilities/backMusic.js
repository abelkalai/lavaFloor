export default class Backmusic {
  constructor(scene) {
    this.scene = scene;
    scene.backMusic = this;
    this.renderSounds();
  }
  renderSounds() {
    // Background Music
    this.backgroundMusic = this.scene.sound.add("backgroundMusic", { volume: 0.5 });
    this.backgroundMusic.loop = true;

    // Invincible Music
    this.invincibleMusic = this.scene.sound.add("invincibleMusic", { volume: 0.5 });
    this.invincibleMusic.loop = true;

  }
}
