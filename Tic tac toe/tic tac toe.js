let boxes=document.querySelectorAll('.box')
let msgCnt=document.querySelector('.msg-cnt')
let msg=document.getElementById('msg')
let newGame=document.getElementById('newGame')
let turnx=true;
let count=0;
let winnigPattern=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
msgCnt.classList.add('hide')
boxes.forEach( box => {
    box.addEventListener('click',(x)=>{
        count++;
        if(turnx){
            box.innerText='X'
            box.style.color='red'
            turnx=false
        }
        else{
            box.innerText='O'
            box.style.color='blue'
            turnx=true
        }
        box.disabled=true;
        let winner=checkwin()
        if(winner==false && count==9){
            msgCnt.classList.remove('hide')
            msg.innerText=`Match Draw`
        };
    })
});

let checkwin=()=>{
    for (let p of winnigPattern){
        let p1=boxes[p[0]].innerText
        let p2=boxes[p[1]].innerText
        let p3=boxes[p[2]].innerText
        if(p1!='' && p2!='' && p3!=''){
            if(p1===p2 && p2===p3){
                msg.innerText=`Winner is ${p1}`
                msgCnt.classList.remove('hide')
                disableBoxes()
                return true;
            }
        }
    }
    return false;
}

let disableBoxes = () => {boxes.forEach(box => box.disabled = true);};
newGame.addEventListener('click', () => {
    reset();
});
document.getElementById('rst').addEventListener('click', () => {
    reset();
});
function reset(){
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    msgCnt.classList.add('hide');
    count = 0;
    turnX = true;
}


