function analyzeBaseballGame(gameArray) {

    // Object to be returned with data from gameArray
    const gameStats = {
        homeTotal: 0,
        awayTotal:0,
        homeLedInnings: [],
        awayLedInnings: [],
        winner: "",
    }

    // Create accumulators for the total scores
    let homeScoreTotal = 0;
    let awayScoreTotal = 0;

    // Loop through each array in game array and  get the values for each team
    // in each inning
    for (let i = 0; i < gameArray.length; ++i) {
            homeScoreTotal += gameArray[i][0];
            awayScoreTotal += gameArray[i][1];

            // For each iteration, push the winning inning to each respective team
            if(gameArray[i][0] > gameArray[i][1]) {
                gameStats.homeLedInnings.push(i + 1);
            } else if (gameArray[i][0] < gameArray[i][1]) {
                gameStats.awayLedInnings.push(i + 1);
            } else {
                continue;
            }
    }

    // Set total scores accumulated to the proper fields in the gameStats object
    gameStats.homeTotal = homeScoreTotal;
    gameStats.awayTotal = awayScoreTotal;

    // Determine winner of the game based on the totals
    if (homeScoreTotal > awayScoreTotal) {
        gameStats.winner = "home";
    } else if (homeScoreTotal < awayScoreTotal){
        gameStats.winner = "away"
    } else {
        gameStats.winner = "tie"
    }

    return gameStats;
 }
 

 const innings = [[1,0], [2,2], [0,3], [4,1]];
 analyzeBaseballGame(innings);