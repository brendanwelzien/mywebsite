'use strict'

var coffeeflavor= prompt('How do you spice up your coffee?');

prompt('Is there anything else you add other than ' + coffeeflavor + ' ?');

if (coffeeflavor === 'syrup'){
    document.write('<h3>' +'watch out for those extra calories!' + coffeeflavor + '</h3>')
} else { 
    document.write('<h3>' + 'Other than ' +  coffeeflavor + ',' + ' anything with coffee is amazing.' + '</h3>')
}