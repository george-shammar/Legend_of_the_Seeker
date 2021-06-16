import 'phaser';


export default class UIScene extends Phaser.Scene {
    constructor () {
      super('UIScene');
    }

    create()
    {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1); 

        this.graphics.strokeRect(457, 150, 90, 100);
        this.graphics.fillRect(2, 150, 90, 100);

        this.graphics.strokeRect(557, 500, 90, 100);
        this.graphics.fillRect(557, 500, 90, 100);

        this.graphics.strokeRect(650, 500, 130, 100);
        this.graphics.fillRect(650, 500, 130, 100);
    }

}  