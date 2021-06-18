import 'phaser';


export default class LeaderboardScene extends Phaser.Scene {
    constructor () {
      super('Leaderboard');
    }


    create() {
      this.add.image(650, 300, 'world');
    }
}  