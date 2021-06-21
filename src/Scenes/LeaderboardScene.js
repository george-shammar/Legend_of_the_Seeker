import 'phaser';
import { allScores } from '../apiScore';


export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.title = this.add.text(630, 30, 'HIGEST SCORES:', {
      fontSize: 32,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.displayHighestScores();

    this.menuButton = this.add.sprite(650, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });
  }

  
  displayHighestScores = async () => {
    const data = await allScores();
    const highestScores = data.sort((a, b) => b.score - a.score).slice(0, 10);

    const header = "Player                    Score";
    this.add.text(450, 50, header, {fontSize: 28,
      fontStyle: 'bold',
      color: 'white'});
    
      let space = 40;
      highestScores.forEach(element => {
        const eachPlayer = `${element.user}`                    
        const eachScore = `${element.score}`;
        this.add.text(450, 50+space, eachPlayer, {fontSize: 18,
          fontStyle: 'bold',
          color: 'white'});
        this.add.text(750, 50+space, eachScore, {fontSize: 18,
        fontStyle: 'bold',
        color: 'white'});
        space += 30;
      });
  };
}