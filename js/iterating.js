(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
        var names = ['Patrick','Theo','Kay','Cora'];
    // TODO: Create a log statement that will log the number of elements in the names array.
        console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3]);

    for (var i =0; i < names.length; i++)  {
        console.log(names[i])
    }

    // element is the name
    // index is the iterator (where it is in the array)
    //array is the array itself
/*    var entry = function (element, index, array) {
        console.log('The person at ' + index + ' is ' + element)
    };
    names.forEach(entry);*/

    names.forEach(function(names, position) {
        console.log('The person at ' + position + ' is ' + names);
    });

    var grades = [100, 80, 90, 80, 70];
    function average(grades) {
        var total = 0;

        for (var i = 0; i < grades.length; i++) {
            total += grades[i];
        }
        return total / grades.length;
    }
    console.log(average(grades));
})();

