let boxes= document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let newnbutton=document.querySelector("#new");
let message=document.querySelector(".message")
let msg=document.querySelector("#winner")
let turnO= true
const winingCase=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turnO){
            box.innerText="O";
            turnO=false
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true
        win()
        
    })
})
function Showwinner(winner){
    msg.innerText=`winner is ${winner}`
    message.classList.remove("hide")
    disablebut()

}
function win(){
    for(let i of winingCase){

        let post1val=boxes[i[0]].innerText
        let post2val=boxes[i[1]].innerText
        let post3val=boxes[i[2]].innerText
        if (post1val!="" &&(post2val!="") &&(post3val!="")){
            if ((post1val==post2val)&&(post2val==post3val)){
            console.log("winner",post1val)
            Showwinner(post1val);
            }
        }
    }

}
function disablebut(){
    for (j of boxes){
        j.disabled=true
    }
}
function enablebut(){
    for (j of boxes){
        j.disabled=false
        j.innerText=""
    }
}
function resetgame(){
    turnO=true;
    enablebut()
    message.classList.add("hide")

}
newnbutton.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)