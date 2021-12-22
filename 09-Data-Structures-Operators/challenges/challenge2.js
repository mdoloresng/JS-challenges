const game = {
    team1: 'Bayern Munich',
    team2: 'Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowsky',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],

    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarbi', 'Lewandowsky', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Loop over game.scored and print each player name to the console along with the goal number.

for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1} was scored by ${player}`);

// 2. Use a loop to calculate the average odd and log it to the console
let sum = 0;
const odds = Object.values(game.odds);
const nrOfOdds = Object.values(game.odds).length;

for (const odd of odds) {
    sum += odd;
}
console.log(sum / nrOfOdds);

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them (except for "draw").Hint: Note how the odds and the game objects have the same property names
const obj = Object.entries(game.odds)
for (const [team, odd] of obj) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd off ${teamStr} ${odd}`);
}