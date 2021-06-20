import 'phaser';
import {score} from './GameScene';

let scoreBattle = 0;
let gameOver = false;
let monster1, monster2;
let player;
let bombs;

export default class BattleScene extends Phaser.Scene {
    constructor () {
      super('BattleScene');
    }

    create()
    { 
       let mud;

       // change the background to battlebg
       this.add.image(650, 300, 'battlebg');

       mud = this.physics.add.staticGroup();
       mud.create(450, 568, 'mud').setScale(3).refreshBody();
       mud.create(300, 270,  'groundmiddle');
       
        
       //create monster
       monster1 = this.physics.add.sprite(200, 450, 'dragonblue').setScale(2);
       monster1.setBounce(1);
       monster1.setCollideWorldBounds(true);
       this.physics.add.collider(monster1, mud);
       monster1.allowGravity = false;
       monster1.setVelocityY(Phaser.Math.Between(50, 200), 5);

       monster2 = this.physics.add.sprite(350, 100, 'dragonblue').setScale(2);
       monster2.setBounce(1);
       monster2.setCollideWorldBounds(true);
       this.physics.add.collider(monster2, mud);
       monster2.allowGravity = false;
       monster2.setVelocityY(Phaser.Math.Between(50, 200), 5);

       //create player
       player = this.physics.add.sprite(1100, 469, 'girl').setScale(2);
       player.setBounce(1);
       monster2.setCollideWorldBounds(true);
       this.physics.add.collider(player, mud);
       monster2.allowGravity = false;
       monster2.setVelocityY(Phaser.Math.Between(50, 200), 5);
       
       // player character - warrior
       const warrior = new PlayerCharacter(this, 1100, 469, 'girl', 5, 'Warrior', 100, 100);      
        // this.add.existing(warrior);

       const dragonblue = new Enemy(this, 850, 467, 'dragonblue', 6, 'Dragon', 50, 300);
        // this.add.existing(dragonblue);
       
       
       const dragonOrange = new Enemy(this, 700, 150, 'dragonblue', 11,'Dragon2', 50, 300);
    //    this.add.existing(dragonOrange);
       
       // array with heroes
       this.heroes = [ warrior ];
       // array with enemies
       this.enemies = [ dragonblue, dragonOrange ];
       // array with both parties, who will attack
       this.units = this.heroes.concat(this.enemies);
       
       // Run UI Scene at the same time
       this.scene.run('UIScene');

       this.index = -1;
       
       this.scoreTextBattle = this.add.text(16, 16, `Score: ${score}`, { fontSize: '32px', fill: '#000' });

    }
    nextTurn() {
        this.index++;
        // if there are no more units, we start again from the first one
        if(this.index >= this.units.length) {
            this.index = 0;
        }
        if(this.units[this.index]) {
            // if its player hero
            if(this.units[this.index] instanceof PlayerCharacter) {                
                this.events.emit('PlayerSelect', this.index);
                scoreBattle += 100;
                let totalScore = `${score + scoreBattle}`;
                this.scoreTextBattle.setText(`Score: ${totalScore}`);
            } else { // else if its enemy unit
                // pick random hero
                var r = Math.floor(Math.random() * this.heroes.length);
                // call the enemy's attack function 
                this.units[this.index].attack(this.heroes[r]);
                scoreBattle -= 300;
                let totalScore = `${score + scoreBattle}`;
                this.scoreTextBattle.setText(`Score: ${totalScore}`);
                if(totalScore <= 0){
                    this.scene.start('GameOver');
                    this.scene.sleep('BattleScene');
                    this.scene.sleep('UIScene');
                }
                // add timer for the next turn, so will have smooth gameplay
                this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
            }
        }
    }
    receivePlayerSelection(action, target) {
        if(action == 'attack') {            
            this.units[this.index].attack(this.enemies[target]);              
        }
        this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });        
    }
}

const Unit = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,
    
    initialize:
    
    function Unit(scene, x, y, texture, frame, type, hp, damage) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame)
        this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; // default damage                
    },
    attack(target) {
        target.takeDamage(this.damage);
        this.scene.events.emit("Message", this.type + " attacks " + target.type + " for " + this.damage + " points");  
    },
    takeDamage(damage) {
        this.hp -= damage;  
        if(this.hp <= 0) {
            this.hp = 0;
            this.alive = false;
        }      
    }
});

const Enemy = new Phaser.Class({
    Extends: Unit,
 
    initialize:
    function Enemy(scene, x, y, texture, frame, type, hp, damage) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage);

        this.setScale(2);
    }
});

const PlayerCharacter = new Phaser.Class({
    Extends: Unit,
 
    initialize:
    function PlayerCharacter(scene, x, y, texture, frame, type, hp, damage) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage);
        // flip the image so I don't have to edit it manually
        this.flipX = true;
        
        this.setScale(2);
    }
});
