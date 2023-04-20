const myBox= document.querySelector("#myBox");
const ctx = myBox.getContext("2d");
const scoreBoard = document.querySelector("#points");
const resetBtn = document.querySelector("#reset");
const width = myBox.width;
const height = myBox.height;
const boardColor="white";
const snakeColor="green";
const snakeBorder="black";
const foodColor="pink";
const unitSize = 25;
let running=false;
let xVelocity=unitSize;
let yVelocity=unitSize;
let foodX;
let foodY;
let score=0;
let snake=[
    {x:unitSize *4, y:0},
    {x:unitSize *3, y:0},
    {x:unitSize *2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0},

]
window.addEventListener("keydown", directionHandler);
resetBtn.addEventListener("click", reset);

gameStart();


function gameStart(){
    running=true;
    scoreBoard.textContent=score;
    createFood();
    drawFood();
    nextTick();
}
function nextTick() {

    if (running) {
        setTimeout(function () {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            gameOver();
            nextTick();


        }, 75)

    }
    else {
        displaygameOver();
    }
}
function clearBoard(){
    ctx.fillStyle=boardColor;
    ctx.fillRect(0,0,width,height);
}
function createFood(){
    function randomFood(min, max) {
        return Math.round((Math.random() * (max - min) + min) / unitSize)* unitSize;
    }
    foodX=randomFood(0,width-unitSize);
    foodY=randomFood(0,width-unitSize);
}
function drawFood(){
    ctx.fillStyle=foodColor;
    ctx.strokeStyle=snakeBorder;

}
function drawSnake(){
    ctx.fillStyle=snakeColor;
    ctx.fillRect(snake[0].x,snake[0].y,unitSize,unitSize);
    snake.forEach(function(snakePart){
        ctx.fillRect(snakePart.x,snakePart.y,unitSize,unitSize);
        ctx.strokeRect(snakePart.x,snakePart.y,unitSize,unitSize);
    })
}
function moveSnake(){}
function directionHandler(e){}
function gameOver(){}
function displaygameOver(){}
function reset(){}