// write your JavaScript here
let btnFeedback = document.getElementById("btn-feedback");
let feedbackContainer = document.getElementById("feedback");
let numberFeedbackBtn = document.getElementsByClassName("btn-feedback");
let submitBtn = document.getElementById("submitBtn");
let cancelBtn = document.getElementById("cancel-btn");
let crossBtn = document.getElementById("cross-btn");
btnFeedback.addEventListener("click", () => {
  feedbackContainer.classList.remove("hide");
});

console.log(numberFeedbackBtn);
let feedValue = 0;
for (let i = 0; i < numberFeedbackBtn.length; i++) {
  numberFeedbackBtn[i].addEventListener("click", (e) => {
    numberFeedbackBtn[i].focus();
    feedValue = Number(numberFeedbackBtn[i].innerHTML);
    console.log(i);
  });
}
submitBtn.addEventListener("click", () => {
  let ele = document.createElement("p");
  if (feedValue < 1) {
    alert("Enter valid Feedback");
  } else {
    ele.innerHTML = `Feedback Value is ${feedValue}`;
    document.body.appendChild(ele);
    feedbackContainer.classList.add("hide");
    feedValue = 0;
  }
});
cancelBtn.addEventListener("click", function () {
  feedbackContainer.classList.add("hide");
});
crossBtn.addEventListener("click", () => {
  feedbackContainer.classList.add("hide");
});
