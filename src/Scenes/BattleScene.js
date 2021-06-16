import 'phaser';



export default class BattleScene extends Phaser.Scene {
    constructor () {
      super('BattleScene');
    }

    create()
    { 
       // change the background to green
       this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
        
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
    },
    takeDamage: function(damage) {
        this.hp -= damage;        
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

var MenuItem = new Phaser.Class({
    Extends: Phaser.GameObjects.Text,
    
    initialize:
            
    function MenuItem(x, y, text, scene) {
        Phaser.GameObjects.Text.call(this, scene, x, y, text, { color: '#ffffff', align: 'left', fontSize: 15});
    },
    
    select: function() {
        this.setColor('#f8ff38');
    },
    
    deselect: function() {
        this.setColor('#ffffff');
    }
    
});