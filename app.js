const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fade-out");
      match.classList.add("fade-in");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer choise
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // const playerChoice = this.textContent;
        console.log(computerChoice);

        //Waiting while shaking hands
        setTimeout(() => {
          //Call compare hands
          compareHands(this.textContent, computerChoice);
          updateScore();

          //Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });

    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
      //Update text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player wins";
          pScore++;
          return;
        } else {
          winner.textContent = "Computer wins";
          cScore++;
          return;
        }
      }
      //Check for paper
      if (playerChoice === "paper") {
        if (computerChoice === "rock") {
          winner.textContent = "Player wins";
          pScore++;
          return;
        } else {
          winner.textContent = "Computer wins";
          cScore++;
          return;
        }
      }
      //Check for scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
          winner.textContent = "Player wins";
          pScore++;
          return;
        } else {
          winner.textContent = "Computer wins";
          cScore++;
          return;
        }
      }
    };
  };

  //Call all the inner functions
  startGame();
  playMatch();
};

//Call start the game function
game();
