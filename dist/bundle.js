/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/game.js":
/*!*************************!*\
  !*** ./src/lib/game.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scenes_preload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/preload.js */ "./src/lib/scenes/preload.js");
/* harmony import */ var _scenes_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/menu.js */ "./src/lib/scenes/menu.js");
/* harmony import */ var _scenes_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/main.js */ "./src/lib/scenes/main.js");
/* harmony import */ var _scenes_pause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/pause.js */ "./src/lib/scenes/pause.js");
/* harmony import */ var _scenes_over_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/over.js */ "./src/lib/scenes/over.js");






const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
});

game.scene.add("preload", new _scenes_preload_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
game.scene.add("main", new _scenes_main_js__WEBPACK_IMPORTED_MODULE_2__["default"](game));
game.scene.add("menu", new _scenes_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
game.scene.add("pause", new _scenes_pause_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
game.scene.add("over", new _scenes_over_js__WEBPACK_IMPORTED_MODULE_4__["default"]());

game.scene.start("preload", new _scenes_preload_js__WEBPACK_IMPORTED_MODULE_0__["default"]());


/***/ }),

/***/ "./src/lib/gameObjects/coin.js":
/*!*************************************!*\
  !*** ./src/lib/gameObjects/coin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coin; });
/* harmony import */ var _pickUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickUp.js */ "./src/lib/gameObjects/pickUp.js");


class Coin extends _pickUp_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (props) {
    super ({
      scene: props.scene,
      type: "coin",
      scale: 0.065,
      group: props.group,
      xPos: props.xPos, 
      yPos: props.yPos, 
      allowGravity: false
    });
    this.coinSound = this.scene.sound.add("collectCoin");
    this.coinMultiplierCollect = this.scene.sound.add("coinMultiplierCollect");
    this.collide()
  }

  collide() {
    //Collision with coin
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getCoin,
      null,
      this
    );

    //Get Coin Function
    function getCoin(character, coin) {
      this.scene.player.scoreMultiplier
        ? this.coinMultiplierCollect.play()
        : this.coinSound.play();
      coin.disableBody(true, true);
      this.scene.hud.score += this.scene.hud.scoreMultiplier
        ? 100
        : 50;
      this.scene.hud.scoreText.setText(
        `Score:${this.scene.hud.score}`
      );
    }
  }
}


/***/ }),

/***/ "./src/lib/gameObjects/enemy.js":
/*!**************************************!*\
  !*** ./src/lib/gameObjects/enemy.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony import */ var _utilities_hurtPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/hurtPlayer.js */ "./src/lib/utilities/hurtPlayer.js");

class Enemy {
  constructor(props) {
    this.scene = props.scene;
    this.speed = props.speed;
    this.type = props.type;
    this.scale = props.scale;
    this.xPos = props.xPos;
    this.yPos = props.yPos;
    this.group = props.group;
    this.allowGravity = props.allowGravity;
    this.frameRate = props.frameRate;
    this.collide = this.scene.sound.add("collideEnemy");
    this.animate();
    this.render();
    this.update();
  }

  render() {
    this.sprite = this.group.create(
      this.xPos,
      this.yPos,
      this.type
    );
    this.sprite.setDepth(125); 
    this.sprite.setScale(this.scale);
    this.sprite.body.setAllowGravity(this.allowGravity);
    this.scene.physics.add.collider(
      this.sprite,
      this.scene.platforms
    );
    this.sprite.anims.play(`${this.type}Walk`, true);
    this.sprite.setVelocityX(this.speed);
  }

  animate() {
    this.scene.anims.create({
      key: `${this.type}Walk`,
      frames: this.scene.anims.generateFrameNumbers(this.type, {
        start: 0,
        end: 1
      }),
      frameRate: this.frameRate,
      repeat: -1
    });
  }

  update() {
    //Collide with player
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      _utilities_hurtPlayer_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      null,
      { this: this, enemy: this, scene: this.scene }
    );

    //Wall Collision
    this.scene.physics.add.overlap(
      this.sprite,
      this.scene.walls,
      () => {
        this.sprite.setVelocityX(-this.sprite.body.velocity.x);
        this.sprite.toggleFlipX();
      }
    );
  }
}


/***/ }),

/***/ "./src/lib/gameObjects/heart.js":
/*!**************************************!*\
  !*** ./src/lib/gameObjects/heart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Heart; });
/* harmony import */ var _pickUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickUp.js */ "./src/lib/gameObjects/pickUp.js");

