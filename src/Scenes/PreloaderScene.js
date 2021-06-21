import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }

  init () {
    this.readyCount = 0;
  }

  preload () {

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(500, 270, 320, 50);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(500, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });

    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets
    this.load.image('blueButton1', 'assets/ui/button-bg.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('phaserLogo', 'assets/logo.png');
    this.load.image('gameOver', 'assets/gameover.png');
    this.load.image('world', 'assets/platform.png');
    this.load.image('groundmiddle', 'assets/groundmiddle.png');
    this.load.image('mud', 'assets/mud.png');
    this.load.image('bomb', 'assets/spikedball.png');
    this.load.image('tomato', 'assets/tomato.png');
    this.load.image('bullet', 'assets/bullet6.png');
    this.load.image('bullet2', 'assets/bullet7.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['assets/TownTheme.mp3']);
    this.load.spritesheet('girl', 'assets/girl.png', { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet("dragonblue", "assets/dragonblue.png", { frameWidth: 96, frameHeight: 64 });
    this.load.image("battlebg", "assets/battlebg.png");
    
  }

  ready () {
    this.scene.start('Title');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};
