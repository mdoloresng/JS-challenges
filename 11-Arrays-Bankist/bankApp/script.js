'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, index) {
    const typeOfMovement = movement > 0 ? 'deposit' : 'withdrawal';
    const movementRow = `
    <div class="movements__row">
    <div class="movements__type movements__type--${typeOfMovement}">${index + 1}${' ' + typeOfMovement}</div>
    <div class="movements__value">${movement}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', movementRow); //with beforeend the order of the movements would be inverted because each new element would added at the end of the container, after all the child elements.
  });
};

const createUsernames = function (account) {
  //We dont want to use the map method because we do not need the function to return a new array
  account.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(element => element[0]) //here we do 
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (account) {
  // Display movements
  displayMovements(account.movements);

  // Display balance
  calculateDisplayBalance(account);

  // Display summary
  calculateDisplaySummary(account);
}

const calculateDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (accumulator, currentMovement) => accumulator + currentMovement, 0
  );
  labelBalance.textContent = `${account.balance} €`;
}

const calculateDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(movement => movement > 0)
    .reduce((accumulator, movement) => accumulator + movement, 0)
  labelSumIn.textContent = `${incomes} €`;

  const out = account.movements
    .filter(movement => movement < 0)
    .reduce((accumulator, movement) => accumulator + movement, 0)
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = account.movements
    .filter(movement => movement > 0)
    .map(deposit => deposit * account.interestRate / 100)
    .filter((interest) => {
      return interest >= 1;
    })
    .reduce((accumulator, interest) => accumulator + interest, 0)
  labelSumInterest.textContent = `${interest} €`
}

let currentAccount;
//This is a button in a form element. in HTML its default behaviour is to reaload the page when clicked. In order to prevent the form from submiting: 
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //e stands for event object

  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount)
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts
    .find(currentAccount => currentAccount.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