class Heart extends _pickUp_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(props) {
    super({
      scene: props.scene,
      type: "heart",
      scale: 1,
      group: props.group,
      xPos: props.xPos, 
      yPos: props.yPos, 
      allowGravity: false
    });
    this.heartSound = this.scene.sound.add("collectHeart");
    this.collide()
  }

  collide() {
    // Collision with heart pickup
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getHeart,
      null,
      this
    );

    // Get Heart Function
    function getHeart(character, heart) {
      if (this.scene.hud.health <= 2) {
        this.scene.hud.health++;
        this.heartSound.play();
        heart.disableBody(true, true);
      }
    }
  }
}


/***/ }),

/***/ "./src/lib/gameObjects/invinciblePotion.js":
/*!*************************************************!*\
  !*** ./src/lib/gameObjects/invinciblePotion.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invinciblePotion; });
/* harmony import */ var _pickUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickUp.js */ "./src/lib/gameObjects/pickUp.js");


class invinciblePotion extends _pickUp_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(props) {
    super({
      scene: props.scene,
      type: "iPotion",
      scale: 0.4,
      group: props.group,
      xPos: props.xPos,
      yPos: props.yPos,
      allowGravity: true
    });
    this.collide();
  }

  collide() {
    // Collision with potion
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getPotion,
      null,
      this
    );

    function getPotion(character, iPotion) {
      if (this.scene.player.enemyCollide) {
        this.scene.player.enemyCollide = false;
        iPotion.disableBody(true, true);

        let isInvincible = setInterval(() => {
          character.tint = Math.random() * 0xffffff;
        }, 100);
        this.scene.backgroundMusic.pause();
        this.scene.invincibleMusic.play();
        setTimeout(() => {
          this.scene.player.enemyCollide = true;
          clearInterval(isInvincible);
          character.clearTint();
          this.scene.invincibleMusic.pause();
          this.scene.backgroundMusic.resume();
        }, 7500);
      }
    }
  }
}


/***/ }),

/***/ "./src/lib/gameObjects/lava.js":
/*!*************************************!*\
  !*** ./src/lib/gameObjects/lava.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lava; });
/* harmony import */ var _utilities_hurtPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/hurtPlayer */ "./src/lib/utilities/hurtPlayer.js");

class Lava {
  constructor(scene) {
    this.scene = scene;
    this.collide = this.scene.sound.add("burn");
    this.counter = 0;
    this.render();
  }

  render() {
    this.lavaObj = this.scene.physics.add.sprite(100, 1225, "lava");
    this.lavaObj.body.setAllowGravity(false);
    this.lavaObj.body.setAccelerationY(-0.35);
    this.lavaObj.setDepth(50);
    this.volume = 0.5;
    this.lavaSound = this.scene.sound.add("lava", { volume: this.volume });
    this.lavaSound.loop = true;

    //Collision with player
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.lavaObj,
      _utilities_hurtPlayer__WEBPACK_IMPORTED_MODULE_0__["default"],
      null,
      { this: this, enemy: this, scene: this.scene }
    );
  }

  update() {
    let distance = Math.abs(this.scene.player.character.y - this.lavaObj.y);
    this.lavaSound.volume =
      (12 - distance / 125) / 12 < 0 ? 0 : (12 - distance / 125) / 12;
  }
}


/***/ }),

/***/ "./src/lib/gameObjects/multiplierPotion.js":
/*!*************************************************!*\
  !*** ./src/lib/gameObjects/multiplierPotion.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return multiplierPotion; });
/* harmony import */ var _pickUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickUp.js */ "./src/lib/gameObjects/pickUp.js");


class multiplierPotion extends _pickUp_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(props) {
    super({
      scene: props.scene,
      type: "mPotion",
      scale: 0.4,
      group: props.group,
      xPos: props.xPos, 
      yPos: props.yPos, 
      allowGravity: true
    });
    this.multiplierSound = this.scene.sound.add("multiplierPotion");
    this.collide()
  }

  collide() {
    // Collision with score multiplier pickup
    this.scene.physics.add.overlap(
      this.scene.player.character,
      this.sprite,
      getMultiplier,
      null,
      this
    );
    // Get Multiplier function
    function getMultiplier(character, mPotion) {
      this.multiplierSound.play();
      mPotion.disableBody(true, true);

      this.scene.hud.scoreMultiplier = true;
      setTimeout(() => {
        this.scene.hud.scoreMultiplier = false;
      }, 10000);
    }
  }
}


/***/ }),

