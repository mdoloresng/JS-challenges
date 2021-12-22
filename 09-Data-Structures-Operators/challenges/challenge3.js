const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];

//2. The yellow card from minute 64 was unfair. Remove this event from the events log.
gameEvents.delete(64);

//3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const nrOfEvents = [...gameEvents]
console.log(`An event happened, on average, every ${90 / nrOfEvents.length} minutes`);

//4. Loop over 'gameEvents' and log each element to the console, marking  whether it's in the first half or second half (after 45 min) of the game, like this: FIRST HALF] 17: ⚽ GOAL

let message = '';
for (const [key] of gameEvents) {
    message = (key < 45) ? `[FIRST HALF] ${key} GOAL` : `[SECOND HALF] ${key} GOAL`;
    console.log(message);
}
