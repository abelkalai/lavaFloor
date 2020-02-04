export default class Boot extends Phaser.Scene{
    constructor(){
        super('boot')
    }
    preload(){
        //Add Github logo and information, add progress bar
    }
    create(){
        this.scene.start('preload')
    }
}