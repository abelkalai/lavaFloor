import Enemy from "/static/lib/gameObjects/supers/enemy.js";
export default class Enemyone extends Enemy {
  constructor(props) {
    super({
      scene: props.scene,
      speed: -40,
      type: "enemyOne",
      scale: 0.085,
      group: props.group,
      xPos: props.xPos,
      yPos: props.yPos,
      allowGravity: true,
      frameRate: 5
    });
  }
}
