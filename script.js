var scores, roundScore, activePlayer, gamePlaying;
var lastDice;

init();

document.querySelector('.roll-btn').addEventListener('click', function(){
	
    if(gamePlaying){
    // Random number
	var dice1 = 1+ Math.floor(6*Math.random());
	var dice2 = 1+ Math.floor(6*Math.random());
	
	// display the result
	//var diceDOM = document.querySelector('.dice');
	
	//diceDOM.style.display = 'block';
	//diceDOM.src = 'dice-' + dice + '.png';
	
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        if (dice1 !== 1 && dice2 !== 1){
            roundScore = roundScore+ dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            setTimeout(nextPlayer,300);
        }
        
	
        /*
	// update the roundScore if the dice is not 1
    if(dice === 6 && lastDice === 6){
        //player looses entire score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        setTimeout(nextPlayer,200);
    } else if(dice !== 1) {
		//add Score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		
	} else {
		//Next Player
       setTimeout(nextPlayer,200);
	}
        lastDice = dice; 
 }*/
    }
	
});

document.querySelector('.save-btn').addEventListener('click',function(){
    
    if(gamePlaying){
        // add current score to global score
    scores[activePlayer] += roundScore;
    
    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var finalScore = document.querySelector('.final-score').value;
        var winningScore;
        
        if(finalScore){
            winningScore = finalScore;
        } else {
            winningScore = 100;
        }
    
    // Check if the player have won 
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#player-' + activePlayer).textContent = 'Winner!';
        //document.querySelector('.dice').style.display = 'none';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        gamePlaying = false;
        
    } else {
        setTimeout(nextPlayer,300);
    }    
  }
    
    
});

document.querySelector('.new-btn').addEventListener('click',init);

function nextPlayer(){
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.dice').style.display = 'none';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        
}



function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    //document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('player-0').textContent = 'Player-1';    
    document.getElementById('player-1').textContent = 'Player-2';    
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
}
