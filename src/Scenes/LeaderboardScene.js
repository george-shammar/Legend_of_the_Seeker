import 'phaser';
import { allScores } from '../apiScore';


export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.title = this.add.text(650, 50, 'HIGEST SCORES:', {
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
    this.add.text(450, 100, header, {fontSize: 28,
      fontStyle: 'bold',
      color: 'white'});
    
    // .map((game, index) => {
    //   const text = `${game.user} - Score: ${game.score}`;
    // this.add.text(650, 100, text, {
    //     fontFamily: 'monospace',
    //     fontSize: '28px',
    //     color: 'white',
    //     align: 'center',
    //     lineHeight: '1',
    //   }).setOrigin(0.5, 0.5);
    //     return text;
    //    });
  };
}