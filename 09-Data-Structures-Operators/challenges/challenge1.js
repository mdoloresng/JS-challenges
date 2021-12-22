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
// 1. Create one player array for each team (vars 'players1' and 'players2') using destructuring.
const [players1, players2] = game.players;

// 2. The 1st player in any team is the goalkeeper and the rest are field players. Create 2 vars 'goalkeeper' and 'fieldPlayers' for team 1 using the rest syntax
const [goalkeeper, ...fieldPlayers] = players1;

// 3. Create 1 array with all players (team1 and team2)
const allPlayers = [...players1, ...players2];

// 4. team1 used 3 substitute players. Create an array 'players1Final' containing the original players plus Thiago, Coutinho and Perisic. 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Based on game.odds, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;

// 6. Write a function 'printGoals' that receives an arbitrary number of player names (not an array) and prints each of them to the console along with the scored goals in total (nr of players passed in)

const printGoals = function (...nrOfPlayers) {
    console.log(`${nrOfPlayers.length} goals have been scored`);
};

// 7.  The team with the lower odd is more likely to win. Print to the console which team is more likely to win using Logical Assignment Operators.

team1 < team2 && console.log(`${game.team1} is more likely to win`)
team2 > team2 && console.log(`${game.team2} is more likely to win`);