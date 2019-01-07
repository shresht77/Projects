
var but1=document.querySelector("#p1");
var but2=document.querySelector("#p2");
var but3=document.querySelector("#reset");
var s1=document.querySelector("#s1");
var s2=document.querySelector("#s2");
var score1=0;
var score2=0;
var winningScore=5;
var gameOver=false;
var input=document.querySelector("input");
var ch=document.querySelector("#sco");



but1.addEventListener("click",function(){
	if(!gameOver)
	{
		score1++;
		if(score1===winningScore)
		{
			s1.classList.add("winner");
			gameOver=true;
		}
	}
	
	s1.textContent=score1;
	
});

but2.addEventListener("click",function(){
	if(!gameOver)
	{
		
		score2++;
		if(score2===winningScore)
		{
			s2.classList.add("winner");
			gameOver=true;
		}
	}
	s2.textContent=score2;
});


but3.addEventListener("click",function(){
	s2.textContent=0;
	s1.textContent=0;
	score1=0;
	score2=0;
	gameOver=false;
	s1.classList.remove("winner");
	s2.classList.remove("winner");
});

input.addEventListener("change",function(){
	ch.textContent=input.value;
	winningScore=Number(input.value);
});