import 'phaser';



export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }


  create () {
    let player;
    let platforms;
    let mud;
    let cursors;
    

    //Add background world.
    this.add.image(650, 300, 'world');
 
    //Add platform
    platforms = this.physics.add.staticGroup();
    platforms.create(855, 190, 'ground').setScale(1).refreshBody();
   
    mud = this.physics.add.staticGroup();
    mud.create(450, 568, 'mud').setScale(2).refreshBody();

    

    //Add player sprite.
    player = this.physics.add.sprite(100, 450, 'girl');
    
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, mud, platforms);

    //Add animation for player sprite.

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('girl', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('girl', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'girl', frame: 4 } ],
        frameRate: 20
    });
  }




};
