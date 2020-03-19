// const board = document.querySelector(".board");
// board.height = window.innerHeight;
// board.width = window.innerWidth;
// const ctx = board.getContext("2d");
// // ctx.fillStyle = "red";
// // ctx.fillRect(0,0,window.innerWidth/2,window.innerHeight/2);
// // ctx.strokeStyle = "green";
// // ctx.lineWidth = 10;
// // ctx.strokeRect(0,0,window.innerWidth/2,window.innerHeight/2);

// ctx.strokeStyle="blue";
// ctx.imageSmoothingEnabled=true;
// // ctx.beginPath();
// // ctx.moveTo(50,150);
// // ctx.lineTo(100,150);
// // ctx.moveTo(160,200);
// // ctx.lineTo(200,200);
// // ctx.closePath();
// // ctx.stroke();


const board = document.querySelector(".board");
board.height = window.innerHeight;
board.width = window.innerWidth;
// canvasRenderingContext2d=> tool
const ctx = board.getContext("2d");
// ctx.fillRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
// ctx.fillStyle = "red";
// // initialX,initialY,finalX,finalY                                       
// ctx.fillRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
// ctx.strokeStyle = "green";
// ctx.lineWidth = 10;
// ctx.strokeRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
ctx.strokeStyle="blue";
ctx.imageSmoothingEnabled=true
function colorchange(color)
{
    ctx.strokeStyle =color;
}

const input = document.querySelector("#pen-size");
ctx.lineWidth = input.value;
input.addEventListener("change", function(){
    ctx.lineWidth= input.value;
})
let activetool = "pencil";
const pencilOptions = document.querySelector(".pencil");
const eraserOptions = document.querySelector(".eraser");
function changetool(tool)
{
    if(tool == "pencil")
    {
        if(activetool == "pencil")
       {
           pencilOptions.classList.add("show");

       }else
       {
           activetool = "pencil";
           ctx.globalCompositeOperation ='source-over';
           eraserOptions.classList.remove("show");
           ctx.strokeStyle="blue";           
       }
    }
       else if(tool == "eraser")
       {
           if(activetool == 'eraser')
           {
               eraserOptions.classList.add("show");

           }
           else{
               activetool = "eraser";
               ctx.globalCompositeOperation ='destination-out';
               pencilOptions.classList.remove("show");
           }
       }
       else if(tool == 'sticky')
       {
           createSticky();
       }
}
const erinput = document.querySelector("#eraser-size");
// ctx.lineWidth = erinput.value;
erinput.addEventListener("change", function(){
    ctx.lineWidth= erinput.value;
})
function changeoptions(options)
{
    if(options == mini)
    {
      
        
    }
    else
    {

    }
}
// ctx.lineWidth=2;

// // 0,0
// ctx.beginPath();
// ctx.moveTo(50,150);
// ctx.lineTo(100,150);
// ctx.moveTo(160,200);
// ctx.lineTo(200,200);
// ctx.closePath();
// ctx.stroke();