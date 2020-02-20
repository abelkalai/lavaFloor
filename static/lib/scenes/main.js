import Boundaries from "/static/lib/gameObjects/boundaries.js";
import Lava from "/static/lib/gameObjects/lava.js";
import Player from "/static/lib/gameObjects/player.js";
import Pickups from "/static/lib/gameObjects/pickUps.js";
import Backmusic from "/static/lib/utilities/backMusic.js";
import pauseFunction from "/static/lib/utilities/pauseUtil.js";
import Enemyone from "/static/lib/gameObjects/enemyOne.js";
import Enemytwo from "/static/lib/gameObjects/enemyTwo.js";
import Enemythree from "/static/lib/gameObjects/enemyThree.js";
import Hud from "/static/lib/scenes/hud.js";

export default class Main extends Phaser.Scene {
  constructor(game) {
    super("main");
    this.game = game;
  }

  create() {
    //Background
    this.add.image(400, 300, "background");

    // Background Music
    this.backMusic = new Backmusic(this);

    //HUD
    this.hud = this.scene.add("hud", new Hud(this));
    this.scene.launch("hud");

    //Boundaries
    this.boundaries = new Boundaries(this);

    // Player
    this.player = new Player(this);

    // Powerups
    this.pickups = new Pickups(this);

    // Enemy One
    this.enemyOne = new Enemyone(this);

    // Enemy Two
    this.enemyTwo = new Enemytwo(this);

    // Enemy Three
    this.enemyThree = new Enemythree(this);

    // Lava
    this.lava = new Lava(this);

    // Set Camera Bounds
    this.cameras.main.startFollow(this.player.character, true, 0, 1);
    this.cameras.main.backgroundColor.setTo(51, 255, 255); //Temp holder
  }

  update() {
    this.physics.world.bounds.setTo(
      0,
      -this.player.yMax,
      this.game.scale.width,
      this.game.scale.height + this.player.yMax
    );
    this.player.update();
    this.lava.update();
    this.pickups.update();
    this.boundaries.update();

    pauseFunction(this, "main");
  }
}
