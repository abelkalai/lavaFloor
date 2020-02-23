import Enemy from "/static/lib/gameObjects/supers/enemy.js";

export default class Enemythree extends Enemy {
  constructor(props) {
    super({
      scene: props.scene,
      speed: -50,
      type: "enemyThree",
      scale: 0.75,
      group: props.group,
      xPos: props.xPos,
      yPos: props.yPos,
      allowGravity: false,
      frameRate: 5
    });
  }
}
