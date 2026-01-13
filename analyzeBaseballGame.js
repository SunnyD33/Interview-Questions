function analyzeBaseballGame(gameArray) {
  // Object to be returned with data from gameArray
  const gameStats = {
    homeTotal: 0,
    awayTotal: 0,
    homeLedInnings: [],
    awayLedInnings: [],
    winner: "",
  };

  // Loop through each array in game array and  get the values for each team
  // in each inning
  for (let i = 0; i < gameArray.length; ++i) {
    gameStats.homeTotal += gameArray[i][0];
    gameStats.awayTotal += gameArray[i][1];

    // For each iteration, push the winning inning to each respective team
    if (gameArray[i][0] > gameArray[i][1]) {
      gameStats.homeLedInnings.push(i + 1);
    } else if (gameArray[i][0] < gameArray[i][1]) {
      gameStats.awayLedInnings.push(i + 1);
    } else {
      continue;
    }
  }

  // Determine winner of the game based on the totals
  if (homeScoreTotal > awayScoreTotal) {
    gameStats.winner = "home";
  } else if (homeScoreTotal < awayScoreTotal) {
    gameStats.winner = "away";
  } else {
    gameStats.winner = "tie";
  }

  return gameStats;
}

const innings = [
  [1, 0],
  [2, 2],
  [0, 3],
  [4, 1],
];
console.log(analyzeBaseballGame(innings));
