import 'phaser';



export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }


  create () {
    let player;
    let platforms;

    //Add background world.
    this.add.image(650, 300, 'world');

    //Add platform
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    

    //Add player sprite.
    player = this.physics.add.sprite(100, 450, 'girl');
    
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //Add animation for player sprite.
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

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('girl', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
  }
};
