
//Photography Slider
	
 //variables
var imageBanner = document.querySelector("#photoImages");
var offSet = 800; 
var listItems = document.querySelectorAll(".pickerColour");
var forward = document.querySelector("#next");
var back = document.querySelector("#previous");
var currentpos = 0;


 //functions
 
function moveBanner(evt) 
{
	console.log("From moveBanner()");
	//console.log(evt.currentTarget.dataset.offset);
	imageBanner.style.right= (offSet*evt.currentTarget.dataset.offset) + "px";
	currentpos = (offSet*evt.currentTarget.dataset.offset);
	console.log(currentpos);
}

function moveBanner2(dir) 
{
	if (currentpos<=-1) {
		console.log("go to end");
		currentpos=2400;
	} else if (currentpos>=2400){
		console.log("go to beginning");
		currentpos=0;
	}
	console.log(dir);
	if (dir==="add"){ 
	imageBanner.style.right= (currentpos + offSet) + "px";
	currentpos = currentpos + offSet;
		} else {
			imageBanner.style.right= (currentpos - offSet) + "px";
	currentpos = currentpos - offSet;
			}
	//console.log(evt.currentTarget.dataset.offset);
	//imageBanner.style.right= (offSet*evt.currentTarget.dataset.offset) + "px";
	//currentpos = offSet;
}


function next()
{
	moveBanner2("add");
}

function previous()
{
	moveBanner2("sub");
}




 //listeners 	
 
 for(var i=0; i<listItems.length; i++) { 
 	listItems[i].addEventListener("click", moveBanner, false);
 }
 
 forward.addEventListener("click", next, false);
 back.addEventListener("click", previous, false);