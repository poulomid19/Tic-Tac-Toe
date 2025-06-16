let boxes = document.querySelectorAll(".box")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let rstbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn")
let count = 0
let turn = true
let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,5,8],
    [2,4,6]
]

let resetgame = ()=>{
    turn = true;
    for(let box of boxes){
    box.disabled = false;
    box.innerText =""
    }
    msgContainer.classList.add("hide")
}

let showwinner = (winner)=>{
   msg.innerText = `Congrats, winner is ${winner}`
   msgContainer.classList.remove("hide")
   for(let box of boxes){
    box.disabled = true
   }
}
let gamedraw =()=>{
    msg.innerText = "Game is draw! Start a new game"
    msgContainer.classList.remove("hide")
}

let checkwinner = ()=>{
    for(let pattern of winningPattern){
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if(pos1!==""&& pos2!==""&& pos3!==""){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1)
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turn){
        box.innerText = "O"
        turn = false
        count++
      }
      else{
        box.innerText = "X"
        box.style.color = "red"
        turn = true
        count++
      }
      if(count==9){
        gamedraw()
        box.disabled = true
      }
      box.disabled = true
      checkwinner()
    })
})

rstbtn.onclick=()=>{
    resetgame();
}
newbtn.onclick=()=>{
    resetgame()
}