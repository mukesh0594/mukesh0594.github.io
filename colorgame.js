
var numSquare=6;
var colors=generateRandomColor(numSquare);
var squares =document.querySelectorAll(".square");
var pickedColor =colors[pickRandomColor(numSquare)];
var colorDisplay =document.getElementById("colorDisplay");
colorDisplay.textContent =pickedColor;
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function()
{
	
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare=3;
	colors=generateRandomColor(numSquare);
	pickedColor =colors[pickRandomColor(numSquare)];
	colorDisplay.textContent=pickedColor;
	for (var i = 0;i< squares.length; i++) {
	  if(colors[i])
		squares[i].style.backgroundColor=colors[i];
	  else
	  	squares[i].style.display="none";

	}

})
hardBtn.addEventListener("click",function()
{
	
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquare=6;
	colors=generateRandomColor(numSquare);
	pickedColor =colors[pickRandomColor(numSquare)];
	colorDisplay.textContent=pickedColor;
	for (var i = 0;i< squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})

resetButton.addEventListener("click",function()
{

	colors=generateRandomColor(numSquare);
	pickedColor =colors[pickRandomColor(numSquare)];
	colorDisplay.textContent=pickedColor;
	this.textContent="New color";
	messageDisplay.textContent="";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
    h1.style.backgroundColor="steelblue";
})


for (var i = squares.length - 1; i >= 0; i--) {
	squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function()
    {
    	
    	var clickedColor=this.style.backgroundColor;
    	if(clickedColor===pickedColor)
    		{
    			messageDisplay.textContent="Correcet :)";
    			resetButton.textContent="play Again?";
    			changeColors(clickedColor);
    			h1.style.backgroundColor=clickedColor;

    			
    		}
    	else
    		{
              this.style.backgroundColor="black";
              messageDisplay.textContent="Try Again :(";
    		}
    });
}

function changeColors(color)
{
 for (var i = squares.length - 1; i >= 0; i--) {
 	squares[i].style.background=color;
 }
}

function pickRandomColor(n)
{
  return Math.floor(Math.random()*n);
}


function generateRandomColor(num)
{
	var arr =[];
	for (var i = num-1; i >= 0; i--) {
		arr.push(randomColor());
	}
	return arr;
}


function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g + ", " + b + ")";

}