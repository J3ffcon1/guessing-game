
    var firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion;
    var askQuestion,  guessingGame,  Welcome, updatePage;
    var wrongMessage
    var correctMessage
    var incorrectAnswers = 0;
    var correctAnswers = 0;
    var score = 0;
    var message;
    var checkmark = "<img class = 'checkmark' src = \"http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-md.png\">"
    var x_mark = "<img class = 'x_mark' src = \"http://www.caff.org/wp-content/uploads/2016/03/2000px-Xmark01.svg_.png\">"

    function Welcome() {
      message = "Welcome to my guessing game page.<br> My name is Jeff and My game consists of trivia questions about me!<br> click the guessing game button to begin!"
      var el = document.getElementById('welcome-button-message');
      el.innerHTML = message;
    }


      function guessingGame(){
      var el = document.getElementById('welcome-button-message');
      el.innerHTML = "";
      askQuestion("Do I live in Portland, Yes or No? ", "yes", checkmark + "<span class = 'correctMessage'>Q1: Correct!</span>",x_mark +"<span class = 'wrongMessage'>Q1: I do live in Portland, Try again</span>", 'answer-section1' );
      askQuestion("Is green my favorite color?", "no", checkmark + "<span class = 'correctMessage'>Q2: Correct! My favorite color is Blue!</span>" , x_mark +"<span class = 'wrongMessage'>Q2: Nope! My favorite color is Blue! Try again</span>", 'answer-section2' );
      askQuestion("True or False, I've been to both Yosemite and Yellowstone National Park", "true",  checkmark +"<span class = 'correctMessage'>Q3: You got it! I've climbed Half-Dome and have been sniffed by Bison.</span>", x_mark +"<span class = 'wrongMessage'>Q3: It's actually True! I've treked the Ansel Adams wilderness and witnessed Old Faithful</span>", 'answer-section3' );
      askQuestion("How many animals do I currently own? Give me a number", "3", checkmark + "<span class =correctMessage> Q4: That's exactly right! I have one dog and two cats</span>",x_mark + "<span class = 'wrongMessage'>Q4: No I do not own that many animals</span>", 'answer-section4' );
      askQuestion("I'am thinking of a number between 1 and 10, What is it?","5", checkmark +"<span class = 'correctMessage'>Q5: You got it right! the answer is 5!</span>", x_mark + "<span class = 'wrongMessage'>Q5: No That was not the number I was thinking of</span>", 'answer-section5' );
       sixthQuestion();
       star();
       correctCounter();
    }

    function abc() {
    location.reload();
  }

    function updatePage(elementId) {
      document.getElementById(elementId).innerHTML = message;
      }

      function askQuestion (question, answer, correctMessage, wrongMessage, location){

        var response = prompt(question);
        if (response.toLowerCase() == answer.toLowerCase()) {
          message = correctMessage;
          score += 1
        }else {
          message = wrongMessage;
        }
        updatePage(location);

      }

      function sixthQuestion () {
        var sixthQuestion = prompt("What countries have I been to? Name any country");
        var sixthAnswers = ["ireland", "scotland", "usa"];

        for (var i = 0; i < sixthAnswers.length; i++ ) {
          console.log (sixthAnswers[i]);
          console.log (i);
          if (sixthQuestion === sixthAnswers[i]) {
            message = checkmark + "<span class = 'correctMessage'>Q6: Correct! I have been to " + sixthAnswers[i]+"</span>";
            correctAnswers++;
            score += 1;
            break;
          }
              else {
                message = x_mark + "<span class = 'wrongMessage'>Q6: No, I haven't been there...yet";
                }
                }
                var el = document.getElementById('answer-section6');
                el.innerHTML += message;
              }

    function star(){
      message = "The More You Know!"
      var el = document.getElementById('Star');
      el.innerHTML+= message;
    }

    function correctCounter() {
      message = "<span class = 'correctMessage'>You got: "+ score + " correct \n Out of 6 Questions!</span>"
      var el = document.getElementById('answer-section7');
      el.innerHTML += message;
    }
