// 1. Write a program that receives a list of variable names written in underscore_case  and convert them to camelCase. The input will come from a textarea inserted into the DOM and conversion will happen when the button is pressed.
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'⚽'.repeat(i)}`)
    }
});
