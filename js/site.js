// Get the numbers from our form inputs
// ENTRY POINT
// Controller Function
function getValues() {
    let fizzNumber = document.getElementById('fizzValue').value;
    let buzzNumber = document.getElementById('buzzValue').value;
    let stopNumber = document.getElementById('stopValue').value;

    fizzNumber = Number(fizzNumber);
    buzzNumber = Number(buzzNumber);
    stopNumber = Number(stopNumber);

    // check if input numbers are actual numbers
    if (isNaN(fizzNumber) == true || isNaN(buzzNumber) == true || isNaN(stopNumber) == true) {
        Swal.fire({
            title: 'Oops!',
            text: 'Unfortunately, FizzBuzz only works with numbers',
            icon: 'error',
            backdrop: false
        });
        // make sure the stop value is greater than either start value
    } else if (fizzNumber > stopNumber || buzzNumber > stopNumber) {
        Swal.fire({
            title: 'Oops!',
            text: 'Unfortunately, both Fizz & Buzz numbers must be less than the Stop number',
            icon: 'error',
            backdrop: false
        });

    } else if (stopNumber > 4200) {
        Swal.fire({
            title: 'Oops!',
            text: 'Unfortunately, the Stop number must be less than 4200',
            icon: 'error',
            backdrop: false
        });

    } else {
        // display the numbers if everything is ok
        let numberArray = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber);

        displayFizzBuzz(numberArray);
    }
}

// Business logic -creates every number in the input range
// check if divisible by both values if so push fizzbuzz
// check if divisible by either value if so push either fizz or buzz as appropriate
function generateFizzBuzz(fizz, buzz, stop) {

    let range = [];

    for (let number = 1; number <= stop; number++) {

        if (number % fizz == 0 && number % buzz == 0) {
            range.push('FIZZBUZZ');

        } else if (number % fizz == 0) {
            range.push('FIZZ');

        } else if (number % buzz == 0) {
            range.push('BUZZ');

        } else {
            range.push(number);
        }
    }

    return range;
}

// put the numbers on the page
// View Function
function displayFizzBuzz(numbersToDisplay) {

    let tableHtml = '';

    for (let index = 0; index < numbersToDisplay.length; index++) {

        let currentNumber = numbersToDisplay[index];

        let className = '';

        if (currentNumber == 'FIZZBUZZ') {
            className = 'FIZZBUZZ';
        } else if (currentNumber == 'FIZZ') {
            className = 'FIZZ';
        } else if (currentNumber == 'BUZZ') {
            className = 'BUZZ';
        }

        let tableRowHtml = `<tr><td class="${className}">${currentNumber}</td></tr>`; // "<tr><td>1</td></tr>"

        tableHtml = tableHtml + tableRowHtml;
    }

    document.getElementById('results').innerHTML = tableHtml;

}