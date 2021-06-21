import 'phaser';
    

let player;
let score = 0;
let scoreText;
let bombs;
let gameOver = false;
let tomatoes;

export class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  create() {
    let mud;
    let groundmiddle;

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
    tomatoes = this.physics.add.group({
      key: 'tomato',
      repeat: 15,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    tomatoes.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    //Set colliders
    this.physics.add.collider(player, mud);
    this.physics.add.collider(player, groundmiddle);
    this.physics.add.collider(tomatoes, mud);
    this.physics.add.collider(tomatoes, groundmiddle);

    //Pick up tomatoes
    this.physics.add.overlap(player, tomatoes, this.collectTomato, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    bombs = this.physics.add.group();
    this.physics.add.collider(bombs, mud);
    this.physics.add.collider(bombs, groundmiddle);
    this.physics.add.collider(player, bombs, this.hitBomb, null, this);

  }

  update ()
    {
        if (this.cursors.left.isDown)
        {
            player.setVelocityX(-200);
            player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            player.setVelocityX(200);
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
        
        if (tomatoes.countActive(true) < 7)
          {
            //  A new batch of tomotoes to collect
            tomatoes.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
            });
    
            const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            const bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-100, 200), 20);
            bomb.allowGravity = false;
          }
      }
    
    hitBomb(player, bomb)
    {
      this.physics.pause();
      player.anims.play('turn');
      this.scene.start('GameOver');
      // this.scene.switch('BattleScene');
    
    }
};

export {score};