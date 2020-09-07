'use strict';

// Welcome Message
alert('Welcome To Mind Games World');
var username = prompt('Please Tell Me Your Name So We Can Know Each Other More');
// console.log('Nice To Meet You ' + username );
alert('Nice To Meet You ' + username + ' !!');
alert('Well ' + username + ' I Prepared For You Several Questions');

// Question 1
var qs1 = confirm('Shall We Start To Know Each Other Now?');
// console.log(qs1);
if (qs1 === true ){
  alert('Ok Great To Know That You Are Ready');
} else if (qs1 === false ){
  alert('Really!! You Broke My Heart... Bye :\'( ');
}

// Question 2

var qs2 = prompt('Ok Now First Of All If I Asked You To Go With Me Into A Date ... Will You Agree??', 'yes Or no Or maybe').toLowerCase();
// console.log(qs2);

if(qs2 === 'yes' ){
  alert('Ooh Really!! Lets Go Then At 11AM Someday');
} else if (qs2 === 'no' ){
  alert('Why Not!! ' + username + ' Whyyyyyyyyyy!');
} else if (qs2 === 'maybe'){
  alert('Please ' + username + ' I Hate Maybe Just Answer With Yes Or No');
} else {
  alert('Ok Ok Continue Ignoring ME '+ username + ' :(');
}

// Question 3
// eslint-disable-next-line no-unused-vars
var qs3 = confirm('Did You Know That I Drink Coffee Mate Every Morning ?');
// console.log(qs3);
if (qs3 === true ){
  alert('Yes, Because I Don\'t Like Coffee Hehe' );
} else if (qs3 === false ){
  alert('Really!! Now You Know My Favorite Drink :p ');
}


// Question 4
var qs4 = confirm('Do You Think That I Smoke??');
// console.log(qs4);
if (qs4 === true ){
  alert('Actually.. You Are Wrong I Never Smoke :D');
} else if (qs4 === false ){
  alert('You Guessed.. I Never Smoke ');
}
// Question 5
var qs5 = confirm('Did You Know That I Sleep Barefoot? ');
// console.log(qs5);
if (qs5 === true ){
  alert('LOL.. Joke On You We All Sleep Barefoots :p ');
} else if (qs5 === false ){
  alert('Really!! Now You Already Know :) ');
}

// Question 6
var qs6 = confirm('Say Yes If You Are An Android User And No If You  Are Not');
// console.log(qs6);
if (qs6 === true ){
  alert('So! You Are An Android User ... You Can\'t Join My IOS Club Sorry :( ');
} else if (qs6 === false ){
  alert('Really!! Welcome To My IOS Club :D ');
}

alert('Congratulation You Are Now My Friend ' + username );

