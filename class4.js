
    var firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion;
    var incorrectAnswers = 0;
    var correctAnswers = 0;
    var message;

    function guessingGame(){
      firstQuestion(); secondQuestion(); thirdQuestion(); fourthQuestion();
      fifthQuestion(); sixthQuestion(); correctCounter();
    }

    function firstQuestion() {
    firstQuestion = prompt("Do I live in Portland, Yes or No? ", "");
    console.log("Portland answer is " + firstQuestion);
      if (firstQuestion == "Yes" || firstQuestion == "yes") {

          message = "Correct!";
          correctAnswers++;
        }

        else {

        message = "I do live in Portland, Try again";

        }
        var el = document.getElementById('answer-section1');
        el.innerHTML += message;
        //incorrectAnswers++;
        }

    function secondQuestion() {
    secondQuestion = prompt("Is green my favorite color?");
    console.log("Question two answer is " + secondQuestion);

      if (secondQuestion == "No" || secondQuestion == "no" || secondQuestion == "blue" || secondQuestion == "Blue") {
        message = "Correct! My favorite color is Blue!";
        correctAnswers++;
        }

        else {
        message = "Nope! My favorite color is Blue! Try again";
        //incorrectAnswers++;
        }

        var el = document.getElementById('answer-section2');
        el.innerHTML += message;


        }

     function thirdQuestion (){
     thirdQuestion = prompt("True or False, I've been to both Yosemite and Yellowstone National Park");
     console.log("Third question answer is " + thirdQuestion);

          if(thirdQuestion == "True" || thirdQuestion == "true") {
          message = "You got it! I've climbed Half-Dome and have been sniffed by Bison.";
          correctAnswers++;
          }

          else{
          message = "It's actually True! I've treked the Ansel Adams wilderness and witnessed Old Faithful";
          //incorrectAnswers++;
          }
          var el = document.getElementById('answer-section3');
          el.innerHTML += message;
          }

      function fourthQuestion() {
      var el = document.getElementById('answer-section4');

      fourthQuestion = prompt("How many animals do I currently own? Give me a number");
      console.log("Fourth Questions answer is " + fourthQuestion);
           if (fourthQuestion == 3 || fourthQuestion == "three") {

           message = "That's exactly right! I have one dog and two cats";
           correctAnswers++;
           }
           else {
            message = "No I do not own that many animals";
              //incorrectAnswers++;
              }
              el.innerHTML += message;
            }// while(fourthQuestion != 3)



/*fourthQuestion = prompt("How many animals do I currently own? Give me a number");
  console.log("fourth Questions answer is " + fourthQuestion);

    while(fourthQuestion != 3) {
      alert("try again");

      fourthQuestion = prompt("How many animals do I currently own? Give me a number");

    }
            alert("correct I have one dog and two cats!");
  */

      function fifthQuestion() {
        fifthQuestion = prompt("I'am thinking of a number between 1 and 10, What is it?");
        console.log("fifth question answer is " + fifthQuestion);
          if (fifthQuestion == 5) {
            message = "You got it right! the answer is 5!";
            correctAnswers++;
          }
          else {
            message = "No That was not the number I was thinking of"
          }


          var el = document.getElementById('answer-section5');
          el.innerHTML += message;
      }



/*function sixthQuestion() {
    var sixthQuestion = prompt("What countries have I been to? Name any country", "");
    if (sixthQuestion.toLowerCase() == "ireland") {
       message = "Correct I have been to Ireland" }
      else if (sixthQuestion.toLowerCase() == "scotland") {
        message = "Correct I have been to Scotland!"
        }
        else if (sixthQuestion.toLowerCase() == "united states" || sixthQuestion.toLowerCase() == "usa" ) {
          message = "Correct I have been to the United States!"
        }
          else{
            message = "No I haven't been there...yet"
          }
      var el = document.getElementById('answer-section');
      el.innerHTML = message;
    }
*/
/*function sixthQuestion() {
  var sixthQuestion = prompt("What countries have I been to? Name any country");
  for var sixthQuestion = ["ireland","scotland","usa"] ; {
    message = "Correct I have been there."
  }
  else {
    message = "No I haven't been there...yet";
  }
  var el = document.getElementById('answer-section');
  el.innerHTML = message;
}
*/

  function sixthQuestion () {
      var sixthQuestion = prompt("What countries have I been to? Name any country");
      var sixthAnswers = ["ireland", "scotland", "usa"];

      for (var i = 0; i < sixthAnswers.length; i++ ) {
      console.log (sixthAnswers[i]);
      console.log (i);
      if (sixthQuestion === sixthAnswers[i]) {
      message = "Correct! I have been to " + sixthAnswers[i];
      correctAnswers++;
      break;
      }
     else {
     message = "No, I haven't been there...yet";
      }
    }
     var el = document.getElementById('answer-section6');
     el.innerHTML += message;
    }






function correctCounter() {
 message = "You got: "+ correctAnswers + " correct \n Out of 6 Questions!"
 var el = document.getElementById('answer-section7');
 el.innerHTML += message;
}
