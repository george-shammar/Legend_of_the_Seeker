import Phaser from 'phaser';
import { recordScore } from '../apiScore';
import { score } from './GameScene';
import form from '../scoreForm';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(650, 300, 'gameOver');

    this.userScore = this.add.text(500, 100, `Total Score: ${score}`, { fontStyle: 'bold', fontSize: 32 });

    document.body.appendChild(form());

    this.userForm = document.getElementById('form');
    this.submit = document.getElementById('click-submit');

    this.submit.onclick = () => {
      const username = document.getElementById('score').value;
      if (this.userForm !== null) {
        this.userForm.remove();
      }
      recordScore(username, score);
    };
 
    this.menuButton = new Button(this, 200, 500, 'blueButton1', 'blueButton2', 'Replay', 'Title');
 
    this.leaderBoard = new Button(this, 1000, 500, 'blueButton1', 'blueButton2', 'Top Scores', 'Leaderboard');
  }
}