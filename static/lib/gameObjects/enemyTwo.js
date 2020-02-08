import Enemy from "/static/lib/gameObjects/enemy.js";

export default class Enemytwo extends Enemy{
    constructor(scene){
        super({
            scene: scene,
            speed : 80,
            type : "enemyTwo",
            scale : 0.065,
            xPos : 290,
            yPos : 120,
            allowGravity : true,
            frameRate : 5
        })
        this.scene.enemyTwo=this
    }
}