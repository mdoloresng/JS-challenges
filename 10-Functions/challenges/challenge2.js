'use strict';

/* 
// 1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
*/


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();

// 2. Explain why this worked 
/* It worked because of Closures. Thanks to closures we can access the scope of an outer function from an inner function. The inner function has access to the variables of the outer function even after the outer function has been returned.
Closures are important to enable data privacy since the enclosed variables are only accesible within the outer function.  */