import 'phaser';

export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  create() {
    this.title = this.add.text(630, 30, 'GAME INSTRUCTIONS', {
      fontSize: 32,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.objective1 = this.add.text(200, 60, '1. Scene One: Gather as many fruits (points) as possible without hitting the spike balls', { fontSize: '18px', fill: '#fff' });
    this.objective2 = this.add.text(200, 90, '2. Once you get hit by the spike balls, you get thrown into the Battle Scene(Scene Two) to fight the Dragons', { fontSize: '18px', fill: '#fff' });
    this.objective3 = this.add.text(200, 120, '3. The difficulty increases with increasing number of fruits gathered. More spike balls are added.', { fontSize: '18px', fill: '#fff' });
    this.objective4 = this.add.text(200, 150, '4. Defeat the two Dragons in the Battle Scene and you win. Remember to maintain a high score.', { fontSize: '18px', fill: '#fff' });
    this.objective5 = this.add.text(200, 180, '5. Each time a Dragon attacks, you loose 300 points. You gain 100 points each time you attack the Dragons', { fontSize: '18px', fill: '#fff' });
    this.objective6 = this.add.text(200, 210, '6. Register your total score to the Leader Baord after the game', { fontSize: '18px', fill: '#fff' });

    this.title = this.add.text(630, 300, 'GAME CONTROLS', {
      fontSize: 32,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.title = this.add.text(630, 330, 'World Scene(First Scene)', {
      fontSize: 24,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);


    this.control1 = this.add.text(200, 360, '1. Move Forward = Right Key (Keyboard)', { fontSize: '18px', fill: '#fff' });
    this.control2 = this.add.text(200, 390, '2. Move Backward = Left Key (Keyboard)', { fontSize: '18px', fill: '#fff' });
    this.control3 = this.add.text(200, 420, '3. Jump = Up Key (Keyboard)', { fontSize: '18px', fill: '#fff' });

    this.title = this.add.text(630, 460, 'Battle Scene(Second Scene)', {
      fontSize: 24,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.battleControl1 = this.add.text(200, 490, '1. Select Dragon to Attack = Left Key (Keyboard)', { fontSize: '18px', fill: '#fff' });
    this.battleControl1 = this.add.text(200, 510, '1. To Attack = Space Bar (Keyboard)', { fontSize: '18px', fill: '#fff' });
  }
}