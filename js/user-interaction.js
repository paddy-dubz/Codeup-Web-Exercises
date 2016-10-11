"use strict";

while(true){
    var name = prompt('What is your name?');
    if(name === ""){
        alert('Please enter your name');
    }
    else if (name){
        alert('Welcome, ' + name + '! It is great to meet you!');
        break;
    }
}
    var pizza = prompt('Do you like pizza? (yes or no)');
        if (pizza == "yes")  {
            alert('That is great ' + name + ', we do too!');
        }   else    {
            alert('That is too bad ' + name + ', you are an uncultured swine.');
        }