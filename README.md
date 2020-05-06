# The Floor is Lava

[Play Now!](https://immense-citadel-20809.herokuapp.com/)

![demo](/src/assets/gifs/demo.gif)

## About

Climb up across the platforms to get the highest score you can while collecting powerups and avoiding enemies. Watch your health bar
and don't climb too slowly or the lava will catch up to you.

## How to Play

- Touching enemies or lava lowers the number of hearts you have. Once you have 0 hearts, the game's over.
- Use the left and right arrow keys to move and the up arrow key to jump
- Use the 'O' key to toggle the sound on or off
- Use the 'P' key to pause and resume the game
- Gain points as you collect coins and climb

- Beware of enemies and try not to touch them:

  - Spiky Monster: Slowly crawls along
  - Blue Monster: Runs at a quick pace
  - Bee: Flies in the air at a medium speed

- Collect pickups on the way to give yourself an extra boost:
  - Heart: Restores 1 Heart
  - Coin: Gain 50 points
  - Blue Potion: Gain a temporary score multiplier
  - Purple Potion: Gain temporary invincibility to enemies and lava

## Techologies

- Phaser.js framework was used for the game logic along with classes, scoring, enemies and items
- Express server for the web server

## Features

### Classes

Similarly functioning objects were grouped into classes to DRY up code. For example, all enemies have similar properties and methods such as (`xPos`, `speed`, `animate`). The `Enemy` class was used as a template to reduce the amount of repetitive code.

```javascript
class Enemy {
    constructor(props) {
      this.scene = props.scene;
      this.speed = props.speed;
      this.type = props.type;
      this.scale = props.scale;
      this.xPos = props.xPos;
      this.yPos = props.yPos;
      ...
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
}

renderEnemyOne(xPos, yPos) {
  new Enemy({
    scene: this,
    speed: -40,
    type: "enemyOne",
    scale: 0.085,
    ...
  });
}
```

### Spawning and Despawning (Platforms, Pickups & Enemies)

The game objects the player interacts with are not all loaded at once. They're dynamically created and removed based on the player's height. The world bounds are updated based on the player's current height and highest height achieved. Every 500 pixels in height the player gains causes platforms, pickups and enemies to spawn. Likewise, if an item falls below the lava it is de-spawned (In Phaser an object going up will have more negative values).

```javascript
 update() {
   ...
  this.physics.world.bounds.setTo(
      0,
      -this.player.yMax,
      this.game.scale.width,
      this.game.scale.height + this.player.yMax
    );

    if (this.heighestBoundary + 500 > this.player.character.y) {
      this.createBoundary(
        this.boundarySetSet,
        this.heightIncrease,
        346,
        "platform"
      );
      ...
    }
 }

function outOfBounds(scene, group) {
  if (group.getChildren().length > 0) {
      if (group.getChildren()[0].y > scene.lava.lavaObj.y) {
        group.getChildren()[0].destroy();
    }
  }
}
```

### Invisible Walls

The enemies in the game scroll back and forth across the platform. This is thanks to invisible walls that lie on the edges of platforms. Whenever the enemy collides with the invisible wall they reverse direction and their image is flipped horizontally.

```javascript
spawnBoundary() {
   const platform = this.platforms.create(this.x, this.y, this.type);
    platform.setDepth(100);
    this.walls.create(
      this.x - this.width <= 0 ? 2 : this.x - this.width,
      this.y - 65,
      "wall"
    );
    this.walls.create(
      this.x + this.width >= 800 ? 797 : this.x + this.width,
      this.y - 65,
      "wall"
    );
    this.walls.setVisible(false);
  }
}

update() {
  ...
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

```

### Phaser Scenes

Phaser JS provides many useful classes out of the box such as scenes. Scenes can represent diffrent states of the game such as menu, pause and game over. Another use of scenes is overlaying. For example the HUD sits on top of the main game scene. It's independent from the main game scene so it doesn't need to know anything about the camera position or game objects.

```javascript
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
    ...
  }

  update() {
    // Player can turn sound off with "o" key
    this.oKey.onDown = () => {
      this.soundContent = this.soundContent === "ON" ? "OFF" : "ON";
      this.sound.mute = this.soundContent === "OFF" ? true : false;
      this.soundText.setText(`Sound:${this.soundContent}`);
    };
  }
}

```

## Future Plans

- Add additional enemies
- Enhance invincibility to knock over and remove enemies
- Implement some difficulty setting that would affect number of enemies, speed of lava etc.
