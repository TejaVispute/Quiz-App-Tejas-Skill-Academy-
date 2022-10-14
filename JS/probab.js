// probab categorie button accessed here
const probab = document.querySelector(".probab");
const next_button = QuestionBox.querySelector("#next");


// when click on probablity section this code will be executed
probab.onclick = () => {
  const val = document.querySelector(".input-val").value;

  if (val == "") {
    alert("Please Enter Name Before Choosing Category");
    return;
  }
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "PROBABILITY";
  showQuestion(0);
  queCounterprobab(1);
  showMynum()
  printname();
};


// with the help of this next button it changes probablity related questions
next_button.onclick = () => {
  if (qu_count < PROBABILITY.length - 1) {
    qu_count++;
    qu_numb++;
    count++;
    score.innerHTML = "score: " + userscore;
    showQuestion(qu_count);
    queCounterprobab(qu_numb);
    next_button.classList.remove("show");
  } else {
    count++;
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


// This function will check either answer is right or wrong
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


// on the top of question question count will change from here
function queCounterprobab(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount =
    "<span>" + index + "/" + PROBABILITY.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}
