

// onclick pipe it checks user have provided their name or not
pipe.onclick = () => {
  const val = document.querySelector(".input-val").value;

  if (val == "") {
    alert("Please Enter Name Before Choosing Category");
    return;
  }
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "Pipes and Cristrens";
  showQuestionpipe(0);
  queCounter(1);
  printname();
};

next_button_pipe.onclick = () => {
  if (qu_count < PIPES.length - 1) {
    qu_count++;
    qu_numb++;
    score.innerHTML = "score : " + userscore;
    showQuestionpipe(qu_count);
    queCounter(qu_numb);
    next_button_pipe.classList.remove("show");
  } else {
    console.log("questons are completed");
    showResultBox();
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

  next_button_pipe.classList.add("show");
}


function queCounter(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount =
    "<span>" + index + "/" + 10 + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}