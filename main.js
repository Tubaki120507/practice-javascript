
function ClickCounterGame(){
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
    count=count + 10;
    counter.textContent = count;
})

counter.addEventListener("click",function(){
    count=count *0;
    counter.textContent = count;
})

gameContainer.appendChild(button1);
gameContainer.appendChild(button2);
gameContainer.appendChild(button3);
gameContainer.appendChild(counter);
}

ClickCounterGame();