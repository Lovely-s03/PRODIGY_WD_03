let box=document.querySelectorAll(".box")

let turn="X"
let isGameOver=false;

box.forEach(e=>{
    e.innerHTML=""
    e.addEventListener("click",()=>{
        if(!isGameOver && e.innerHTML===""){
            e.innerHTML=turn;
            checkWin()
            checkDraw()
            changeTurn()
        }
    })
})
function changeTurn(){
    if(turn==="X"){
        turn="O";
        document.querySelector(".background").style.left="85px"
    }
    else{
        turn="X"
        document.querySelector(".background").style.left="0px"
    }
}
function checkWin(){
let winCondition =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]

]
for(let i=0;i<winCondition.length;i++){
    let v0 = box[winCondition[i][0]].innerHTML;
    let v1 = box[winCondition[i][1]].innerHTML;
    let v2 = box[winCondition[i][2]].innerHTML;
    if(v0!="" &&v0===v1&& v0===v2){
       isGameOver=true;
       document.querySelector("#winning").innerHTML=turn+"win"
       document.querySelector("#restartBtn").style.display="inline"

       for(j=0;j<3;j++)
        {
            box[winCondition[i][j]].style.backgroundColor="yellow"
 box[winCondition[i][j]].style.color="red"
        }
    }
}
}

function checkDraw(){
    if(!isGameOver){
        let isDraw=true;
        box.forEach(e=>{
            if(e.innerHTML==="") isDraw=false
        })
        if(isDraw){
            isGameOver=true
            document.querySelector("#winning").innerHTML="Draw"
            document.querySelector("#restartBtn").style.display="inline"
     
        }
    }
}
document.querySelector("#restartBtn").addEventListener("click",()=>{
    isGameOver=false
    turn="X"
    document.querySelector(".background").style.left="0"
    document.querySelector("#winning").innerHTML=""
    document.querySelector("#restartBtn").style.display="none"
    box.forEach(e=>{
        e.innerHTML="";
       e.style.removeProperty("background-color")
    
        e.style.color="black"
    })
})
