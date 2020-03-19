const imageupload =document.querySelector(".image-upload");
const imagepicker = document.getElementById("imagepicker"); 
imagepicker.addEventListener("click",function(){
    imageupload.click();
})       
imageupload.addEventListener("change",function(e){
    const img =document.createElement("img");
const imgdata = imageupload.files[0];
img.src = URL.createObjectURL(imgdata);
img.height=400;
img.width=400;
const body= document.querySelector("body");
body.appendChild(img);
  
img.onload(function(){
    URL.revokeObjectURL(img.src);
})
})
const download = document.querySelector(".download-tool");
download.addEventListener("click",function(){
    const url =board.toDataURL("image/jpeg");
    const anchor = document.createElement("a");
    anchor.download="filename.jpeg";
    anchor.href = url;
    anchor.click();
    anchor.remove();

    
})