profit.onclick = () => {
  const val = document.querySelector(".input-val").value;

  if (val == "") {
    alert("Please Enter Name Before Choosing Category");
    return;
  }
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "PROFIT AND LOSS";
  showQuestionprofit(0);
  queCounterprofit(1);
  startTimer(300);
  printname();
};

next_button.onclick = () => {
  if (qu_count < PROFIT.length - 1) {
    qu_count++;
    qu_numb++;
    score.innerHTML = "score: " + userscore;
    showQuestionprofit(qu_count);
    queCounterprofit(qu_numb);
    next_button.classList.remove("show");
  } else {
    console.log("questons are completed");
    showResultBox();
  }
};

// accessed questions and print here of PROFIT
showQuestionprofit = (index) => {
  const question_text = document.querySelector(".Question");

  let qu_tag =
    "<span>" + PROFIT[index].numb + ". " + PROFIT[index].question + "</span>";
  let option_tag =
    '<span class="option">' +
    PROFIT[index].option[0] +
    "</span>" +
    '<span class="option">' +
    PROFIT[index].option[1] + //add loops here
    "</span>" +
    '<span class="option">' +
    PROFIT[index].option[2] +
    "</span>" +
    '<span class="option">' +
    PROFIT[index].option[3] +
    "</span>";

  question_text.innerHTML = qu_tag;
  answer_options.innerHTML = option_tag;
  const option = answer_options.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelectedprofit(this)"); //adding onclick event on options
  }
};

// change probabilities questions
function optionSelectedprofit(answer) {
  let userAns = answer.textContent;
  let correctAns = PROFIT[qu_count].answer;
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

// inside legend box question count increse with every click
function queCounterprofit(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount = "<span>" + index + "/" + PROFIT.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}

// Timer of 300 seconds
// function startTimer(time) {
//   counter = setInterval(timer, 1000);
//   function timer() {
//     timecount.textContent = time;
//     time--;
//   }
// }
