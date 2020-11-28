// starting of quiz app

var readLineSync = require('readline-sync');

var userName = readLineSync.question("Enter your name: ");
var welcomeMessage = "Welcome onboard!! ";
var checkMessage = "Let's check how well do you know me!!"
var score = 0;

var highScore=[
  {
    name: "Shivom",
    scores: 5
  },
  {
    name: "Manish",
    scores: 4
  }
]

console.log(welcomeMessage + userName);
console.log(checkMessage);
console.log("");

questionOne = {
  question: "Let's start from my birthday, my birthday is on which date? (e.g, 24 nov) ",
  answer: "22 Feb"
}

questionTwo = {
  question: "Where is my hometown? ",
  answer: "Shikohabad"
}

questionThree = {
  question: "What is my favourite dish? ",
  answer: "Chole"
}

questionFour = {
  question: "Who is my favourite actor? ",
  answer: "Irfan Khan"
}

questionFive = {
  question: "Which is my favourite place? ",
  answer: "Kasol"
}

function play(playquestion, playanswer){
  var userAnswer = readLineSync.question(playquestion);
  if(userAnswer === playanswer){
      console.log("you answered " + userAnswer);
    console.log("Your are Right");
  
    score++;
  }
  else{
    console.log("You are wrong");
  }

}
// play("where i am from", "delhi")

var questionsarr = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(i=0;i<questionsarr.length;i++){
  var item = questionsarr[i];
  play(item.question,item.answer);
}

console.log("Your total score: " + score);

console.log("Our top scorers are: ")
for(var i=0;i<highScore.length;i++){
  console.log(highScore[i].name + " has score " + highScore[i].scores);
  if(score>highScore[i].scores){
    console.log("Hurray!! You have beaten " + highScore[i].name);
    console.log("Please send screenshot of your score to us");
  }
}

