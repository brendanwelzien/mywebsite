'use strict'

var yourorder = prompt('Tell me your starbucks order!');

alert('I also like ordering a ' + yourorder);

if (yourorder === 'Nothing'){
    document.write('<h2>' +'this site is for coffee enthusiasts only!' + yourorder + '</h2>')
} else { 
    document.write('<h2>' + 'mmm your ' +  yourorder + ' sounds real tasty!' + '</h2>')
}