(function(){
    "use strict";

    var planetsString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";

    console.log(planetsString);

    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsArray = planetsString.split(',');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsString = planetsArray.join('\n');
    console.log(planetsString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    document.write(
        "<ul>"
        + "<li>" + planetsArray[0] + "</li>"
        + "<li>" + planetsArray[1] + "</li>"
        + "<li>" + planetsArray[2] + "</li>"
        + "<li>" + planetsArray[3] + "</li>"
        + "<li>" + planetsArray[4] + "</li>"
        + "<li>" + planetsArray[5] + "</li>"
        + "<li>" + planetsArray[6] + "</li>"
        + "<li>" + planetsArray[7] + "</li>"
        +
        "</ul>"
    );
})();
