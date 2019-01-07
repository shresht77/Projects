var numOfSquares=6;
var colors=generateRandom(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");



easy.addEventListener("click",function(){
	numOfSquares=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	//generate random colors
	colors=generateRandom(numOfSquares);
	//pick new random color
	pickedColor = pickColor();
	//change text display
	colorDisp.textContent=pickedColor;
	//change colors
	for(var i=0; i<squares.length; i++)
	{
		//add initial colors
		squares[i].style.backgroundColor=colors[i];
	} 
	for(var i=3;i<6;i++)
	{
		squares[i].style.display="none";
	}
});

hard.addEventListener("click",function(){
	numOfSquares=6;
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors=generateRandom(numOfSquares);
	//pick new random color
	pickedColor = pickColor();
	//change text display
	colorDisp.textContent=pickedColor;
	//change colors
	for(var i=0; i<squares.length; i++)
	{
		//add initial colors
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	} 
	
});


resetButton.addEventListener("click",function(){
	//generate random colors
	colors=generateRandom(numOfSquares);
	//pick new random color
	pickedColor = pickColor();
	//change text display
	colorDisp.textContent=pickedColor;
	resetButton.textContent="New Colors"
	//change colors
	for(var i=0; i<squares.length; i++)
	{
		//add initial colors
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";

});


colorDisp.textContent = pickedColor;

for(var i=0; i<squares.length; i++)
{
	//add initial colors
	squares[i].style.backgroundColor=colors[i];

	//add listens
	squares[i].addEventListener("click",function(){
		//grab color
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			message.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play again?";
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again!!";
		}
	});	
	
}

function changeColor(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}


function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandom(num){
	//make array
	var arr=[];
	//add num random colors
	for (var i=0;i<num;i++)
	{
		arr[i]=randomColor();
	}
	//return array
	return arr;
}

function randomColor(){
	//pick three from 0 to 255
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")"; 
}