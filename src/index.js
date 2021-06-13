import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

const gameConfig = {
  width: 800,
  height: 600,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);

