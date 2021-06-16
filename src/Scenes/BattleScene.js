import 'phaser';



export default class BattleScene extends Phaser.Scene {
    constructor () {
      super('BattleScene');
    }

    create()
    { 
       // change the background to green
       this.add.image(650, 300, 'battlebg');
        
       // player character - warrior
       var warrior = new PlayerCharacter(this, 250, 50, 'girl', 1, 'Warrior', 100, 20);        
       this.add.existing(warrior);
       
       // player character - mage
       var mage = new PlayerCharacter(this, 250, 100, 'girl', 4, 'Mage', 80, 8);
       this.add.existing(mage);            
       
       var dragonblue = new Enemy(this, 50, 50, 'dragonblue', null, 'Dragon', 50, 3);
       this.add.existing(dragonblue);
       
       var dragonOrange = new Enemy(this, 50, 100, 'dragonorrange', null,'Dragon2', 50, 3);
       this.add.existing(dragonOrange);
       
       // array with heroes
       this.heroes = [ warrior, mage ];
       // array with enemies
       this.enemies = [ dragonblue, dragonOrange ];
       // array with both parties, who will attack
       this.units = this.heroes.concat(this.enemies);
       
       // Run UI Scene at the same time
       this.scene.launch('UIScene');

       this.index = -1;
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
            } else { // else if its enemy unit
                // pick random hero
                var r = Math.floor(Math.random() * this.heroes.length);
                // call the enemy's attack function 
                this.units[this.index].attack(this.heroes[r]);  
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
    attack: function(target) {
        target.takeDamage(this.damage);
        this.scene.events.emit("Message", this.type + " attacks " + target.type + " for " + this.damage + " damage");  
    },
    takeDamage: function(damage) {
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
