const gameID = 'PvttOFDfJUi8zbItrwFO';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const allScores = async () => {
    try {
      const response = await fetch(`${url}/games/${gameID}/scores`);
      const rawData = await response.json();
      return rawData.result;
    } catch (error) {
      return error.message;
    }
  };