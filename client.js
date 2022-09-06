/// <reference path="jQuery.js" />

console.log('Here are all the available people:', people);

$(readyNow);

function readyNow () {
    displayPictures();
}


function displayPictures () {
    // loop over each person in the people array.
    for (let person of people) {
        // append each person in the people object image to the DOM.
        $('#pictures').append(`
        <img data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">`);
    }
}

function startGame(){
    

}



