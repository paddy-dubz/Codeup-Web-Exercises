/**
 * Created by Patrick on 10/11/16.
 */



"use strict";
function average3Grades() {
    var grades = [
        "Enter your first grade",
        "Enter your second grade",
        "Enter your third grade"];
    var total = 0;

    for (var i = 0; i < 3; i++) {
        total += parseInt(prompt(grades[i]));
    }
    return total / 3;
}

if (average3Grades() >= 80) {
    alert('You are awesome!');
} else {
    alert('You need to practice more.');
}


function genericGradesAverage() {
    var gradeSum = 0;
    var gradeAmount = 0;
    do {
        var grade = parseInt(prompt("Enter grade"));
        gradeSum = gradeSum + grade;
        gradeAmount++;
        var confirming = confirm("Would you like to add another grade?");
        console.log(grade);
        console.log(gradeSum);
    }
    while(confirming);
    return gradeSum / gradeAmount;
}

if (genericGradesAverage() >= 80) {
    alert('You are awesome!');
} else {
    alert('You need to practice more.');
}
/*
alert(genericGradesAverage());*/