/***/ "./src/lib/gameObjects/pickUp.js":
/*!***************************************!*\
  !*** ./src/lib/gameObjects/pickUp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pickup; });
class Pickup {
  constructor(props) {
    this.scene = props.scene
    this.group = props.group;
    this.xPos = props.xPos;
    this.yPos = props.yPos;
    this.scale = props.scale;
    this.type = props.type;
    this.render();
  }

  render() {
    this.sprite = this.group.create(this.xPos, this.yPos, this.type);
    this.sprite.setDepth(100);
    this.sprite.setScale(this.scale);
    this.scene.physics.add.collider(
      this.sprite,
      this.scene.platforms
    );
  }
}


/***/ }),

/***/ "./src/lib/gameObjects/platform.js":
/*!*****************************************!*\
  !*** ./src/lib/gameObjects/platform.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
class Platform{
    constructor(props) {
        this.platforms = props.platforms
        this.walls = props.walls
        this.x = props.x
        this.y = props.y
        this.width = props.width/2
        this.type = props.type
        this.spawnBoundary()
    }

    spawnBoundary() {
        let plat=this.platforms.create(this.x, this.y, this.type);
        plat.setDepth(100)
        this.walls.create(this.x-this.width <= 0 ? 2 : this.x-this.width, this.y - 65, "wall");
        this.walls.create(this.x+this.width >= 800 ? 797 : this.x+this.width, this.y - 65, "wall");
        this.walls.setVisible(false)
      }

}

/***/ }),

/***/ "./src/lib/gameObjects/player.js":
/*!***************************************!*\
  !*** ./src/lib/gameObjects/player.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
class Player {
  constructor(scene) {
    this.scene = scene;
    this.hurtAgain;
    this.playerStanding = true;
    this.characterFacingRight = true;
    this.enemyCollide = true;
    this.yMax = 0;
    this.scoreHeight = 500;
    this.deathSound = this.scene.sound.add("deathSound");
    this.render();
    this.animate();
  }

  render() {
    //Adds player character to the scene
    this.character = this.scene.physics.add.sprite(400, 438, "character");
    this.character.setCollideWorldBounds(true);
    this.character.setDepth(5);
    this.scene.physics.add.collider(this.character, this.scene.platforms);
    this.yStart = this.character.y;
    this.getPoints = this.scene.sound.add("scoreIncrease");
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  animate() {
    this.scene.anims.create({
      key: "right",
      frames: this.scene.anims.generateFrameNumbers("walk", {
        start: 0,
        end: 1
      }),
      repeat: -1,
      frameRate: 20
    });

    this.scene.anims.create({
      key: "left",
      frames: this.scene.anims.generateFrameNumbers("walk_b", {
        start: 0,
        end: 1
      }),
      repeat: -1,
      frameRate: 20
    });

    this.scene.anims.create({
      key: "idle",
      frames: [{ key: "character", frame: 0 }]
    });

    this.scene.anims.create({
      key: "idle_b",
      frames: [{ key: "character_b", frame: 0 }]
    });

    this.scene.anims.create({
      key: "jump",
      frames: [{ key: "jump", frame: 0 }],
      repeat: -1,
      frameRate: 20
    });

    this.scene.anims.create({
      key: "jump_b",
      frames: [{ key: "jump_b", frame: 0 }],
      repeat: -1,
      frameRate: 20
    });
  }

  update() {
    //Record player maximum height
    this.yMax = Math.max(this.yMax, Math.abs(this.character.y - this.yStart));

    //Handle jumping
    if (this.character.body.onFloor() && this.cursors.up.isDown) {
      this.characterFacingRight
        ? this.character.anims.play("jump", true)
        : this.character.anims.play("jump_b", true);
      this.character.setVelocityY(-235);
    }

    // Holding arrow keys while jumping right
    else if (
      this.cursors.right.isDown &&
      this.character.body.onFloor() &&
      this.cursors.up.isDown
    ) {
      this.character.anims.play("jump", true);
      this.character.setVelocityY(-235);
      this.character.setVelocityX(200);
      this.characterFacingRight = true;
    }

    // Holding arrow keys while jumping left
    else if (
      this.cursors.left.isDown &&
      this.character.body.onFloor() &&
      this.cursors.up.isDown
    ) {
      this.character.anims.play("jump_b", true);
      this.character.setVelocityY(-235);
      this.character.setVelocityX(-200);
      this.characterFacingRight = false;
    }

    // Controlling right in mid-air
    else if (this.cursors.right.isDown && !this.character.body.onFloor()) {
      this.character.anims.play("jump", true);
      this.character.setVelocityX(200);
      this.characterFacingRight = true;
    }

    // Controlling left in mid-air
    else if (this.cursors.left.isDown && !this.character.body.onFloor()) {
      this.character.anims.play("jump_b", true);
      this.character.setVelocityX(-200);
      this.characterFacingRight = false;
    }

    //Moving right on ground
    else if (this.cursors.right.isDown && this.character.body.onFloor()) {
      this.character.anims.play("right", true);
      this.character.setVelocityX(275);
      this.characterFacingRight = true;

      //Moving left on ground
    } else if (this.cursors.left.isDown && this.character.body.onFloor()) {
      this.character.anims.play("left", true);
      this.character.setVelocityX(-275);
      this.characterFacingRight = false;
    }

    //Resetting animation on idle
    else if (this.character.body.onFloor()) {
      this.character.setVelocityX(0);
      this.characterFacingRight
        ? this.character.anims.play("idle", true)
        : this.character.anims.play("idle_b", true);
    }

    //Update score based on heighest point reached, increasing every 500
    if (this.character.y < this.scoreHeight - 500) {
      this.scoreHeight -= 500;
      this.scene.hud.score += this.scene.hud.scoreMultiplier ? 200 : 100;
      this.scene.hud.scoreText.setText(`Score:${this.scene.hud.score}`);
      this.getPoints.play();
    }
  }
}


/***/ }),

