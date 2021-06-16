import 'phaser';


export default class BattleScene extends Phaser.Scene {
    constructor () {
      super('BattleScene');
    }

    create()
    {
        // Run UI Scene at the same time
        this.scene.launch('UIScene');
    }

}  