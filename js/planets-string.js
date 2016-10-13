(function(){
    "use strict";

    var planetsString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";

    console.log(planetsString);

    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsArray = planetsString.split(',');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsString = planetsArray.join('<br>');
    console.log("<br>" + planetsString + "<br>");

    // Bonus: Create a second string that would display your planets in an unordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    document.write("<ul>");
    for (var i =0; i < planetsArray.length; i++)  {
        document.write("<li>" + planetsArray[i] + "</li>")
    } document.write("</ul>");


    var arrayOfNumbers = [1,2,3,4,5];
    for(var i =0; i < arrayOfNumbers.length; i++)   {
        console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
    }
    /*
    The element at index 0 is 1
    The element at index 1 is 2
    The element at index 2 is 3
    The element at index 3 is 4
    The element at index 4 is 5
    */

    arrayOfNumbers.forEach(function (element, index, array) {
        console.log("The element at index " + index + " is " + element);
    });
    /*
     The element at index 0 is 1
     The element at index 1 is 2
     The element at index 2 is 3
     The element at index 3 is 4
     The element at index 4 is 5
     */

})();
