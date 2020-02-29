# The Floor is Lava

## About

Climb up across the platforms to get the highest score you can while collecting powerups and avoiding enemies. Watch your health bar
and don't climb too slowly or the lava will catch up to you.

## How to Play

* Touching enemies or lava lowers the number of hearts you have. Once you have 0 hearts, the game's over.
* Use the left and right arrow keys to move and the up arrow key to jump
* Use the 'O' key to toggle the sound on or off
* Use the 'P' key to pause and resume the game
* Gain points as you collect coins and climb

* Be Aware of enemies and try not to touch them:
  * Spiky Monster: Slowly crawls along
  * Blue Monster: Runs at a quick pace
  * Bee: Flies in the air at a medium speed

* Collect pickups on the way to give yourself an extra boost:
  * Heart: Restores 1 Heart
  * Coin: Gain 50 points
  * Blue Potion: Gain a temporary score multiplier
  * Purple Potion: Gain temporary invincibility to enemies and lava

## Techologies

* Phaser.js was used for the game logic along with classes, scoring, enemies and items
* Express server serves the game and handles get requests

## Features

* Camera follows player as you ascends or descends the game.
* Randomly generates enemies and powerups as the player climbs higher  
* Collision detection and event handling
* Game Bound updates based on player height.

## Future Plans

* Add a Main Menu
* Add additional enemies
* Add invincibility that can knock over and remove enemies
* Add additional powerups
* Implement some difficulty setting that would affect number of enemies, speed of lava etc.
