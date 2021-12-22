'use strict';
/*
// 1. Create a method 'registerNewAnswer' on the 'poll' object. The method does 2 things:
1.1. Display a prompt window for the user to input the number of the selected option. 
1.2. Based on the input number, update the 'answers' array property.  */
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')} \n (Write option Number)`
            )
        );

        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++

            this.displayResults();
            this.displayResults('string');
        }
        console.log(this.answers);
    },

    // 3. (see task explained below)
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

// 2. Call this method whenever the user clicks the "Answer poll" button.
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll))

/* // 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1" */

