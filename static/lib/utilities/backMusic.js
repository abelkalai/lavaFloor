export default class Backmusic {
  constructor(scene) {
    this.scene = scene;
    scene.backMusic = this;
    this.renderSounds();
  }
  renderSounds() {
    // Background Music
    this.backgroundMusic = this.scene.sound.add("backgroundMusic", { volume: 0.25 });
    this.backgroundMusic.loop = true;
    this.backgroundMusic.play();

    // Invincible Music
    this.invincibleMusic = this.scene.sound.add("invincibleMusic", { volume: 0.25 });
    this.invincibleMusic.loop = true;
  }
}
