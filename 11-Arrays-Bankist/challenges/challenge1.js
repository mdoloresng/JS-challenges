/* Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs!
2. Create an array with both Julia's (corrected) and Kate's data 2. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
 */

// 1.
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
    dogsJulia.splice(0, 1);
    dogsJulia.splice(-2);
    console.log(dogsJulia, dogsKate);

    const dogsJuliaCorrect = dogsJulia;
    const dogsJuliaCorrectAndDogsKate2 = [...dogsJuliaCorrect, ...dogsKate2];
    const remainingDogs = [...dogsJulia2, ...dogsKate1];

    remainingDogs.forEach(
        function (age, index) {
            let message = '';
            message = age < 3 ? 'is a puppy' : 'is not a puppy';
            console.log(`Dog ${index + 1} ${message}`)
        });
}

checkDogs(dogsJulia1, dogsKate2);