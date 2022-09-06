/// <reference path="jQuery.js" />

console.log('Here are all the available people:', people);

$(readyNow);

function readyNow () {
    displayPictures();
    $('#startButton').on('click', startGame);
    $('#pictures').on('click', '.imgClass', checkImage);
}


function displayPictures () {
    // loop over each person in the people array.
    for (let person of people) {
        // append each person in the people object image to the DOM.
        $('#pictures').append(`
        <img class="imgClass" data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">`);
    }
}



// make a feature that does not allow the same name to appear twice in a row.


// prompt user with a random person.name and display it on the DOM.
let mysteryPerson = '';

function startGame(event){
    // set variable to a random number between 0 and the the length of the array - 1.
    let rdmNum = randomNumber(0, people.length-1);
    //TEST: console.log('randomNumber:', rdmNum);

    // assign random name using rdmNum variable to our mystery person
    mysteryPerson = people[rdmNum].name;
    //console.log('Random Person', mysteryPerson);

    // append mysterPerson to DOM.
    $('#currentName').text(mysteryPerson);
}



function checkImage (event) {
    let clickedImage = $(event.target).data('name');
    console.log(clickedImage);
    if(mysteryPerson === clickedImage) {
        console.log('Correct!');
    } else {
        console.log('Wrong!');
    }
}

// handy function that generates a random number given a min and max value.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