/***/ "./src/lib/scenes/hud.js":
/*!*******************************!*\
  !*** ./src/lib/scenes/hud.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hud; });
class Hud extends Phaser.Scene {
  constructor() {
    super("hud");
    this.score = 0;
    this.health = 3;
    this.soundContent = "ON";
    this.scoreMultiplier = false;
  }

  create() {
    // Score
    this.scoreText = this.add.text(20, 20, `Score:${this.score}`, {
      fontSize: "32px",
      fill: "#ee3231"
    });

    // Multipler Text
    this.multiplierText = this.add.text(500, 48, "Score Multiplier Active!", {
      fontSize: "20px",
      fill: "#ee3231"
    });
    this.multiplierText.visible = false;

    // Health
    this.healthText = this.add.text(20, 50, "Health: ", {
      fontSize: "32px",
      fill: "#ee3231"
    });

    this.healthImage = this.add.image(198, 66, `heart_${this.health}`);

    this.oldHealth = this.health;

    // Sound Toggle
    this.soundText = this.add.text(620, 20, `Sound:${this.soundContent}`, {
      fontSize: "32px",
      fill: "#ee3231"
    });
    this.oKey = this.input.keyboard.addKey("O");
  }

  update() {
    // Player can turn sound off with "o" key
    this.oKey.onDown = () => {
      this.soundContent = this.soundContent === "ON" ? "OFF" : "ON";
      this.sound.mute = this.soundContent === "OFF" ? true : false;
      this.soundText.setText(`Sound:${this.soundContent}`);
    };

    //Updates visibility based on multiplier potion pickup
    this.multiplierText.visible = this.scoreMultiplier;

    //Updates image
    if (this.oldHealth != this.health) {
      this.oldHealth = this.health;
      this.healthImage.destroy();
      this.healthImage = this.add.image(198, 66, `heart_${this.health}`);
    }
  }
}


/***/ }),

/***/ "./src/lib/scenes/main.js":
/*!********************************!*\
  !*** ./src/lib/scenes/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _hud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hud.js */ "./src/lib/scenes/hud.js");
/* harmony import */ var _gameObjects_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameObjects/platform.js */ "./src/lib/gameObjects/platform.js");
/* harmony import */ var _gameObjects_lava_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameObjects/lava.js */ "./src/lib/gameObjects/lava.js");
/* harmony import */ var _gameObjects_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameObjects/player.js */ "./src/lib/gameObjects/player.js");
/* harmony import */ var _gameObjects_multiplierPotion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gameObjects/multiplierPotion.js */ "./src/lib/gameObjects/multiplierPotion.js");
/* harmony import */ var _gameObjects_invinciblePotion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameObjects/invinciblePotion.js */ "./src/lib/gameObjects/invinciblePotion.js");
/* harmony import */ var _gameObjects_heart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gameObjects/heart.js */ "./src/lib/gameObjects/heart.js");
/* harmony import */ var _gameObjects_coin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gameObjects/coin.js */ "./src/lib/gameObjects/coin.js");
/* harmony import */ var _gameObjects_enemy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gameObjects/enemy.js */ "./src/lib/gameObjects/enemy.js");
/* harmony import */ var _utilities_pauseUtil_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/pauseUtil.js */ "./src/lib/utilities/pauseUtil.js");
/* harmony import */ var _utilities_outOfBounds_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/outOfBounds.js */ "./src/lib/utilities/outOfBounds.js");











