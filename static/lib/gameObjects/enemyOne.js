import Enemy from "/static/lib/gameObjects/enemy.js";
export default class Enemyone extends Enemy{
    constructor(scene){
        super({
            scene: scene,
            speed : -40,
            type : "enemyOne",
            scale : 0.085,
            xPos : 600,
            yPos : 418,
            allowGravity : true,
            frameRate : 5,
        })
        this.scene.enemyOne=this
    }
}