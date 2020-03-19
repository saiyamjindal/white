// var flag =false;
//     <div class ="pencil">
// board.addEventListener("mousedown",function(e){
//     ctx.beginPath();
//     ctx.moveTo(e.clientX,e.clientY);
//     flag = true;
// })

// board.addEventListener("mousemove",function(e){
//     if(flag == true)
//     {
//     ctx.lineTo(e.clientX,e.clientY);
//     ctx.stroke();
//     }
// })
// board.addEventListener("mouseup",function(e){
//   ctx.closePath();
//   flag =false;
// })
// </div>
let isMouseDown = false;
var undostack=[];
var redostack=[];
// let undo = document.getElementsByClassName("undo-tool")
board.getBoundingClientRect();
board.addEventListener("mousedown", function (e) {

    ctx.beginPath();
    let x=e.clientX;
    let y = e.clientY - board.getBoundingClientRect().y;
    ctx.moveTo(x,y);
    let point ={
        x:x,
        y:y,
        color : ctx.strokeStyle,
        width :ctx.lineWidth,
        type:"start"
    }
    undostack.push(point)
    isMouseDown = true;
})

board.addEventListener("mousemove", function (e) {
    if (isMouseDown == true) {
        console.log(ctx);
        let x=e.clientX;
        let y = e.clientY - board.getBoundingClientRect().y;    
        ctx.lineTo(x,y);
        point ={
        x:x,
        y:y,
        color : ctx.strokeStyle,
        width : ctx.lineWidth,
        type:"end"
    }
    undostack.push(point)
        ctx.stroke();
        redostack.pop();
    }

})
board.addEventListener("mouseup", function (e) {
    isMouseDown = false;
    
    ctx.closePath();
})

let undo = document.querySelector(".undo-tool");
    undo.addEventListener("click",function(){
       for(var j = 0 ; j < 10 ;j++)
       {
        undostack.pop();
        j++;
       }
        drawagain();
    })
function drawagain()
{    
    ctx.clearRect(0,0,board.width,board.height);
    for(var i =0; i< undostack.length ;i++)
    {
        let{x,y,color,type,width} = undostack[i];
        if(type == "start")
        {
           ctx.lineWidth =width;
           ctx.strokeStyle = color;
           ctx.beginPath();
           ctx.moveTo(x,y);

        }
        else{
            ctx.lineWidth =width;
            ctx.strokeStyle= color;
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    }
}
const maxi = document.querySelector(".maxi-tool")
maxi.addEventListener("click",function(){
    ctx.scale(1.2,1.2);
    ctx.translate(-50,-30);
    drawagain();
})
const mini = document.querySelector(".mini-tool")
mini.addEventListener("click",function(){
    ctx.scale(0.95,0.95);
    ctx.translate(30,20);
    drawagain();
})