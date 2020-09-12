'use strict';

document.getElementsByClassName('quiz');
// eslint-disable-next-line no-unused-vars
function quizx(){


  // Define The Scores vars
  var oneA = 0;
  var twoA = 0;
  var threeA = 0;
  var fourA = 0;
  var fiveA = 0;
  var sixA = 0;
  var sevenA = 0;

  //--------------------------------------------------------------------

  // Welcome Message

  alert('Welcome To Mind Games World');
  var username = prompt('Please Tell Me Your Name So We Can Know Each Other More');
  // console.log('Nice To Meet You ' + username );
  alert('Nice To Meet You ' + username + ' !!');
  alert('Well ' + username + ' I Prepared For You Several Questions');

  //--------------------------------------------------------------------
  // Question 1


  function test1 (){
    var qs2 = prompt('Ok Now First Of All If I Asked You To Go With Me Into A Date ... Will You Agree??', 'yes Or no Or maybe').toLowerCase();
    // console.log(qs2);

    if(qs2 === 'yes' || qs2 === 'y'){
      oneA = qs2 = 1;
      alert('Ooh Really!! Lets Go Then At 11AM Someday');
    } else if (qs2 === 'no' || qs2 === 'n'){
      oneA = qs2 = -1;
      alert('Why Not!! ' + username + ' Whyyyyyyyyyy!');
    } else if (qs2 === 'maybe'){
      alert('Please ' + username + ' I Hate Maybe Just Answer With Yes Or No');
    } else {
      oneA = qs2;
      alert('Ok Ok Continue Ignoring ME '+ username + ' :(');
    }
    alert (' You Got ' + Number(oneA) + ' Point');
  }
  test1();
  //--------------------------------------------------------------------

  // Question 2

  function test2(){
    var qs3 = confirm('Did You Know That I Drink Coffee Mate Every Morning ?');
    // console.log(qs3);
    if (qs3 === true ){
      twoA = qs3 = 1;
      alert('Yes, Because I Don\'t Like Coffee Hehe' );
    } else if (qs3 === false ){
      alert('Really!! Now You Know My Favorite Drink :p ');
    } twoA = qs3;
    alert ('You got ' + Number(twoA) + ' Point');
  }
  test2();
  //--------------------------------------------------------------------

  // Question 3

  function test3(){
    var qs4 = confirm('Do You Think That I Smoke??');
    // console.log(qs4);
    if (qs4 === true ){
      threeA = qs4 = 0;
      alert('Actually.. You Are Wrong I Never Smoke :D');
    } else if (qs4 === false ){
      threeA = qs4 = 1;
      alert('You Guessed.. I Never Smoke ');
    }
    alert ('You Got ' + Number(threeA) + ' Point');
  }
  test3();
  //--------------------------------------------------------------------

  // Question 4

  function test4(){
    var qs5 = confirm('Did You Know That I Sleep Barefoot? ');
    // console.log(qs5);
    if (qs5 === true ){
      alert('LOL.. Joke On You We All Sleep Barefoots :p ');
      fourA = qs5 = 1;
    } else if (qs5 === false ){
      alert('Really!! Now You Already Know :) ');
    } fourA = qs5;
    alert ('You Got ' + Number(fourA) + ' Point');
  }
  test4();
  //--------------------------------------------------------------------

  // Question 5

  function test5(){
    var qs6 = confirm('Say Yes If You Are An Android User And No If You  Are Not');
    // console.log(qs6);
    if (qs6 === true ){
      alert('So! You Are An Android User ... You Can\'t Join My IOS Club Sorry :( ');
      fiveA = qs6 = 0;
    } else if (qs6 === false ){
      alert('Really!! Welcome To My IOS Club :D ');
      fiveA = qs6 = 1;
    }

    alert ('You Got ' + Number(fiveA) + ' Point');
    alert('You Are Now My Friend ' + username + ' I Have 2 Questions For You' );
  }
  test5();
  //--------------------------------------------------------------------

  // Question 6

  function test6(){
    var arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var attemps = 3;

    for( var r = 0; r < 4 ; r++){
      var userNum = prompt(' Can You Guess The Number That is In My Mind From 1 to 15');
      userNum = Number(userNum);
      console.log(r);
      if (userNum !== arrayNumbers[6]){

        if(userNum < arrayNumbers[6] ){
          alert (' Oops Not '+ userNum + ' Too Low!! ');
        }else if (userNum > arrayNumbers[6] && userNum <= arrayNumbers[14]){
          alert (' Oops Not '+ userNum + ' Too High!! ');
        }else if (userNum > arrayNumbers[14] ){
          alert (' I said From 1 To 15 !!!');
        }

        alert (' You have '+ attemps-- + ' Attempts left');

        if (attemps === -1 ){

          alert (' You Don\'t Have Any Attempts left');
          alert ('Sorry ' + username + ' You\'ve Used Up All Your 4 Attemps ... My Number Was 7');
          break;
        }
      } else {
        alert('Impressive!! ' + username + ' You Read My Mind!!' );
        sixA = userNum = 1;
        break;
      }
    }
    alert ('You Got ' + sixA + ' Point');
  }
  test6();
  //--------------------------------------------------------------------

  // Question 7

  function test7(){
    var arrayQues = ['fish', 'human' , 'light' ,'sun light', 'fire', 'egg' , 'shark', 'car' ];
    var attemps2 = 5;

    for( var q = 0; q < 6 ; q++){
      var userInput = prompt(' A Thing That Can Enter The Water Without getting Wet??').toLowerCase();
      console.log(q);
      if(userInput === arrayQues[2] || userInput === arrayQues[3]){
        alert('ًWell Done Einstein!!  You Are Not Supposed To Be in This Planet ' + username + ' :O' );
        sevenA = userInput = 1;
        break;

      }else{

        alert (' Nahh Not '+ userInput + ' You Need To Focus More ');
        alert (' You have '+ attemps2-- + ' Attempts left');
        if (attemps2 === -1 ){

          alert (' You Don\'t Have Any Attempts left');
          alert ('Sorry ' + username + ' You\'ve Used Up All Your 6 Attemps ... The Answer is light or sun light');
          break;
        }
      }
    }
  }
  test7();

  ('You Got ' + Number(sevenA) + ' Point');
  alert ('Your Total Score is ' + (Number(oneA) + Number(twoA) + Number(threeA) + Number(fourA) + Number(fiveA) + sixA + Number(sevenA)) + ' From 7 Points .. Not Bad');
  //--------------------------------------------------------------------

}


