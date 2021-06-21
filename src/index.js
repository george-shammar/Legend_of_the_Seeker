import 'phaser';
import config from './Config/config';
import {GameScene} from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import GameOverScene from './Scenes/GameOverScene';
import BattleScene from './Scenes/BattleScene';
import LeaderboardScene from './Scenes/LeaderboardScene';
import UIScene from './Scenes/UIScene';
import Model from './Model';
import './style.css';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('BattleScene', BattleScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.add('UIScene', UIScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();