class Main extends Phaser.Scene {
  constructor(game) {
    super("main");
    this.game = game;
    this.nextSet = 2;
    this.heighestBoundary = 500; //Heighest point player reached. For scoring purposes.
    this.heightIncrease = -400; //Next height to increase for platforms
    this.latestEnvHeight = 0;
  }

  create() {
    //Background
    this.backGround = this.add.image(400, 300, "background");

    // Background Music
    this.backgroundMusic = this.sound.add("backgroundMusic", { volume: 0.35 });
    this.backgroundMusic.loop = true;
    this.backgroundMusic.play();

    // Invincible Music
    this.invincibleMusic = this.sound.add("invincibleMusic", { volume: 0.35 });
    this.invincibleMusic.loop = true;

    // Pause Sound
    this.pauseSound = this.sound.add("pauseSound");

    //HUD
    this.hud = this.scene.add("hud", new _hud_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
    this.scene.launch("hud");

    // Powerups
    this.pickups = this.physics.add.group();

    // //Boundaries
    this.renderBoundary();

    // Player
    this.player = new _gameObjects_player_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);

    // Lava
    this.lava = new _gameObjects_lava_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.lava.lavaSound.play();

    //Enemies
    this.enemies = this.physics.add.group();

    // Initial Boundaries
    this.createBoundary(1, 0, 346, "platform");
    this.createBoundary(2, 0, 346, "platform");
    this.createBoundary(3, 0, 346, "platform");

    // Set Camera Bounds
    this.cameras.main.startFollow(this.player.character, true, 0, 1);
    this.cameras.main.setBackgroundColor(0xcbeffc);
  }

  renderBoundary() {
    // Static Groups
    this.platforms = this.physics.add.staticGroup();
    this.walls = this.physics.add.staticGroup();
    this.physics.collide(this.platforms, this.walls);

    // Ground
    let ground = this.platforms.create(280, 500, "platform");
    ground.setDepth(25);

    //Hash map that stores boundaries
    this.boundaryList = new Map();
    this.boundaryList.set(1, [
      [650, 450],
      [175, 375],
      [0, 285],
      [-100, 200]
    ]);

    this.boundaryList.set(2, [
      [350, 160],
      [700, 100],
      [925, 15]
    ]);

    this.boundaryList.set(3, [
      [360, -40],
      [10, -110],
      [-125, -195]
    ]);

    // Background sprites group
    this.backSprites = this.physics.add.group();

    //Last boundary is always on top so set it as the heighest
    this.heighestBoundary = this.platforms.getChildren()[
      this.platforms.getChildren().length - 1
    ].y;
  }

  //Method Creates platform, random item or enemy and invisible wall
  createBoundary(set, yAdjust, width, type) {
    for (let i = 0; i < this.boundaryList.get(set).length; i++) {
      let xPos = this.boundaryList.get(set)[i][0];
      let yPos = this.boundaryList.get(set)[i][1] + yAdjust;
      new _gameObjects_platform_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        platforms: this.platforms,
        walls: this.walls,
        x: xPos,
        y: yPos,
        width: width,
        type: type
      });
      let randInt = Phaser.Math.Between(1, 5);
      if (randInt === 1 && xPos >= 10 && xPos < 900) {
        this.renderRandomEnemy(xPos + 50, yPos);
      } else if (randInt === 2) {
        this.renderRandomPowerUp(xPos, yPos);
      }

