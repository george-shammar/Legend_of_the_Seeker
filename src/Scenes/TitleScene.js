import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // const resfreshSCore = () => {
    //   if (window.localStorage) {
    //     if (!localStorage.getItem('firstLoad')) {
    //       localStorage.firstLoad = true;
    //       window.location.reload();
    //     } else localStorage.removeItem('firstLoad');
    //   }
    // };
    // resfreshSCore();
    // Instructions
    this.instr = new Button(this, config.width / 2, config.height / 2 - 200, 'blueButton1', 'blueButton2', 'Instructions', 'Instruction');

    // Game

    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // leader board
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Top Scores', 'Leaderboard');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
