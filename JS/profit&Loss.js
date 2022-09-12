
profit_losses.onclick = () => {
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); //for showing question section
  document.querySelector(".title-bar").innerHTML = "profit_losses";
  showQuestion(0);
  queCounter(1);
  startTimer(300);
  printname();
};