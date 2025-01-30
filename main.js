
/*function ClickCounterGame(){
    let count = 0;
    gameContainer = document.getElementById("game-container")

let button1 = document.createElement("button");
button1.textContent = "+1button";

let button2 = document.createElement("button");
button2.textContent = "+10button";

let button3 = document.createElement("button");
button3.textContent = "resetbutton";

let counter = document.createElement("p");
counter.textContent = count;

button1.addEventListener("click",function(){
    count++;
    counter.textContent = count;
})

button2.addEventListener("click",function(){
    if(count <= 90){
        count=count + 10;
    }
    counter.textContent = count;
})

button3.addEventListener("click",function(){
    count=count *0;
    counter.textContent = count;
})

gameContainer.appendChild(button1);
gameContainer.appendChild(button2);
gameContainer.appendChild(button3);
gameContainer.appendChild(counter);
}

ClickCounterGame();*/

function startNumberGuessGame(){
    gameContainer = document.getElementById("game-container");
    const randomNumber = Math.floor (Math.random() * 100 ) + 1 ;
    let message = document.createElement("p");
    message.textContent = randomNumber;
    let input = document.createElement("input");
    input.type = "Number";
    input.placeholder = "好きな数字を入力してください(1~100)";
    gameContainer.appendChild(message);
    gameContainer.appendChild(input);

    let button = document.createElement("button");
    button .textContent = "確認"

    button.addEventListener("click",function(){
        if (randomNumber == parseInt(input.value)){
            message.textContent = "正解"
        }else{
            message.textContent = "違うよ"
        }
    })
    gameContainer.appendChild(button);

}

startNumberGuessGame();