let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let msgContainer =  document.querySelector(".msg-container");
let msgContainerPara = document.querySelector("#msg");
let turn0 = true; //playerX, playerY
let countButtonClick = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () =>{
    countButtonClick=0;
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msgContainerPara.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const gameDraw = () =>{
    msgContainerPara.innerText = `Game Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        countButtonClick++;
        box.disabled = true;
        let isWinner=checkWinner();
        if(countButtonClick==9 && !isWinner){
            gameDraw();
        }
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);