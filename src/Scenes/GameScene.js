import 'phaser';



let cursors;

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  create () {
    let player;
    let platforms;
    let mud;
    let groundleft;
    let groundmiddle;
    let groundright;
 
    

    //Add background world.
    this.add.image(650, 300, 'world');
 
    //Add platform
    platforms = this.physics.add.staticGroup();
    platforms.create(855, 187, 'ground').setScale(1).refreshBody();

    groundleft = this.physics.add.staticGroup();
    groundleft.create(300, 187, 'groundleft').setScale(1).refreshBody();
   
    groundmiddle = this.physics.add.staticGroup();
    groundmiddle.create(440, 187, 'groundmiddle').setScale(1).refreshBody();

    groundright = this.physics.add.staticGroup();
    groundright.create(580, 187, 'groundright').setScale(1).refreshBody();

    mud = this.physics.add.staticGroup();
    mud.create(450, 568, 'mud').setScale(2).refreshBody();

   


    

    //Add player sprite.
    // player = this.physics.add.sprite(100, 450, 'girl');
    
    // player.setBounce(0.2);
    // player.setCollideWorldBounds(true);

    //Add animation for player sprite.

    // this.anims.create({
    //     key: 'left',
    //     frames: this.anims.generateFrameNumbers('girl', { start: 0, end: 3 }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    // this.anims.create({
    //     key: 'turn',
    //     frames: [ { key: 'girl', frame: 4 } ],
    //     frameRate: 20
    // });


    // this.anims.create({
    //   key: 'right',
    //   frames: this.anims.generateFrameNumbers('girl', { start: 5, end: 8 }),
    //   frameRate: 10,
    //   repeat: -1
    // });

    // this.physics.add.collider(player, mud, platforms);
    // cursors = this.input.keyboard.createCursorKeys();
    

    // if (cursors.left.isDown)
    //     {
    //         player.setVelocityX(-160);

    //         player.anims.play('left', true);
    //     }
    //     else if (cursors.right.isDown)
    //     {
    //         player.setVelocityX(160);

    //         player.anims.play('right', true);
    //     }
    //     else
    //     {
    //         player.setVelocityX(0);

    //         player.anims.play('turn');
    //     }

    //     if (cursors.up.isDown && player.body.touching.down)
    //     {
    //         player.setVelocityY(-330);
    //     }
    }
};
