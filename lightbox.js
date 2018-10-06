


//variables
var modal = document.querySelector("#myModal");
var span = document.querySelectorAll(".close");
var imgs = document.querySelectorAll(".logo");
var modalImg = document.querySelector("#img01");
var captionText = document.querySelector("#caption");


//functions
function opens() 
{
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

function closes() 
{ 
  modal.style.display = "none";
}


//listeners
 for(var i=0; i<span.length; i++) { 
 	span[i].addEventListener("click", closes, false);
 }
 
 for(var x=0; x<imgs.length; x++) { 
 	imgs[x].addEventListener("click", opens, false);
 }
