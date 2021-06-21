import 'phaser';

export default class InstructionScene extends Phaser.Scene {
    constructor () {
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

        this.objective = this.add.text(400, 40, '1. Scene One: Gather as many fruits (points) as possible without hitting the spike balls', { fontSize: '18px', fill: '#fff' });


        this.title = this.add.text(630, 400, 'GAME CONTROLS', {
            fontSize: 32,
            fontStyle: 'bold',
            color: 'white',
            align: 'center',
          });
        this.title.setOrigin(0.5);
    }
}