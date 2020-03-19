var note;
function createSticky(){
    const body = document.querySelector("body");

const StickyPad = document.createElement("div");
const navbar = document.createElement("div");
const writingPad = document.createElement("div");
const minimize = document.createElement("div");
const close = document.createElement("div");
const textArea = document.createElement("textArea");

StickyPad.setAttribute("class", "sticky-pad")
navbar.setAttribute("class", "navbar")
writingPad.setAttribute("class", "writingPad")

StickyPad.appendChild(navbar);
StickyPad.appendChild(writingPad);
body.appendChild(StickyPad);
navbar.appendChild(minimize);
navbar.appendChild(close);
navbar.appendChild(textArea);
note = StickyPad;
addListener();
}
function addListener(){
 let initialX;
 let initialY;
 let isDown = false;
note.addEventListener("mousedown",function(e)
{
    isDown =true;
    initialX = e.clientX;
    initialY = e.clientY;
});
note.addEventListener("mousemove",function(e)
{
    if(!isDown)
    return;
        let finalX = e.clientX;
        let finalY = e.clientY;
        let diffX = finalX-initialX;
        let diffY = finalY-initialY;

        const{x,y} = note.getBoundingClientRect();
        note.style.top =y+diffY+"px";
        note.style.left =x+diffX+"px";
        initialX =finalX;
        initialY = finalY;

});
note.addEventListener("mouseleave",function(e){
    isDown = false;
})
}