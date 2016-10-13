(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    // function for logging the planets array
    function logPlanets() {
        console.log('The planets are:');
        for (var i =0; i < planets.length; i++)  {
            console.log(planets[i])
        }
    }

    logPlanets();


    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The Sun');
    logPlanets();

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    logPlanets();

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    logPlanets();

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    logPlanets();

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf('Earth');
    console.log(index);

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log('Using splice to remove the planet after "Earth".');
    var removed = planets.splice(3, 1);
    logPlanets();

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log('Using splice to add back the planet after "Earth".');
    planets.splice(planets.indexOf('Earth') + 1, 0, 'Mars');
    logPlanets();

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log("Reversing the order of the planets array.");
    planets.reverse();
    logPlanets();

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log("Sorting the planets array.");
    planets.sort();
    logPlanets();
})();
