'use strict' 

function guessinggame() {
    var rightanswer= 51;
    var theGame= prompt("Guess the magic number to enter the site, type yes when ready");
    while(theGame === 'yes'){
        for (var i = 0; i < 10; i = i + 1){
            var userguess = parseInt(prompt("Shoot your shot!"));
            if (userguess === rightanswer){
            alert('Bullseye!')
            break;
        } else if (userguess < rightanswer){
            alert( 'you guessed too low fam aim for the head')
        } else if (userguess > rightanswer){
            alert('You totally missed the head, shoot your shot lower')
        }
        if(i === 9){
            alert('Oopsies you needed to guess ' + rightanswer);
        }  
        } 
        theGame = prompt('Shoot your shot again?');
    }
}
guessinggame();



