/// <reference path="jQuery.js" />

console.log('Here are all the available people:', people);

$(readyNow);

function readyNow () {
    displayPictures();
}

// <img src="https://github.com/booherbg.png?size=250" alt="Profile image of Blaine">

function displayPictures () {
    // loop over each person in the people array.
    for (let person of people) {
        // append each person in the people object image to the DOM.
        $('body').append(`
        <img data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">`);
    }
}



