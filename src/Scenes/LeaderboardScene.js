import 'phaser';
import {allScores, recordScore} from '../apiScore';

export default class LeaderboardScene extends Phaser.Scene {
    constructor () {
      super('Leaderboard');
    }


  create() {
   
    this.title = this.add.text(350, 50, 'HIGHEST SCORERS:', {
      fontSize: 30,
      fontStyle: 'bold',
      align: 'center',
    });

    // Create leaderboard table
    const tableBoard = document.createElement('table');
    tableBoard.setAttribute('class', 'table');

    const tHead = document.createElement('thead');
    tableBoard.appendChild(tHead);

    const tr = document.createElement('tr');
    tHead.appendChild(tr);



    
  };

}  


//   this.title.setOrigin(0.5);
  
    //   this.getScores();
  
      
    // }

    // getScores = async () => {
    //   const data = await allScores();
    //   data.sort((a, b) => b.score - a.score)
    //     .slice(0, 5)
    //     .map((game, index) => {
    //       const text = `${game.user} - Score: ${game.score}`;
    //       this.add.text(800 / 2, (65 * (index + 1.1)) + 100, text, {
    //         fontFamily: 'monospace',
    //         fontSize: '28px',
    //         color: 'white',
    //         align: 'center',
    //         lineHeight: '1',
    //       }).setOrigin(0.5, 0.5);
    //       return text;
    //     });