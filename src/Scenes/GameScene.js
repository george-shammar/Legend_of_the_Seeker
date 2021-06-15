import 'phaser';
    

let player;
let score = 0;
let scoreText;

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  create() {
    let mud;
    let groundmiddle;
    let tomato;
    

    //Add background world.
    this.add.image(650, 300, 'world');
 
    //Add platform
    groundmiddle = this.physics.add.staticGroup();
    groundmiddle.create(310, 188, 'groundmiddle');
    groundmiddle.create(450, 188, 'groundmiddle');
    groundmiddle.create(580, 188, 'groundmiddle');
    groundmiddle.create(855, 188, 'groundmiddle');
    groundmiddle.create(1200, 188, 'groundmiddle');
    groundmiddle.create(1122, 187, 'groundmiddle');


    mud = this.physics.add.staticGroup();
    mud.create(450, 568, 'mud').setScale(2).refreshBody();

   

    //Add player sprite.
    player = this.physics.add.sprite(100, 450, 'girl').setScale(2);
    
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);

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

    //Add fruits
    tomato = this.physics.add.group({
      key: 'tomato',
      repeat: 25,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    tomato.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    //Set colliders
    this.physics.add.collider(player, mud);
    this.physics.add.collider(player, groundmiddle);
    this.physics.add.collider(tomato, mud);
    this.physics.add.collider(tomato, groundmiddle);

    //Pick up tomatoes
    this.physics.add.overlap(player, tomato, this.collectTomato, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

  }

  update ()
    {
        if (this.cursors.left.isDown)
        {
            player.setVelocityX(-140);
            player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            player.setVelocityX(140);
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (this.cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-750);
        }
    }


    collectTomato(player, tomato)
      {
        
        tomato.disableBody(true, true);

          score += 100;
          this.scoreText.setText('Score: ' + score);
      }
};
