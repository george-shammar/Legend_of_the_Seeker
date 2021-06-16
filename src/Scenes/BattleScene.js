import 'phaser';



export default class BattleScene extends Phaser.Scene {
    constructor () {
      super('BattleScene');
    }

    create()
    { 
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
        // Run UI Scene at the same time
        this.scene.launch('UI');
    }

}  