      let xStart = Phaser.Math.Between(50, 650);
      if (
        Phaser.Math.Between(0, 5) === 1 &&
        this.latestEnvHeight - 200 > yPos &&
        this.player.character.y < -1500
      ) {
        if (this.player.character.y > -8500) {
          let backgroundObj = this.backSprites.create(
            xStart,
            yPos - 125,
            "cloud"
          );
          backgroundObj.setVelocityX(xStart < 300 ? 10 : -10);
          backgroundObj.setDepth(1);
          backgroundObj.body.setAllowGravity(false);
          this.latestEnvHeight = yPos;
        }
      } else if (this.player.character.y < -9500) {
        let backgroundObj = this.backSprites.create(xStart, yPos, "star");
        backgroundObj.setScale(0.25);
        backgroundObj.setDepth(1);
        
        this.latestEnvHeight = yPos;
      }
    }
  }
  renderEnemyOne(xPos, yPos) {
    new _gameObjects_enemy_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      scene: this,
      speed: -40,
      type: "enemyOne",
      scale: 0.085,
      group: this.enemies,
      xPos: xPos,
      yPos: yPos,
      allowGravity: true,
      frameRate: 5
    });
  }

  renderEnemyTwo(xPos, yPos) {
    new _gameObjects_enemy_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      scene: this,
      speed: 80,
      type: "enemyTwo",
      scale: 0.065,
      group: this.enemies,
      xPos: xPos,
      yPos: yPos,
      allowGravity: true,
      frameRate: 5
    });
  }

  renderEnemyThree(xPos, yPos) {
    new _gameObjects_enemy_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      scene: this,
      speed: -50,
      type: "enemyThree",
      scale: 0.75,
      group: this.enemies,
      xPos: xPos,
      yPos: yPos,
      allowGravity: false,
      frameRate: 5
    });
  }

  renderRandomEnemy(xPos, yPos) {
    let randInt = Phaser.Math.Between(1, 3);
    if (randInt === 1) {
      this.renderEnemyOne(xPos, yPos - 32.5);
    } else if (randInt === 2) {
      this.renderEnemyTwo(xPos, yPos - 37.5);
    } else if (randInt === 3) {
      this.renderEnemyThree(xPos, yPos - 50);
    }
  }

  renderRandomPowerUp(xPos, yPos) {
    if (xPos >= 925) {
      xPos = 775;
    } else if (xPos < 0) {
      xPos = 25;
    } else if (xPos <= 15) {
      xPos = 75;
    }
    let randInt = Phaser.Math.Between(1, 4);
    if (randInt === 1) {
      new _gameObjects_multiplierPotion_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 38
      });
    } else if (randInt === 2) {
      new _gameObjects_invinciblePotion_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 38
      });
    } else if (randInt === 3) {
      new _gameObjects_coin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 35
      });
    } else if (randInt === 4) {
      new _gameObjects_heart_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        scene: this,
        group: this.pickups,
        xPos: xPos,
        yPos: yPos - 30
      });
    }
  }

  update() {
    this.player.update();
    this.lava.update();

    Object(_utilities_outOfBounds_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, this.enemies);
    Object(_utilities_outOfBounds_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, this.pickups);
    Object(_utilities_outOfBounds_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, this.platforms);
    Object(_utilities_outOfBounds_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, this.backSprites);

    Object(_utilities_pauseUtil_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "main");

    this.physics.world.bounds.setTo(
      0,
      -this.player.yMax,
      this.game.scale.width,
      this.game.scale.height + this.player.yMax
    );

    if (this.heighestBoundary + 500 > this.player.character.y) {
      this.createBoundary(this.nextSet, this.heightIncrease, 346, "platform");
      this.nextSet = this.nextSet === 2 ? 3 : 2;
      this.heightIncrease -= this.nextSet === 2 ? 400 : 0;
      this.heighestBoundary = this.platforms.getChildren()[
        this.platforms.getChildren().length - 1
      ].y;
    }

    //Adjusts background based on player height
    if (this.player.character.y < 0) {
      if (this.player.character.y < -2500 && this.player.character.y > -4500)
        this.cameras.main.setBackgroundColor(0x9fe1f9);
      else if (
        this.player.character.y < -4500 &&
        this.player.character.y > -5500
      )
        this.cameras.main.setBackgroundColor(0x6ed2f7);
      else if (
        this.player.character.y < -5500 &&
        this.player.character.y > -6500
      )
        this.cameras.main.setBackgroundColor(0x3ec3f4);
      else if (
        this.player.character.y < -6500 &&
        this.player.character.y > -7500
      )
        this.cameras.main.setBackgroundColor(0x0eb4f1);
      else if (
        this.player.character.y < -7500 &&
        this.player.character.y > -8500
      )
        this.cameras.main.setBackgroundColor(0x0b90c1);
      else if (
        this.player.character.y < -8500 &&
        this.player.character.y > -9500
      )
        this.cameras.main.setBackgroundColor(0x086c91);
      else if (
        this.player.character.y < -9500 &&
        this.player.character.y > -10500
      )
        this.cameras.main.setBackgroundColor(0x064860);
      else if (
        this.player.character.y < -10500 &&
        this.player.character.y > -11500
      )
        this.cameras.main.setBackgroundColor(0x032430);
      else if (this.player.character.y < -11500)
        this.cameras.main.setBackgroundColor(0x000000);
    }

    if (this.hud.health === 0) {
      this.backgroundMusic.destroy();
      this.lava.lavaSound.destroy();
      setTimeout(() => {
        this.player.deathSound.play();
        this.scene.remove("hud");
        this.scene.start("over", { score: this.hud.score }), 100;
      });
    }
  }
}


/***/ }),

