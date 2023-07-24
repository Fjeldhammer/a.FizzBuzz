// getting numnbers from the page,
// validate the inputs we collected,
// then passing the values to the other functions
function getValues() {
    //get the fizz number
    let fizz = 3;
    //get the buzz number
    let buzz = 5;
    //get the end number
    let end = 100;
    // todo: make sure they're valid

    // generate my fizzbuzz
    let fizzBuzzes = generateFizzBuzz(fizz, buzz, end);
    // display my fizzbuzz
    displayFizzBuzz(fizzBuzzes);
}

// create an array of values according
// to the FizzBuzz rules e.g. [1, 2, 'Fizz', 4, 'Buzz']
function generateFizzBuzz(fizzValue, buzzValue, max) {

    let fbArray = [];

    // check every number from 1 to "max"
    for (let number = 1; number <= max; number++) {
        // for each number: 
        // -check if it is divisible by fizzValue
        // -check if it is divisible by buzzValue
        // -check if it is divisible by both
        if (number % fizzValue == 0 && number % buzzValue == 0) {

            fbArray.push('FizzBuzz');

        } else if (number % fizzValue == 0) {

            fbArray.push('Fizz');

        } else if (number % buzzValue == 0) {

            fbArray.push('Buzz');

        } else {

            fbArray.push(number);
            // -then, put the right value into the array

        }
    }
    return fbArray
    // when I'm done, return that array
}

// take in an array of values, and display them on the page
function displayFizzBuzz(fbArray) {

    let fizzBuzzHTML = '';

    for (let index = 0; index < fbArray.length; index++) {

        let value = fbArray[index];

        fizzBuzzHTML += `<div class="col ${value}"> ${value} </div>`;

    }

    let resultsRow = document.getElementById('results');

    resultsRow.innerHTML = fizzBuzzHTML;

}