import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor () {
        super('Battle');
    }

    create () {
        // change the background to green
        this.cameras.main.setBackgroundColor("rgba(0, 200, 0, 0.5)");
        this.startBattle();
        // on wake event we call startBattle too
        this.sys.events.on('wake', this.startBattle, this);  
    }
    
}