/***/ "./src/lib/scenes/menu.js":
/*!********************************!*\
  !*** ./src/lib/scenes/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  create() {
    this.add.image(400, 300, "background");
    this.add.text(207.5, 50, "The Floor is Lava!", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#000000"
    });

    this.add.text(185, 400, "Press Enter to Start", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#000000"
    });
    this.enterKey = this.input.keyboard.addKey("ENTER");
  }

  update() {
    this.enterKey.onDown = () => {
      this.scene.start("main");
    };
  }
}


/***/ }),

/***/ "./src/lib/scenes/over.js":
/*!********************************!*\
  !*** ./src/lib/scenes/over.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Over; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/lib/scenes/main.js");

class Over extends Phaser.Scene {
  constructor() {
    super("over");
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    this.scene.remove("main");
    this.scene.add("main", new _main_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.scene.game));
    this.enterKey = this.input.keyboard.addKey("ENTER");
    this.add.image(400, 300, "lava");
    this.add.text(275, 50, "Game Over", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#ffffff"
    });
    this.add.text(230, 200, `Final Score: ${this.finalScore}`, {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#ffffff"
    });
    this.add.text(140, 400, "Press ENTER to Try Again", {
      fontFamily: "inGame",
      fontSize: "60px",
      color: "#ffffff"
    });
  }

  update() {
    this.enterKey.onDown = () => {
      this.scene.start("main");
    };
  }
}


/***/ }),

/***/ "./src/lib/scenes/pause.js":
/*!*********************************!*\
  !*** ./src/lib/scenes/pause.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pause; });
/* harmony import */ var _utilities_pauseUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/pauseUtil.js */ "./src/lib/utilities/pauseUtil.js");


class Pause extends Phaser.Scene {
  constructor() {
    super("pause");
  }

  create() {
    this.pauseImage = this.add.image(400, 300, "pauseImage");
    this.pauseImage.setDepth(200)
    this.pauseSound = this.sound.add("pauseSound")
  }

  update() {
    Object(_utilities_pauseUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pause");
  }
}


/***/ }),

/***/ "./src/lib/scenes/preload.js":
/*!***********************************!*\
  !*** ./src/lib/scenes/preload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preload; });
class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    let pBox = this.add.graphics();
    pBox.fillStyle(0x222222, 0.8);
    pBox.fillRect(240, 270, 335, 35);
    let loadText = this.make.text({
      x: 350,
      y: 240,
      text: "Loading...",
      style: {
        font: "30px"
      }
    });

    let pBar = this.add.graphics();

    this.load.on("progress", function(val) {
      pBar.fillStyle(0xffffff, 1);
      pBar.fillRect(245, 275, 325 * val, 25);
    });

    this.load.on("complete", () => {
      pBox.destroy();
      pBar.destroy();
      loadText.destroy();
    });
    
    //Load Enviornment Assetss
    this.load.image("background", "/src/assets/env/background.png");
    this.load.image("platform", "/src/assets/env/grass.png");
    this.load.image("platformSmall", "/src/assets/env/grassSmall.png");
    this.load.image("lava", "/src/assets/env/lava.png");
    this.load.image("wall", "/src/assets/env/invisibleWall.png");
    this.load.image("cloud", "/src/assets/env/cloud.png");
    this.load.image("star", "/src/assets/env/star.png");

    // Health
    this.load.image("heart_3", "/src/assets/sprites/heartThree.png");
    this.load.image("heart_2", "/src/assets/sprites/heartTwo.png");
    this.load.image("heart_1", "/src/assets/sprites/heartOne.png");
    this.load.image("heart_0", "/src/assets/sprites/heartZero.png");

    // Heart to Pick Up
    this.load.spritesheet("heart", "/src/assets/sprites/heartInGame.png", {
      frameWidth: 50,
      frameHeight: 20
    });

    // Coin
    this.load.spritesheet("coin", "/src/assets/sprites/coin.png", {
      frameWidth: 563,
      frameHeight: 564
    });

    // Ground Enemy
    this.load.spritesheet("enemyOne", "/src/assets/sprites/enemyOne.png", {
      frameWidth: 350,
      frameHeight: 371
    });

    // Ground Enemy 2
    this.load.spritesheet("enemyTwo", "/src/assets/sprites/enemyTwo.png", {
      frameWidth: 580,
      frameHeight: 650
    });

    // Enemy 3
    this.load.spritesheet("enemyThree", "/src/assets/sprites/enemyThree.png", {
      frameWidth: 60,
      frameHeight: 48
    });

    // Invincibility Potion
    this.load.spritesheet(
      "iPotion",
      "/src/assets/sprites/invincibilityPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Score Multiplier Potion
    this.load.spritesheet(
      "mPotion",
      "/src/assets/sprites/multiplierPotion.png",
      {
        frameWidth: 125,
        frameHeight: 120
      }
    );

    // Player
    this.load.spritesheet("character", "/src/assets/sprites/stand.png", {
      frameWidth: 67,
      frameHeight: 92
    });

    this.load.spritesheet("character_b", "/src/assets/sprites/standBackFacing.png", {
      frameWidth: 67,
      frameHeight: 92
    });
    this.load.spritesheet("walk", "/src/assets/sprites/walk.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("walk_b", "/src/assets/sprites/walkBackFacing.png", {
      frameWidth: 80,
      frameHeight: 92
    });
    this.load.spritesheet("jump", "/src/assets/sprites/jump.png", {
      frameWidth: 80,
      frameHeight: 96
    });
    this.load.spritesheet("jump_b", "/src/assets/sprites/jumpBackFacing.png", {
      frameWidth: 80,
      frameHeight: 96
    });

    // Pause Button and sound
    this.load.image("pauseImage", "/src/assets/env/pause.png");
    this.load.audio("pauseSound", "/src/assets/sounds/pause.mp3");

    // Main Scene Sounds
    this.load.audio("collectCoin", "/src/assets/sounds/coinCollect.mp3");
    this.load.audio("collectHeart", "/src/assets/sounds/getHeart.mp3");
    this.load.audio(
      "coinMultiplierCollect",
      "/src/assets/sounds/coinMultiplierCollect.mp3"
    );
    this.load.audio(
      "multiplierPotion",
      "/src/assets/sounds/multiplierPotion.mp3"
    );
    this.load.audio("collideEnemy", "/src/assets/sounds/collideEnemy.mp3");
    this.load.audio("scoreIncrease", "/src/assets/sounds/heightIncrease.mp3");

    //Death Sound
    this.load.audio("deathSound", "/src/assets/sounds/deathSound.mp3");

    // Background Music
    this.load.audio(
      "backgroundMusic",
      "/src/assets/music/backgroundMusic.wav"
    );
    this.load.audio(
      "invincibleMusic",
      "/src/assets/music/invincibleMusic.wav"
    );

    // Lava Sound Effects
    this.load.audio("lava", "/src/assets/sounds/lavaApproaching.mp3");
    this.load.audio("burn", "/src/assets/sounds/burn.mp3");

  }

  create() {
    this.scene.start("menu");
  }
}


/***/ }),

