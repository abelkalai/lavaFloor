import Enemy from "/static/lib/gameObjects/enemy.js";

export default class Enemythree extends Enemy{
    constructor(scene){
        super({
            scene: scene,
            speed : -50,
            type : "enemyThree",
            scale : 0.75,
            xPos : 600,
            yPos : 200,
            allowGravity : false,
            frameRate : 5,
        })
    }
}