(function () {

    'use strict';
    console.log("reading js");

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const pigSound = new Audio('media/snort.mp3');
    const snakeSound = new Audio('media/rattlesnakerattle.mp3');

    var gameData = {
        dice: ['images/1die.svg', 'images/2die.svg', 'images/3die.svg', 'images/4die.svg', 'images/5die.svg', 'images/6die.svg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    //start game function
    startGame.addEventListener('click', function() {

        const player1 = document.querySelector('#player1').value;
        const player2 = document.querySelector('#player2').value;

        gameData.players[0] = player1;
        gameData.players[1] = player2;
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Quit Game?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        pigSound.play();
        //tells me which player goes first
        console.log(gameData.index);
        setUpTurn();
    });

    //set-up turn function
    function setUpTurn() {
        game.innerHTML = `<p><span class="names">${gameData.players[gameData.index]}</span>, the time is now.</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });
    }

    //rolling dice function
    function throwDice() {
        //clears action data
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero so we use floor instead
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p><span class="names">${gameData.players[gameData.index]}</span> is up!</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}">
            <img src="${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        if(gameData.rollSum === 2) {
            snakeSound.play();
            game.innerHTML += '<p>Ssssss! Snake eyes!</p>';
            //zero out score
            gameData.score[gameData.index] = 0;
            //swap player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //show the current score
            showCurrentScore();
            //set up turn
            setTimeout(setUpTurn, 2000);
        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1) {
            //swap player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, you rolled a one! Switching to <span class="names">${gameData.players[gameData.index]}</span></p>`
            //set up turn
            setTimeout(setUpTurn, 2000);
        }
        else {
            console.log('game proceeds!');
            //update score
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            //add buttons to action area
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function(){
                //swap player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    //winning condtion check function
    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2><span class="names">${gameData.players[gameData.index]}</span> wins with <span class="score">${gameData.score[gameData.index]}</span> points!</h2>`;

            //clear action area
            actionArea.innerHTML = "";
            document.getElementById('quit').innerHTML = "Start a New Game";
        }
        else {
            showCurrentScore();
        }

    }

    function showCurrentScore() {
        score.innerHTML = `<p><span class="names">${gameData.players[0]}</span>: <span class="score">${gameData.score[0]}</span> and <span class="names">${gameData.players[1]}</span>: <span class="score">${gameData.score[1]}</span></p>`;
    }
    

})();