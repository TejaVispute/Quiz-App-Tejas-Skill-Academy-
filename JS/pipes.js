const pipe = document.querySelector(".pipe");
let next2 = document.querySelector("#next2");

// on click of pipe categorie this function will be executed
pipe.onclick = () => {
  const val = document.querySelector(".input-val").value;

  if (val == "") {
    alert("Please Enter Name Before Choosing Category");
    return;
  }
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "PIPE AND CRISTRENS";
  showQuestionpipe(0);
  queCounterprofit(1);
  showMynum();
  printname();
};


// This next2 button will work only for changing next question of pipe
next2.onclick = () => {
  if (qu_count < PIPES.length - 1) {
    qu_count++;
    qu_numb++;
    count++;
    score.innerHTML = "score: " + userscore;
    showQuestionpipe(qu_count);
    queCounterprofit(qu_numb);
    next_button.classList.remove("show");
    next2.classList.remove("show");
  } else {
    count++;
    console.log("questons are completed");
    showResultBox();
  }
};

// accessed questions and print here of Pipes
showQuestionpipe = (index) => {
  const question_text = document.querySelector(".Question");

  let qu_tag =
    "<span>" + PIPES[index].numb + ". " + PIPES[index].question + "</span>";
  let option_tag =
    '<span class="option">' +
    PIPES[index].option[0] +
    "</span>" +
    '<span class="option">' +
    PIPES[index].option[1] + 
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
    option[i].setAttribute("onclick", "optionSelectedpipe(this)"); //adding onclick event on options
  }
};

// change probabilities questions
function optionSelectedpipe(answer) {
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

  next2.classList.add("show");
}

// inside legend box question count increse with every click
function queCounterprofit(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount = "<span>" + index + "/" + PIPES.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}
