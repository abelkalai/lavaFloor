import Enemy from "/static/lib/gameObjects/enemy.js";

export default class Enemytwo extends Enemy {
  constructor(props) {
    super({
      scene: props.scene,
      speed: 80,
      type: "enemyTwo",
      scale: 0.065,
      group: props.group,
      xPos: props.xPos,
      yPos: props.yPos,
      allowGravity: true,
      frameRate: 5
    });
  }
}
