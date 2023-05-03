/*
SPD3245 Web System and Web Technologies
Group Project
Chan Kwan Wing(14011142S)
Lee Chun Wing(14009202S)
Ng Nam Yung(14063612S)
Yim Kan Yeung(14077120S)
*/
function winorlose(){
	musicGame.pause();
	clearInterval(animateInterval); // Stop the game animation loop
	musicGame.load();
	checkranking();
	document.getElementById("winorlose").setAttribute("class", "opent");
	document.getElementById("textwinorlose").innerHTML = "Game Over";
	document.getElementById("finalscore").innerHTML = "Tip: " +playerScore;
	createranking();
	document.getElementById("retry").onclick=function(){
		document.getElementById("winorlose").setAttribute("class", "close");
		initCanvas();
	}
	document.getElementById("back").onclick=function(){
		window.location.href="index.html";
	}
}
function win(){
	winorlose();
	musicWin.play();
	document.getElementById("textwinorlose").innerHTML = "You Win";
}
function lose(){
	winorlose();
	musicLose.play();
	document.getElementById("textwinorlose").innerHTML = "Game Over!";
}
function createranking(){
if(getcookie("R1N").length>0){
	document.getElementById("R1N").innerHTML = getcookie("R1N");
	document.getElementById("R1S").innerHTML = getcookie("R1S");
}
if(getcookie("R2N").length>0){
	document.getElementById("R2N").innerHTML = getcookie("R2N");
	document.getElementById("R2S").innerHTML = getcookie("R2S");
}
if(getcookie("R3N").length>0){
	document.getElementById("R3N").innerHTML = getcookie("R3N");
	document.getElementById("R3S").innerHTML = getcookie("R3S");
}
if(getcookie("R4N").length>0){
	document.getElementById("R4N").innerHTML = getcookie("R4N");
	document.getElementById("R4S").innerHTML = getcookie("R4S");
}
if(getcookie("R5N").length>0){
	document.getElementById("R5N").innerHTML = getcookie("R5N");
	document.getElementById("R5S").innerHTML = getcookie("R5S");
}
if(getcookie("R6N").length>0){
	document.getElementById("R6N").innerHTML = getcookie("R6N");
	document.getElementById("R6S").innerHTML = getcookie("R6S");
}
if(getcookie("R7N").length>0){
	document.getElementById("R7N").innerHTML = getcookie("R7N");
	document.getElementById("R7S").innerHTML = getcookie("R7S");
}
if(getcookie("R8N").length>0){
	document.getElementById("R8N").innerHTML = getcookie("R8N");
	document.getElementById("R8S").innerHTML = getcookie("R8S");
}
if(getcookie("R9N").length>0){
	document.getElementById("R9N").innerHTML = getcookie("R9N");
	document.getElementById("R9S").innerHTML = getcookie("R9S");
}
if(getcookie("R10N").length>0){
	document.getElementById("R10N").innerHTML = getcookie("R10N");
	document.getElementById("R10S").innerHTML = getcookie("R10S");
}
}
function checkranking(){
	if(playerScore>getcookie("R1S")){
		if(getcookie("R1N").length>0){
			for(i=9;i>=1;i--){
				setcookie("R"+(i+1)+"N",getcookie("R"+i+"N"));
				setcookie("R"+(i+1)+"S",getcookie("R"+i+"S"));
			}
		}
		setcookie("R1N",getcookie("name"));
		setcookie("R1S",playerScore);
	}else if(playerScore>getcookie("R2S")){
		if(getcookie("R2N").length>0){
			for(i=9;i>=2;i--){
				setcookie("R"+(i+1)+"N",getcookie("R"+i+"N"));
				setcookie("R"+(i+1)+"S",getcookie("R"+i+"S"));
			}
		}
		setcookie("R2N",getcookie("name"));
		setcookie("R2S",playerScore);
	}else if(playerScore>getcookie("R3S")){
		setcookie("R3N",getcookie("name"));
		setcookie("R3S",playerScore);
	}else if(playerScore>getcookie("R4S")){
		setcookie("R4N",getcookie("name"));
		setcookie("R4S",playerScore);
	}else if(playerScore>getcookie("R5S")){
		setcookie("R5N",getcookie("name"));
		setcookie("R5S",playerScore);
	}else if(playerScore>getcookie("R6S")){
		setcookie("R6N",getcookie("name"));
		setcookie("R6S",playerScore);
	}else if(playerScore>getcookie("R7S")){
		setcookie("R7N",getcookie("name"));
		setcookie("R7S",playerScore);
	}else if(playerScore>getcookie("R8S")){
		setcookie("R8N",getcookie("name"));
		setcookie("R8S",playerScore);
	}else if(playerScore>getcookie("R9S")){
		setcookie("R9N",getcookie("name"));
		setcookie("R9S",playerScore);
	}else if(playerScore>getcookie("R10S")){
		setcookie("R10N",getcookie("name"));
		setcookie("R10S",playerScore);
	}
}