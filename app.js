const minimumNumber = 1;
const maximumNumber = 50;
const answer = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;

let retries = 0;
let guess;
let lessThanNumber;
let greaterThanNumber;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minimumNumber} - ${maximumNumber}, ${answer}`)
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number.");
    }
    else if(guess < minimumNumber || guess > maximumNumber) {
        window.alert("Please enter a number that is in the bracket.");
    }
    else {
        retries++;
        if (guess < answer){
            window.alert("Too low, try again.");
        }
        else if (guess > answer) {
            window.alert("Too high, try again.");
        }
        else{
            window.alert(`Congratulations! The answer was ${answer}, it took you ${retries} attempts.`);
            running = false;
        }

        if(retries == 5) {
            lessThanNumber = answer - 5;
            greaterThanNumber = answer + 5;
            window.alert(`clue: the number is somewhere between ${lessThanNumber} to ${greaterThanNumber}.`);
        }
    }


    
}

