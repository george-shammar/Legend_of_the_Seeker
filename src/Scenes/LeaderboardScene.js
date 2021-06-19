import 'phaser';
import {allScores, recordScore} from '../apiScore';

export default class LeaderboardScene extends Phaser.Scene {
    constructor () {
      super('Leaderboard');
    }


    create() {
      this.add.image(650, 300, 'world');

      this.title = this.add.text(this.game.config.width * 0.5, 100, 'TOP PLAYERS:', {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      });
      this.title.setOrigin(0.5);
  
      this.getScores();
  
      
    }

    getScores = async () => {
      const data = await allScores();
      data.sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map((game, index) => {
          const text = `${game.user} - Score: ${game.score}`;
          this.add.text(800 / 2, (65 * (index + 1.1)) + 100, text, {
            fontFamily: 'monospace',
            fontSize: '28px',
            color: 'white',
            align: 'center',
            lineHeight: '1',
          }).setOrigin(0.5, 0.5);
          return text;
        });
    };

}  