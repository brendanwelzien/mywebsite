'use strict'

function yourcoffee(){
    var coffeeorder = prompt('Tell me your Starbucks order!');
    alert('I also like ordering a ' + coffeeorder);
    return coffeeorder;
}
var coffeetype= yourcoffee();

function coffeeresponse(){
   if (coffeetype === 'Latte')
   document.write ('<h2>' + ' Great choice, I should try a ' + coffeetype + ' too'+ '</h2>')
   else {
       document.write('<h2>' + 'Wow, you have an exquisite taste for coffee!' + coffeetype + '</h2>')
   }
}
coffeeresponse();

function coffeebattle(){
    var wouldyourather = prompt('Would you rather drink an Americano or a Cold Brew?');
    return wouldyourather;
}
var coffeepref = coffeebattle()

function writeToWebPage(coffeewinner){
    document.write('<h3>' + coffeewinner  + '</h3>');
}

writeToWebPage (coffeepref)