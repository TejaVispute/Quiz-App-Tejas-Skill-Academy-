// accessing html elements here
const infobox = document.querySelector(".info-box");
const Continue = document.querySelector("#continue");
const categories = document.querySelector(".categories-box");
const backbutton = document.querySelector(".backbtn button");
const probab = document.querySelector(".probab");
const pipe = document.querySelector(".pipe");
const ages = document.querySelector(".ages");
const profit_loss = document.querySelector(".profit_loss");
const QuestionBox = document.querySelector(".Question-box");
let answer_options = document.querySelector(".answer-options");
const timecount = document.querySelector("#timer");
const score = document.querySelector("#score");
const result = document.querySelector(".result-container");
let username = document.querySelector(".input-val").value;
const next_button = QuestionBox.querySelector(".btn");
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
  document.querySelector("#displayname").innerHTML = "Welcome " + val;
  document.querySelector(".name").innerHTML = val;

};


// for adding question of probabilities
probab.onclick = () => {
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "PROBABILITY";
  showQuestion(0);
  
  queCounter(1);
  startTimer(300);
  printname();
};

// change probabilities questions
next_button.onclick = () => {
  if (qu_count < PROBABILITY.length - 1) {
    qu_count++;
    qu_numb++;
    score.innerHTML = "score: " + userscore;
    showQuestion(qu_count);
    queCounter(qu_numb);
    next_button.classList.remove("show");
  } else {
    console.log("questons are completed");
    showResultBox();
  }
};




// accessed questions and print here of probability
showQuestion = (index) => {
  const question_text = document.querySelector(".Question");

  let qu_tag =
    "<span>" +
    PROBABILITY[index].numb +
    ". " +
    PROBABILITY[index].question +
    "</span>";
  let option_tag =
    '<span class="option">' +
    PROBABILITY[index].option[0] +
    "</span>" +
    '<span class="option">' +
    PROBABILITY[index].option[1] + //add loops here
    "</span>" +
    '<span class="option">' +
    PROBABILITY[index].option[2] +
    "</span>" +
    '<span class="option">' +
    PROBABILITY[index].option[3] +
    "</span>";

  question_text.innerHTML = qu_tag;
  answer_options.innerHTML = option_tag;
  const option = answer_options.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)"); //adding onclick event on options
  }
};


function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = PROBABILITY[qu_count].answer;
  let alloptions = answer_options.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correctAns");
    userscore += 1;
    console.log("Answer is correct"); //if answer is correct background color of answer will be green
  } else {
    answer.classList.add("incorrectAns");
    console.log("Answer is wrong"); // if answer is wrong background color will be red.

    for (let i = 0; i < alloptions; i++) {
      if (answer_options.children[i].textContent == correctAns) {
        answer_options.children[i].classList.add("correctAns");
        console.log("working");
      }
    }
  }

  // once user click one option disable all other options
  for (let i = 0; i < alloptions; i++) {
    answer_options.children[i].classList.add("disabled");
  }

  next_button.classList.add("show");
}









// Pipes and critstrens questions change using next btn

pipe.onclick = () => {
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "Pipes and Cristrens";
  showQuestionpipe(0);
  queCounter(1);
  startTimer(300);
  printname();
};

next_button.onclick = () => {
  if (qu_count < PIPES.length - 1) {
    qu_count++;
    qu_numb++;
    score.innerHTML = "score: " + userscore;
    showQuestionpipe(qu_count);
    queCounter(qu_numb);
    next_button.classList.remove("show");
  } else {
    console.log("questons are completed");
    showResultBox();
  }
};

showQuestionpipe = (index) => {
  const question_text = document.querySelector(".Question");

  let qu_tag =
    "<span>" +
    PIPES[index].numb +
    ". " +
    PIPES[index].question +
    "</span>";
  let option_tag =
    '<span class="option">' +
    PIPES[index].option[0] +
    "</span>" +
    '<span class="option">' +
    PIPES[index].option[1] + //add loops here
    "</span>" +
    '<span class="option">' +
    PIPES[index].option[2] +
    "</span>" +
    '<span class="option">' +
    PIPES[index].option[3] +
    "</span>";

  question_text.innerHTML = qu_tag;
  answer_options.innerHTML = option_tag;
  const option = answer_options.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)"); //adding onclick event on options
  }
};


function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = PIPES[qu_count].answer;
  let alloptions = answer_options.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correctAns");
    userscore += 1;
    console.log("Answer is correct"); //if answer is correct background color of answer will be green
  } else {
    answer.classList.add("incorrectAns");
    console.log("Answer is wrong"); // if answer is wrong background color will be red.

    for (let i = 0; i < alloptions; i++) {
      if (answer_options.children[i].textContent == correctAns) {
        answer_options.children[i].classList.add("correctAns");
        console.log("working");
      }
    }
  }

  // once user click one option disable all other options
  for (let i = 0; i < alloptions; i++) {
    answer_options.children[i].classList.add("disabled");
  }

  next_button.classList.add("show");
}






// ages.onclick = () => {
//   categories.classList.remove("activeinfo");
//   QuestionBox.classList.add("activeQuiz"); //for showing question section
//   document.querySelector(".title-bar").innerHTML = "Ages";
//   showQuestion(0);
//   queCounter(1);
//   startTimer(300);
//   printname();
// };

// profit_losses.onclick = () => {
//   categories.classList.remove("activeinfo");
//   QuestionBox.classList.add("activeQuiz"); //for showing question section
//   document.querySelector(".title-bar").innerHTML = "profit_losses";
//   showQuestion(0);
//   queCounter(1);
//   startTimer(300);
//   printname();
// };




const result_box = document.querySelector(".result-container");
const restart = document.querySelector(".restart");
const home = document.querySelector(".home");

// next button accessed here with probablity questions









// show pipes questions












// Timer of 300 seconds
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timecount.textContent = time;
    time--;
  }
}

// top question count increment after every next button clicked
function queCounter(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount =
    "<span>" + index + "/" + PROBABILITY.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}



// Show Result Box

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
  nameTag = '<span>' + username + " your result is" + '</span>'
  name.innerHTML = nameTag;

}
