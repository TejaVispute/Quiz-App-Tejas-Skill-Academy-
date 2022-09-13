// accessing html elements here
const infobox = document.querySelector(".info-box");
const Continue = document.querySelector("#continue");
const categories = document.querySelector(".categories-box");
const backbutton = document.querySelector(".backbtn button");
const probab = document.querySelector(".probab");
const pipe = document.querySelector(".pipe");
const ages = document.querySelector(".ages");
const profit = document.querySelector(".profit_loss");
const QuestionBox = document.querySelector(".Question-box");
let answer_options = document.querySelector(".answer-options");
const timecount = document.querySelector("#timer");
const score = document.querySelector("#score");
const result = document.querySelector(".result-container");
let username = document.querySelector(".input-val").value;
const next_button = QuestionBox.querySelector(".btn");
const result_box = document.querySelector(".result-container");
const restart = document.querySelector(".restart");
const home = document.querySelector(".home");
let qu_count = 0;
let qu_numb = 1;
let counter;
let userscore = 0;

// if continue button clicked
Continue.onclick = () => {
  categories.classList.add("activeinfo"); //for showing options section
  infobox.classList.add("disp"); //for hiding infobox section
};
// for remove activeinfo
backbutton.onclick = () => {
  categories.classList.remove("activeinfo");
  infobox.classList.remove("disp"); //for hiding infobox section
};

// for printing user input name on screen
printname = () => {
  const val = document.querySelector(".input-val").value;
  if (isNaN(val)) {
    document.querySelector("#displayname").innerHTML = "Welcome " + val+ " 😃";
    document.querySelector(".name").innerHTML = "User Name : " + val ;
  } else {
    alert("Please Enter a valid Name");
  }
};

// for adding question of probabilities

// inside legend box question count increse with every click
function queCounterprobab(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount =
    "<span>" + index + "/" + PROBABILITY.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}

// Timer of 300 seconds
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timecount.textContent = time;
    time--;
  }
}

// top question count increment after every next button clicked

// Show Result Box At the end
function showResultBox() {
  categories.classList.remove("activeinfo");
  QuestionBox.classList.remove("activeQuiz");
  result.classList.add("activeResult");
  const name = document.querySelector(".name-result");
  const timetaken = document.querySelector(".time_taken");
  const attempts = document.querySelector(".attempts");
  const correct = document.querySelector(".correct");
  const wrong = document.querySelector(".wrong");
  const Percentage = document.querySelector(".Percentage");
  let username = document.querySelector(".input-val").value;
  nameTag = "<span>" + username + " your result is" + "</span>";
  name.innerHTML = nameTag;
  let total_time = 300 - timecount;
  time_tag = "<span>" + "Total Time Taken " + total_time + "</span>";
  timetaken.innerHTML = time_tag;
  let correct_tag = "<span>"+ "Correct Answers Are : " +  userscore +"</span>";
  correct.innerHTML = correct_tag;
  let incorrect_tag = 10-userscore;
  wrong.innerHTML =  "Wrong Answers Are : " + incorrect_tag;
  let percentage_tag= userscore/10*100
  Percentage.innerHTML=  "Your Percentage Are : " + percentage_tag +"%";
}
