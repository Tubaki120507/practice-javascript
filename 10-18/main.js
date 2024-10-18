const gameSelector =document.getElementById("game-selector")
const gameContainer =document.getElementById("game-container")

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML ="";
    switch(gameSelector.value){
        case "none":
            gameContainer.textContent="ゲームを選ぶとここに表示されます"
            break;
        case "click-counter":
            ClickCounterGame();
            break;
        case"number-guess":
            numberGuessGame();
            break;
    }
})

function numberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number";
    input.max = 100;
    input.min = 1;
    input.placeholder = "好きな数字を入力してください(1-100)"
    let button = document.createElement("button");
    button.textContent = "予想"
    button.addEventListener("click",function(){
        const userGuess = parseInt(input.value);
        if(userGuess === randomNumber){
            message.textContent = "正解"
         } else if(userGuess > randomNumber){
            message.textContent = "値が高い"
         }else{
            message.textContent = "値が小さい"
         }
    })
    
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);

}


function ClickCounterGame(){
    let count = 0;

let button1 = document.createElement("button");
button1.textContent = "+1button";

let button2 = document.createElement("button");
button2.textContent = "+10button";

let counter = document.createElement("p");
counter.textContent = count;

button1.addEventListener("click",function(){
    count++;
    counter.textContent = count;
})

button2.addEventListener("click",function(){
    count=count + 10;
    counter.textContent = count;
})
gameContainer.appendChild(button1);
gameContainer.appendChild(button2);
gameContainer.appendChild(counter);
}

ClickCounterGame();