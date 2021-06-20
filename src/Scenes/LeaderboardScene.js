import 'phaser';
import { allScores } from '../apiScore';


export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 100, 'TOP PLAYERS:', {
      fontFamily: 'monospace',
      fontSize: 32,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.getScores();

    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });
  }

  
  getScores = async () => {
    const data = await allScores();

    console.log(data);
    // data.sort((a, b) => b.score - a.score)
    //   .slice(0, 5)
    //   .map((game, index) => {
    //     const text = `${game.user} - Score: ${game.score}`;
    //     this.add.text(800 / 2, (65 * (index + 1.1)) + 100, text, {
    //       fontFamily: 'monospace',
    //       fontSize: '28px',
    //       color: 'white',
    //       align: 'center',
    //       lineHeight: '1',
    //     }).setOrigin(0.5, 0.5);
    //     return text;
    //   });
  };
}