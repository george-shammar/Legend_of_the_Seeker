import 'phaser';
import {allScores, recordScore} from '../apiScore';
import {score} from './GameScene';
import form from '../scoreForm';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
    constructor () {
      super('GameOver');
    }


  init(data) {
    this.score = data.score;
  }

  create() {
    this.userScore = this.add.text(650, 300, `Total Score: ${this.score}`);

    document.body.appendChild(form());

    // const that = this;
    // this.userForm = document.getElementById('form');
    // // this.saveButton.on('pointerdown', () => {
    //   const username = document.getElementById('score').value;
    //   if (this.userForm !== null) {
    //     this.userForm.remove();
    //   }
    //   recordScore(username, that.score);
    //   allScores().then((result) => {
    //     that.scene.start('Title', result);
    //   });
    // // });


    // Phaser.Display.Align.In.Center(this.saveText, this.saveButton);

    this.menuButton = new Button(this, 650, 500, 'blueButton1', 'blueButton2', 'Main', 'Title');
  }
}