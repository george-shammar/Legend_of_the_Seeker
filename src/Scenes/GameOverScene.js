import 'phaser';
import {allScores, recordScore} from '../apiScore';
import {score} from './GameScene';
import form from '../scoreForm';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
    constructor () {
      super('GameOver');
    }

  create() {

    this.add.image(650, 300, 'gameOver');

    this.userScore = this.add.text(550, 150, `Total Score: ${score}`);
  
    document.body.appendChild(form());


    this.saveButton = this.add.sprite(200, 500, 'blueButton1').setInteractive();
    this.saveText = this.add.text(100, 500, 'Save Score', {
      fontSize: '32px',
      fill: '#fff',
    });

    const that = this;
      this.userForm = document.getElementById('form');
      this.saveButton.on('pointerdown', () => {
      const username = document.getElementById('score').value;
      if (this.userForm !== null) {
      this.userForm.remove();
      }
      recordScore(username, score);
      this.scene.start('Title');
      // allScores().then((result) => {
      //   that.scene.start('Title', result);
      // });
    });


    Phaser.Display.Align.In.Center(this.saveText, this.saveButton);
    this.menuButton = new Button(this, 650, 500, 'blueButton1', 'blueButton2', 'Replay', 'Title');
    this.leaderBoard = new Button(this, 1100, 500, 'blueButton1', 'blueButton2', 'Highest Scores', 'Leaderboard');
  }
}