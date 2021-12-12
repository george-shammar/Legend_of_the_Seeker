import 'regenerator-runtime/runtime';

const gameID = 'PvttOFDfJUi8zbItrwFO';
const url = 'https://thingproxy.freeboard.io/fetch/https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const allScores = async () => {
  try {
    const rawScores = await fetch(`${url}/games/${gameID}/scores/`);
    const rawData = await rawScores.json();
    return rawData.result;
  } catch (error) {
    return error.message;
  }
};

const recordScore = async (name, score) => {
  const params = {};
  params.user = name;
  params.score = score;
  try {
    const response = await fetch(`${proxy}/${url}/games/${gameID}/scores/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                Accept: 'application/json' },
      body: JSON.stringify(params),
    });
    return response.json();
  } catch (error) {
    return error.message;
  }
};

export { allScores, recordScore };