// "use strict";
// // document.querySelector(".number").textContent = 4;
// let score = 20;
// let highScore = 0;
// let random = Math.trunc(Math.random() * 20) + 1;

// let guess;
// document.querySelector(".label-highscore").style.visibility = "hidden";

// document.querySelector(".check").addEventListener("click", function () {
//   document.querySelector(".label-highscore").style.visibility = "hidden";

//   guess = Number(document.querySelector(".guess").value);
//   //   alert(typeof guess, guess);

//   if (!guess) {
//     document.querySelector(".message").textContent =
//       "This is not a guessing number  👀";
//     document.querySelector("body").style.backgroundColor = "lightred";
//   } else if (guess == random) {
//     document.querySelector(".message").textContent =
//       "Congratulations Nigga  ✔✔";
//     document.querySelector(".label-highscore").style.visibility = "visible";
//     document.querySelector(".number").textContent = random;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     }
//   } else if (guess > random) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Incorrect 😞😞";
//       document.querySelector(".message").textContent = "Too High 😞😞";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "You Lost, try again😪😪😪";
//       //   document.querySelector(".score").textContent = 0;
//     }
//     document.querySelector(".score").textContent = score;
//   } else if (guess < random) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low 😞😞";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "You Lost, try again😪😪😪";
//       // document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", () => {
//   document.querySelector(".label-highscore").style.visibility = "hidden";
//   score = 20;
//   guess = Number(document.querySelector(".guess").value);
//   document.querySelector(".message").textContent = "Start Guessing........";
//   document.querySelector(".score").textContent = 0;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   random = Math.trunc(Math.random() * 20) + 1;
// });

"use strict";
// document.querySelector(".number").textContent = 4;
let score = 20;
let highScore = 0;
let random = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let guess;
document.querySelector(".label-highscore").style.visibility = "hidden";

document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".label-highscore").style.visibility = "hidden";

  guess = Number(document.querySelector(".guess").value);
  //   alert(typeof guess, guess);

  if (!guess) {
    // document.querySelector(".message").textContent =
    //   "This is not a guessing number  👀";
    displayMessage(`This is not a number`);
    document.querySelector("body").style.backgroundColor = "lightred";
  } else if (guess == random) {
    // document.querySelector(".message").textContent =
    //   "Congratulations Nigga  ✔✔";
    displayMessage(`Congratulations Nigga ✔✔✔`);
    document.querySelector(".label-highscore").style.visibility = "visible";
    document.querySelector(".number").textContent = random;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      console.log(highScore);
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != random) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > random ? "Too High" : "Too Low";
      displayMessage(guess > random ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost";
      displayMessage(`You lost`);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".label-highscore").style.visibility = "hidden";
  score = 20;
  guess = Number(document.querySelector(".guess").value);
  // document.querySelector(".message").textContent = "Start Guessing........";
  displayMessage(`Start Guessing...`);
  document.querySelector(".score").textContent = 0;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);
});
