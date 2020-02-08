export default class Lava {
    constructor(scene){
        this.scene = scene;
        scene.lava = this;
        this.render();
    }

    render(){
        this.scene.add.sprite(500, 700, "lava");
        //setAccelerationY(value)
    }
}