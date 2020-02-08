import Overlay from "/static/lib/gameObjects/overlay.js";
import Boundaries from "/static/lib/gameObjects/boundaries.js";
import Lava from "/static/lib/gameObjects/lava.js";
import Player from "/static/lib/gameObjects/player.js";
import Pickups from "/static/lib/gameObjects/pickUps.js";
import Backmusic from "/static/lib/utilities/backMusic.js";
import pauseFunction from "/static/lib/utilities/pauseUtil.js";
import Enemyone from "/static/lib/gameObjects/enemyOne.js";
import Enemytwo from "/static/lib/gameObjects/enemyTwo.js";
import Enemythree from "/static/lib/gameObjects/enemyThree.js";

export default class Main extends Phaser.Scene {
  constructor() {
    super("main");
  }

  create() {
    //Background
    this.add.image(400, 300, "background");
    
    // Background Music
    const backMusic = new Backmusic(this);

    //Boundaries
    const boundaries = new Boundaries(this);

    // Overlay
    const overlay = new Overlay(this);

    // Player
    const player = new Player(this);

    // Powerups
    const pickUps = new Pickups(this);

    // Enemy One
    const enemyOne = new Enemyone(this);

    // Enemy Two
    const enemyTwo = new Enemytwo(this);

    // Enemy Three
    const enemyThree = new Enemythree(this);

    // Lava
    const lava = new Lava(this);
  }

  update() {
    this.player.update();
    this.overlay.update();
    this.lava.update();
    pauseFunction(this, "main");
  }
}
