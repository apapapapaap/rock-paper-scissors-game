let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      updateScoreElement();

      function playGame(PlayerMove) {
        const computerMove = pickComputerMove();
        let result = "";

        if (PlayerMove === "Rock") {
          if (computerMove === "Rock") {
            result = "Tie";
          } else if (computerMove === "Paper") {
            result = "You lose!";
          } else {
            result = "You win";
          }
        } else if (PlayerMove === "Paper") {
          if (computerMove === "Rock") {
            result = "You win";
          } else if (computerMove === "Paper") {
            result = "Tie";
          } else {
            result = "You lose!";
          }
        } else if (PlayerMove === "Scissors") {
          if (computerMove === "Rock") {
            result = "You lose!";
          } else if (computerMove === "Paper") {
            result = "You win";
          } else {
            result = "Tie";
          }
        }

        if (result === "You win") {
          score.wins += 1;
        } else if (result === "You lose!") {
          score.losses += 1;
        } else {
          score.ties += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        // 🟢 Update DOM elements instead of alert
        document.querySelector(
          ".js-result"
        ).innerHTML = `<strong>${result}</strong>`;
        document.querySelector(
          ".js-move"
        ).innerHTML = `You <img src="./${PlayerMove}-emoji.png" class="move-icon"/> <img src="./${computerMove}-emoji.png" class="move-icon"/> Computer`;
        updateScoreElement();
      }

      function pickComputerMove() {
        const random = Math.random();
        if (random < 1 / 3) {
          return "Rock";
        } else if (random < 2 / 3) {
          return "Paper";
        } else {
          return "Scissors";
        }
      }

      function resetScore() {
        score = {
          wins: 0,
          losses: 0,
          ties: 0,
        };
        localStorage.removeItem("score");
        updateScoreElement();

        // Clear result and moves
        // document.querySelector('.js-result').innerHTML = '';
        // document.querySelector('.js-move').innerHTML = '';
      }

      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
