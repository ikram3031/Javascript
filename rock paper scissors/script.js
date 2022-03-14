function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(ranToRpsTnt());
    console.log(botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function ranToRpsTnt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    };

var yourScore = rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
     if (yourScore === 0) {
         return{'message':'You lost', 'color':'red'};
     } else if (yourScore === 0.5) {
         return {'message': 'You Tied', 'color':'yellow'};
     } else {
         return {'message': 'You Won', 'color':'green'};
     }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    } 

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img arc='" + imagesDatabase[humanImageChoice] + "'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
}
