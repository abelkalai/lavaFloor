const game = new Phaser.Game({type: Phaser.AUTO, width:800, height: 600,
    physics:{
        default: 'arcade',
        arcade:{
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
    preload: preload,
    create: create,
    update: update
}})

function preload (){
    this.load.image('background','static/assets/env/background.png');
    this.load.spritesheet('player','static/assets/sprites/spritesheet.png', {frameWidth: 80, frameHeight: 110});
}

function create (){
    this.add.image(400,300,'background');
    this.add.image(200,150,'player',10)
    
}

function update (){

}