export class SimpleScene extends Phaser.Scene {
    preload() {
      this.load.image('cokecan', 'assets/cougar-dragonsun.png');
    }
  
    create() {
      this.add.image(400, 300, 'cokecan');
    }
  }
  

  