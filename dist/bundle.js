!function(e){var t={};function s(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);class i extends Phaser.Scene{constructor(){super("preload")}preload(){let e=this.add.graphics();e.fillStyle(2236962,.8),e.fillRect(240,270,335,35);let t=this.make.text({x:350,y:240,text:"Loading...",style:{font:"30px"}}),s=this.add.graphics();this.load.on("progress",(function(e){s.fillStyle(16777215,1),s.fillRect(245,275,325*e,25)})),this.load.on("complete",()=>{e.destroy(),s.destroy(),t.destroy()}),this.load.image("background","/static/assets/env/background.png"),this.load.image("platform","/static/assets/env/grass.png"),this.load.image("platformSmall","/static/assets/env/grassSmall.png"),this.load.image("lava","/static/assets/env/lava.png"),this.load.image("wall","/static/assets/env/invisibleWall.png"),this.load.image("cloud","/static/assets/env/cloud.png"),this.load.image("star","/static/assets/env/star.png"),this.load.image("heart_3","/static/assets/sprites/heart_3.png"),this.load.image("heart_2","/static/assets/sprites/heart_2.png"),this.load.image("heart_1","/static/assets/sprites/heart_1.png"),this.load.image("heart_0","/static/assets/sprites/heart_0.png"),this.load.spritesheet("heart","/static/assets/sprites/heart_world.png",{frameWidth:50,frameHeight:20}),this.load.spritesheet("coin","/static/assets/sprites/coin.png",{frameWidth:563,frameHeight:564}),this.load.spritesheet("enemyOne","/static/assets/sprites/enemy_1.png",{frameWidth:350,frameHeight:371}),this.load.spritesheet("enemyTwo","/static/assets/sprites/enemy_2.png",{frameWidth:580,frameHeight:650}),this.load.spritesheet("enemyThree","/static/assets/sprites/enemy_3.png",{frameWidth:60,frameHeight:48}),this.load.spritesheet("iPotion","/static/assets/sprites/invincibilityPotion.png",{frameWidth:125,frameHeight:120}),this.load.spritesheet("mPotion","/static/assets/sprites/multiplierPotion.png",{frameWidth:125,frameHeight:120}),this.load.spritesheet("character","/static/assets/sprites/stand.png",{frameWidth:67,frameHeight:92}),this.load.spritesheet("character_b","/static/assets/sprites/stand_b.png",{frameWidth:67,frameHeight:92}),this.load.spritesheet("walk","/static/assets/sprites/walk.png",{frameWidth:80,frameHeight:92}),this.load.spritesheet("walk_b","/static/assets/sprites/walk_b.png",{frameWidth:80,frameHeight:92}),this.load.spritesheet("jump","/static/assets/sprites/jump.png",{frameWidth:80,frameHeight:96}),this.load.spritesheet("jump_b","/static/assets/sprites/jump_b.png",{frameWidth:80,frameHeight:96}),this.load.image("pauseImage","/static/assets/env/pause.png"),this.load.audio("pauseSound","/static/assets/sounds/pause.mp3"),this.load.audio("collectCoin","/static/assets/sounds/coinCollect.mp3"),this.load.audio("collectHeart","/static/assets/sounds/getHeart.mp3"),this.load.audio("coinMultiplierCollect","/static/assets/sounds/coinMultiplierCollect.mp3"),this.load.audio("multiplierPotion","/static/assets/sounds/multiplierPotion.mp3"),this.load.audio("collideEnemy","/static/assets/sounds/collideEnemy.mp3"),this.load.audio("scoreIncrease","/static/assets/sounds/heightIncrease.mp3"),this.load.audio("deathSound","/static/assets/sounds/deathSound.mp3"),this.load.audio("backgroundMusic","/static/assets/music/backgroundMusic.wav"),this.load.audio("invincibleMusic","/static/assets/music/invincibleMusic.wav"),this.load.audio("lava","/static/assets/sounds/lavaApproaching.mp3"),this.load.audio("burn","/static/assets/sounds/burn.mp3")}create(){this.scene.start("menu")}}class a extends Phaser.Scene{constructor(){super("menu")}create(){this.add.image(400,300,"background"),this.add.text(207.5,50,"The Floor is Lava!",{fontFamily:"inGame",fontSize:"60px",color:"#000000"}),this.add.text(185,400,"Press Enter to Start",{fontFamily:"inGame",fontSize:"60px",color:"#000000"}),this.enterKey=this.input.keyboard.addKey("ENTER")}update(){this.enterKey.onDown=()=>{this.scene.start("main")}}}class r{constructor(e){this.platforms=e.platforms,this.walls=e.walls,this.x=e.x,this.y=e.y,this.width=e.width/2,this.type=e.type,this.spawnBoundary()}spawnBoundary(){this.platforms.create(this.x,this.y,this.type).setDepth(100),this.walls.create(this.x-this.width<=0?2:this.x-this.width,this.y-65,"wall"),this.walls.create(this.x+this.width>=800?797:this.x+this.width,this.y-65,"wall"),this.walls.setVisible(!1)}}function h(){if(this.scene.player.enemyCollide&&0!==this.scene.hud.health){this.scene.hud.health-=1,this.scene.player.enemyCollide=!1,this.enemy.collide.play();let e=setInterval(()=>{this.scene.player.character.tint=this.scene.player.hurtAgain?16711680:16777215,this.scene.player.hurtAgain=!this.scene.player.hurtAgain},100);setTimeout(()=>{clearInterval(e)},500),setTimeout(()=>{this.scene.player.enemyCollide=!0,this.scene.player.character.clearTint()},750)}}class n{constructor(e){this.scene=e,this.collide=this.scene.sound.add("burn"),this.counter=0,this.render()}render(){this.lavaObj=this.scene.physics.add.sprite(100,1225,"lava"),this.lavaObj.body.setAllowGravity(!1),this.lavaObj.body.setAccelerationY(-.35),this.lavaObj.setDepth(50),this.volume=.5,this.lavaSound=this.scene.sound.add("lava",{volume:this.volume}),this.lavaSound.loop=!0,this.scene.physics.add.overlap(this.scene.player.character,this.lavaObj,h,null,{this:this,enemy:this,scene:this.scene})}update(){let e=Math.abs(this.scene.player.character.y-this.lavaObj.y);this.lavaSound.volume=(12-e/125)/12<0?0:(12-e/125)/12}}class c{constructor(e){this.scene=e,this.hurtAgain,this.playerStanding=!0,this.characterFacingRight=!0,this.enemyCollide=!0,this.yMax=0,this.scoreHeight=500,this.deathSound=this.scene.sound.add("deathSound"),this.render(),this.animate()}render(){this.character=this.scene.physics.add.sprite(400,438,"character"),this.character.setCollideWorldBounds(!0),this.character.setDepth(5),this.scene.physics.add.collider(this.character,this.scene.platforms),this.yStart=this.character.y,this.getPoints=this.scene.sound.add("scoreIncrease"),this.cursors=this.scene.input.keyboard.createCursorKeys()}animate(){this.scene.anims.create({key:"right",frames:this.scene.anims.generateFrameNumbers("walk",{start:0,end:1}),repeat:-1,frameRate:20}),this.scene.anims.create({key:"left",frames:this.scene.anims.generateFrameNumbers("walk_b",{start:0,end:1}),repeat:-1,frameRate:20}),this.scene.anims.create({key:"idle",frames:[{key:"character",frame:0}]}),this.scene.anims.create({key:"idle_b",frames:[{key:"character_b",frame:0}]}),this.scene.anims.create({key:"jump",frames:[{key:"jump",frame:0}],repeat:-1,frameRate:20}),this.scene.anims.create({key:"jump_b",frames:[{key:"jump_b",frame:0}],repeat:-1,frameRate:20})}update(){this.yMax=Math.max(this.yMax,Math.abs(this.character.y-this.yStart)),this.character.body.onFloor()&&this.cursors.up.isDown?(this.characterFacingRight?this.character.anims.play("jump",!0):this.character.anims.play("jump_b",!0),this.character.setVelocityY(-235)):this.cursors.right.isDown&&this.character.body.onFloor()&&this.cursors.up.isDown?(this.character.anims.play("jump",!0),this.character.setVelocityY(-235),this.character.setVelocityX(200),this.characterFacingRight=!0):this.cursors.left.isDown&&this.character.body.onFloor()&&this.cursors.up.isDown?(this.character.anims.play("jump_b",!0),this.character.setVelocityY(-235),this.character.setVelocityX(-200),this.characterFacingRight=!1):this.cursors.right.isDown&&!this.character.body.onFloor()?(this.character.anims.play("jump",!0),this.character.setVelocityX(200),this.characterFacingRight=!0):this.cursors.left.isDown&&!this.character.body.onFloor()?(this.character.anims.play("jump_b",!0),this.character.setVelocityX(-200),this.characterFacingRight=!1):this.cursors.right.isDown&&this.character.body.onFloor()?(this.character.anims.play("right",!0),this.character.setVelocityX(275),this.characterFacingRight=!0):this.cursors.left.isDown&&this.character.body.onFloor()?(this.character.anims.play("left",!0),this.character.setVelocityX(-275),this.characterFacingRight=!1):this.character.body.onFloor()&&(this.character.setVelocityX(0),this.characterFacingRight?this.character.anims.play("idle",!0):this.character.anims.play("idle_b",!0)),this.character.y<this.scoreHeight-500&&(this.scoreHeight-=500,this.scene.hud.score+=this.scene.hud.scoreMultiplier?200:100,this.scene.hud.scoreText.setText(`Score:${this.scene.hud.score}`),this.getPoints.play())}}class o extends Phaser.Scene{constructor(){super("hud"),this.score=0,this.health=3,this.soundContent="ON",this.scoreMultiplier=!1}create(){this.scoreText=this.add.text(20,20,`Score:${this.score}`,{fontSize:"32px",fill:"#ee3231"}),this.multiplierText=this.add.text(500,48,"Score Multiplier Active!",{fontSize:"20px",fill:"#ee3231"}),this.multiplierText.visible=!1,this.healthText=this.add.text(20,50,"Health: ",{fontSize:"32px",fill:"#ee3231"}),this.healthImage=this.add.image(198,66,`heart_${this.health}`),this.oldHealth=this.health,this.soundText=this.add.text(620,20,`Sound:${this.soundContent}`,{fontSize:"32px",fill:"#ee3231"}),this.oKey=this.input.keyboard.addKey("O")}update(){this.oKey.onDown=()=>{this.soundContent="ON"===this.soundContent?"OFF":"ON",this.sound.mute="OFF"===this.soundContent,this.soundText.setText(`Sound:${this.soundContent}`)},this.multiplierText.visible=this.scoreMultiplier,this.oldHealth!=this.health&&(this.oldHealth=this.health,this.healthImage.destroy(),this.healthImage=this.add.image(198,66,`heart_${this.health}`))}}class l{constructor(e){this.scene=e.scene,this.group=e.group,this.xPos=e.xPos,this.yPos=e.yPos,this.scale=e.scale,this.type=e.type,this.render()}render(){this.sprite=this.group.create(this.xPos,this.yPos,this.type),this.sprite.setDepth(100),this.sprite.setScale(this.scale),this.scene.physics.add.collider(this.sprite,this.scene.platforms)}}class d extends l{constructor(e){super({scene:e.scene,type:"mPotion",scale:.4,group:e.group,xPos:e.xPos,yPos:e.yPos,allowGravity:!0}),this.multiplierSound=this.scene.sound.add("multiplierPotion"),this.collide()}collide(){this.scene.physics.add.overlap(this.scene.player.character,this.sprite,(function(e,t){this.multiplierSound.play(),t.disableBody(!0,!0),this.scene.hud.scoreMultiplier=!0,setTimeout(()=>{this.scene.hud.scoreMultiplier=!1},1e4)}),null,this)}}class p extends l{constructor(e){super({scene:e.scene,type:"iPotion",scale:.4,group:e.group,xPos:e.xPos,yPos:e.yPos,allowGravity:!0}),this.collide()}collide(){this.scene.physics.add.overlap(this.scene.player.character,this.sprite,(function(e,t){if(this.scene.player.enemyCollide){this.scene.player.enemyCollide=!1,t.disableBody(!0,!0);let s=setInterval(()=>{e.tint=16777215*Math.random()},100);this.scene.backgroundMusic.pause(),this.scene.invincibleMusic.play(),setTimeout(()=>{this.scene.player.enemyCollide=!0,clearInterval(s),e.clearTint(),this.scene.invincibleMusic.pause(),this.scene.backgroundMusic.resume()},7500)}}),null,this)}}class u extends l{constructor(e){super({scene:e.scene,type:"heart",scale:1,group:e.group,xPos:e.xPos,yPos:e.yPos,allowGravity:!1}),this.heartSound=this.scene.sound.add("collectHeart"),this.collide()}collide(){this.scene.physics.add.overlap(this.scene.player.character,this.sprite,(function(e,t){this.scene.hud.health<=2&&(this.scene.hud.health++,this.heartSound.play(),t.disableBody(!0,!0))}),null,this)}}class y extends l{constructor(e){super({scene:e.scene,type:"coin",scale:.065,group:e.group,xPos:e.xPos,yPos:e.yPos,allowGravity:!1}),this.coinSound=this.scene.sound.add("collectCoin"),this.coinMultiplierCollect=this.scene.sound.add("coinMultiplierCollect"),this.collide()}collide(){this.scene.physics.add.overlap(this.scene.player.character,this.sprite,(function(e,t){this.scene.player.scoreMultiplier?this.coinMultiplierCollect.play():this.coinSound.play(),t.disableBody(!0,!0),this.scene.hud.score+=this.scene.hud.scoreMultiplier?100:50,this.scene.hud.scoreText.setText(`Score:${this.scene.hud.score}`)}),null,this)}}class m{constructor(e){this.scene=e.scene,this.speed=e.speed,this.type=e.type,this.scale=e.scale,this.xPos=e.xPos,this.yPos=e.yPos,this.group=e.group,this.allowGravity=e.allowGravity,this.frameRate=e.frameRate,this.collide=this.scene.sound.add("collideEnemy"),this.animate(),this.render(),this.update()}render(){this.sprite=this.group.create(this.xPos,this.yPos,this.type),this.sprite.setDepth(125),this.sprite.setScale(this.scale),this.sprite.body.setAllowGravity(this.allowGravity),this.scene.physics.add.collider(this.sprite,this.scene.platforms),this.sprite.anims.play(`${this.type}Walk`,!0),this.sprite.setVelocityX(this.speed)}animate(){this.scene.anims.create({key:`${this.type}Walk`,frames:this.scene.anims.generateFrameNumbers(this.type,{start:0,end:1}),frameRate:this.frameRate,repeat:-1})}update(){this.scene.physics.add.overlap(this.scene.player.character,this.sprite,h,null,{this:this,enemy:this,scene:this.scene}),this.scene.physics.add.overlap(this.sprite,this.scene.walls,()=>{this.sprite.setVelocityX(-this.sprite.body.velocity.x),this.sprite.toggleFlipX()})}}function g(e,t){e.input.keyboard.addKey("P").onDown=()=>{"main"==t?(e.pauseSound.play(),e.scene.pause("main"),e.scene.launch("pause")):(e.pauseSound.play(),e.scene.stop("pause"),e.scene.resume("main"))}}function f(e,t){t.getChildren().length>0&&(t.getChildren()[0].y>e.lava.lavaObj.y||t.getChildren()[0].x<-100||t.getChildren()[0].x>900)&&t.getChildren()[0].destroy()}class b extends Phaser.Scene{constructor(e){super("main"),this.game=e,this.nextSet=2,this.heighestBoundary=500,this.heightIncrease=-400,this.latestEnvHeight=0}create(){this.backGround=this.add.image(400,300,"background"),this.backgroundMusic=this.sound.add("backgroundMusic",{volume:.35}),this.backgroundMusic.loop=!0,this.backgroundMusic.play(),this.invincibleMusic=this.sound.add("invincibleMusic",{volume:.35}),this.invincibleMusic.loop=!0,this.pauseSound=this.sound.add("pauseSound"),this.hud=this.scene.add("hud",new o),this.scene.launch("hud"),this.pickups=this.physics.add.group(),this.renderBoundary(),this.player=new c(this),this.lava=new n(this),this.lava.lavaSound.play(),this.enemies=this.physics.add.group(),this.createBoundary(1,0,346,"platform"),this.createBoundary(2,0,346,"platform"),this.createBoundary(3,0,346,"platform"),this.cameras.main.startFollow(this.player.character,!0,0,1),this.cameras.main.setBackgroundColor(13365244)}renderBoundary(){this.platforms=this.physics.add.staticGroup(),this.walls=this.physics.add.staticGroup(),this.physics.collide(this.platforms,this.walls),this.platforms.create(280,500,"platform").setDepth(25),this.boundaryList=new Map,this.boundaryList.set(1,[[650,450],[175,375],[0,285],[-100,200]]),this.boundaryList.set(2,[[350,160],[700,100],[925,15]]),this.boundaryList.set(3,[[360,-40],[10,-110],[-125,-195]]),this.backSprites=this.physics.add.group(),this.heighestBoundary=this.platforms.getChildren()[this.platforms.getChildren().length-1].y}createBoundary(e,t,s,i){for(let a=0;a<this.boundaryList.get(e).length;a++){let h=this.boundaryList.get(e)[a][0],n=this.boundaryList.get(e)[a][1]+t;new r({platforms:this.platforms,walls:this.walls,x:h,y:n,width:s,type:i});let c=Phaser.Math.Between(1,5);1===c&&h>=10&&h<900?this.renderRandomEnemy(h+50,n):2===c&&this.renderRandomPowerUp(h,n);let o=Phaser.Math.Between(50,650);if(1===Phaser.Math.Between(0,5)&&this.latestEnvHeight-200>n&&this.player.character.y<-1500){if(this.player.character.y>-8500){let e=this.backSprites.create(o,n-125,"cloud");e.setVelocityX(o<300?10:-10),e.setDepth(1),e.body.setAllowGravity(!1),this.latestEnvHeight=n}}else if(this.player.character.y<-9500){let e=this.backSprites.create(o,n,"star");e.setScale(.25),e.setDepth(1),this.latestEnvHeight=n}}}renderEnemyOne(e,t){new m({scene:this,speed:-40,type:"enemyOne",scale:.085,group:this.enemies,xPos:e,yPos:t,allowGravity:!0,frameRate:5})}renderEnemyTwo(e,t){new m({scene:this,speed:80,type:"enemyTwo",scale:.065,group:this.enemies,xPos:e,yPos:t,allowGravity:!0,frameRate:5})}renderEnemyThree(e,t){new m({scene:this,speed:-50,type:"enemyThree",scale:.75,group:this.enemies,xPos:e,yPos:t,allowGravity:!1,frameRate:5})}renderRandomEnemy(e,t){let s=Phaser.Math.Between(1,3);1==s?this.renderEnemyOne(e,t-32.5):2==s?this.renderEnemyTwo(e,t-37.5):3==s&&this.renderEnemyThree(e,t-50)}renderRandomPowerUp(e,t){e>=925?e=775:e<0?e=25:e<=15&&(e=75);let s=Phaser.Math.Between(1,4);1===s?new d({scene:this,group:this.pickups,xPos:e,yPos:t-38}):2===s?new p({scene:this,group:this.pickups,xPos:e,yPos:t-38}):3===s?new y({scene:this,group:this.pickups,xPos:e,yPos:t-35}):4===s&&new u({scene:this,group:this.pickups,xPos:e,yPos:t-30})}update(){this.player.update(),this.lava.update(),f(this,this.enemies),f(this,this.pickups),f(this,this.platforms),f(this,this.backSprites),g(this,"main"),this.physics.world.bounds.setTo(0,-this.player.yMax,this.game.scale.width,this.game.scale.height+this.player.yMax),this.heighestBoundary+500>this.player.character.y&&(this.createBoundary(this.nextSet,this.heightIncrease,346,"platform"),this.nextSet=2==this.nextSet?3:2,this.heightIncrease-=2==this.nextSet?400:0,this.heighestBoundary=this.platforms.getChildren()[this.platforms.getChildren().length-1].y),this.player.character.y<0&&(this.player.character.y<-2500&&this.player.character.y>-4500?this.cameras.main.setBackgroundColor(10478073):this.player.character.y<-4500&&this.player.character.y>-5500?this.cameras.main.setBackgroundColor(7262967):this.player.character.y<-5500&&this.player.character.y>-6500?this.cameras.main.setBackgroundColor(4113396):this.player.character.y<-6500&&this.player.character.y>-7500?this.cameras.main.setBackgroundColor(963825):this.player.character.y<-7500&&this.player.character.y>-8500?this.cameras.main.setBackgroundColor(757953):this.player.character.y<-8500&&this.player.character.y>-9500?this.cameras.main.setBackgroundColor(552081):this.player.character.y<-9500&&this.player.character.y>-10500?this.cameras.main.setBackgroundColor(411744):this.player.character.y<-10500&&this.player.character.y>-11500?this.cameras.main.setBackgroundColor(205872):this.player.character.y<-11500&&this.cameras.main.setBackgroundColor(0)),0===this.hud.health&&(this.backgroundMusic.destroy(),this.lava.lavaSound.destroy(),setTimeout(()=>{this.player.deathSound.play(),this.scene.remove("hud"),this.scene.start("over",{score:this.hud.score})}))}}class v extends Phaser.Scene{constructor(){super("pause")}create(){this.pauseImage=this.add.image(400,300,"pauseImage"),this.pauseImage.setDepth(200),this.pauseSound=this.sound.add("pauseSound")}update(){g(this,"pause")}}class w extends Phaser.Scene{constructor(){super("over")}init(e){this.finalScore=e.score}create(){this.scene.stop("main"),this.enterKey=this.input.keyboard.addKey("ENTER"),this.add.image(400,300,"lava"),this.add.text(275,50,"Game Over",{fontFamily:"inGame",fontSize:"60px",color:"#ffffff"}),this.add.text(230,200,`Final Score: ${this.finalScore}`,{fontFamily:"inGame",fontSize:"60px",color:"#ffffff"}),this.add.text(140,400,"Press ENTER to Try Again",{fontFamily:"inGame",fontSize:"60px",color:"#ffffff"})}update(){this.enterKey.onDown=()=>{this.scene.start("main")}}}const x=new Phaser.Game({type:Phaser.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}}});x.scene.add("preload",new i),x.scene.add("main",new b(x)),x.scene.add("menu",new a),x.scene.add("pause",new v),x.scene.add("over",new w),x.scene.start("preload",new i)}]);
//# sourceMappingURL=bundle.js.map