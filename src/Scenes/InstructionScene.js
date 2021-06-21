import 'phaser';

export default class InstructionScene extends Phaser.Scene {
    constructor () {
      super('Instruction');
    }

    create() {
        this.title = this.add.text(630, 30, 'GAME INSTRUCTIONS:', {
          fontSize: 32,
          fontStyle: 'bold',
          color: 'white',
          align: 'center',
        });
        this.title.setOrigin(0.5);

        this.title = this.add.text(630, 400, 'GAME CONTROLS:', {
            fontSize: 32,
            fontStyle: 'bold',
            color: 'white',
            align: 'center',
          });
        this.title.setOrigin(0.5);
    }
}