/***/ "./src/lib/utilities/hurtPlayer.js":
/*!*****************************************!*\
  !*** ./src/lib/utilities/hurtPlayer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hurtPlayer; });
//Function used by Phaser physics add collider method, this is passed through as a parameter within the callback function
function hurtPlayer() {
  if (this.scene.player.enemyCollide && this.scene.hud.health !== 0) {

    this.scene.hud.health -= 1;
    this.scene.player.enemyCollide = false;
    this.enemy.collide.play();

    let hurt = setInterval(() => {
      (this.scene.player.character.tint = this.scene.player.hurtAgain
        ? 0xff0000
        : 0xffffff),
        (this.scene.player.hurtAgain = !this.scene.player.hurtAgain);
    }, 100);

    setTimeout(() => {
      clearInterval(hurt);
    }, 500);
    setTimeout(() => {
      this.scene.player.enemyCollide = true;
      this.scene.player.character.clearTint();
    }, 750);
  }
}


/***/ }),

/***/ "./src/lib/utilities/outOfBounds.js":
/*!******************************************!*\
  !*** ./src/lib/utilities/outOfBounds.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return outOfBounds; });
// Method checks if the first and lowest group child is below the lava. If it is, remove it.
function outOfBounds(scene, group) {
  if (group.getChildren().length > 0) {
    if (
      group.getChildren()[0].y > scene.lava.lavaObj.y ||
      group.getChildren()[0].x < -100 ||
      group.getChildren()[0].x > 900
    ) {
      group.getChildren()[0].destroy();
    }
  }
}


/***/ }),

/***/ "./src/lib/utilities/pauseUtil.js":
/*!****************************************!*\
  !*** ./src/lib/utilities/pauseUtil.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pauseFunction; });
function pauseFunction(currentScene, sceneKey) {
  let pKey = currentScene.input.keyboard.addKey("P");

  pKey.onDown = () => {
    if (sceneKey === "main") {
      currentScene.pauseSound.play()
      currentScene.scene.pause("main");
      currentScene.scene.launch("pause");
    } else{
      currentScene.pauseSound.play()
      currentScene.scene.stop("pause");
      currentScene.scene.resume("main");
    }
  };
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map