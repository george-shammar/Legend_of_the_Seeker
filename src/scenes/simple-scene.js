export class SimpleScene extends Phaser.Scene {
    preload() {
      this.load.image('cokecan', 'assets/cougar-dragonsun.png');
    }
  
    create() {
      this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
      this.add.image(400, 300, 'cokecan');
    }
  }
  

  