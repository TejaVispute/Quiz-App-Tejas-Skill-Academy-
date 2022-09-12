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

