
probab.onclick = () => {
    categories.classList.remove("activeinfo");
    QuestionBox.classList.add("activeQuiz"); //for showing question section
    document.querySelector(".title-bar").innerHTML = "PROBABILITY";
    showQuestion(0);
    queCounterprobab(1);
    startTimer(300);
    printname();
  };
  
  let qu_count = 0;
  let qu_numb = 1;
  let counter;
  let userscore = 0;
  
  
  next_button.onclick = () => {
    if (qu_count < PROBABILITY.length - 1) {
      qu_count++;
      qu_numb++;
      score.innerHTML = "score: " + userscore;
      showQuestion(qu_count);
      queCounterprobab(qu_numb);
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
  
  // change probabilities questions
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
  