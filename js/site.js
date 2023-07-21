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
//    if (isNaN(fizzNumber) == true || isNaN(buzzNumber) == true || isNaN(stopNumber) == true) {
//        Swal.fire({
//            title: 'Oops!',
//            text: 'FizzBuzz only works with numbers',
//            icon: 'error',
//            backdrop: false
//        });
        // make sure the stop value is greater than either start value
//    } else if (fizzNumber > stopNumber || fizzNumber > buzzNumber || buzzNumber > stopNumber) {
//        Swal.fire({
//            title: 'Oops!',
//            text: 'The starting Fizz number must be less than the starting Buzz number, and both Fizz & Buzz numbers must be less than the Stop number',
//            icon: 'error',
//            backdrop: false
//        });
//    } else {
        // display the numbers if everything is ok
        range = generateFizzBuzz(stopNumber);

        displayFizzBuzz(range, fizzNumber, buzzNumber);
//    }
}

// Business logic -creates every number in the input range
// check if divisible by both values if so push fizzbuzz
// check if divisible by either value if so push either fizz or buzz as appropriate
function generateFizzBuzz(fizzNumber, buzzNumber, stopNumber) {

    let range = [];

    for (let number = 1; number <= stopNumber; number = number + 1) {

//        if (number % fizzNumber == 0 && number % buzzNumber == 0) {
//            range.push('FIZZBUZZ');

//        } else if (number % fizzNumber == 0) {
//            range.push('FIZZ');

//        } else if (number % buzzNumber == 0) {
//            range.push('BUZZ');

//        } else {
            range.push(number);
//        }
    }

    return range;
}

// put the numbers on the page
// View Function
function displayFizzBuzz(numbersToDisplay) {

    let tableHtml = '';

    for (let index = 0; index < numbersToDisplay.length; index = index + 1) {

        let currentNumber = numbersToDisplay[index];

        let className = '';

        if (currentNumber % 3 == 0 && number % 5 == 0) {
            className ='FIZZBUZZ';
        } else if (currentNumber % 3 == 0) {
            className ='FIZZ';
        } else if (currentNumber % 5 == 0) {
            className ='BUZZ';
        }

        let tableRowHtml = `<tr><td class="${className}">${currentNumber}</td></tr>`; // "<tr><td>1</td></tr>"

        tableHtml = tableHtml + tableRowHtml;
    }

    document.getElementById('results').innerHTML = tableHtml;

}