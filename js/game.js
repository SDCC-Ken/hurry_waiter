/*
SPD3245 Web System and Web Technologies
Group Project
Chan Kwan Wing(14011142S)
Lee Chun Wing(14009202S)
Ng Nam Yung(14063612S)
Yim Kan Yeung(14077120S)
*/
var enemieskilled = 0;
var playerScore=0;
var restaurantAenemies=0;
var restaurantBenemies=0;
var restaurantCenemies=0;
var restaurantDenemies=0;
var types = new Array();
types['Normal']='N';
types['Hungry']='H';
types['Generous']='G';
types['Barbaric']='B';
level = 1;
speed = level/2;
enemieskilled = 0;
playerScore=0;

//Background Music
var musicGame = new Audio("sounds/bg.mp3");
musicGame.loop = true;

var musicLose = new Audio("sounds/lose.mp3");
musicLose.loop = false;

var musicWin = new Audio("sounds/win.mp3");
musicWin.loop = false;

function renderEnemies(){
	for(var i = 0; i < enemies.length; i++){
		var e = enemies[i];
		if (typeof e != 'undefined')
			rendering(e.src,e.x-=speed,e.y,(220*e.h)/146,e.h);
		else
			enemies.splice(i,1);
	}
}
function rendering(imagepath,xPosition,yPosition,Width,Height){
	var img = new Image;
	img.src = imagepath;
	ctx.drawImage(img, xPosition, yPosition, Width,Height);
}
function showScore(playerScore){
	score.innerHTML = "Tip: "+playerScore;
}
/*Check the lose condition and end the game*/
function loseChecking(){
	for(i=0;i<enemies.length;i++){
		var e = enemies[i];
		if(e.x<=70){
			lose();
		}
	}
	
}
function randomenemies(){
	var newenemies = new Array();
	for(k=0;k<4;k++){
		var x=0;
		var randomR = Math.floor(Math.random() * 4)+1;
		restaurant = 0;
		switch(randomR){
			case 1:
				if(restaurantAenemies<level+1){
					restaurant = 50;
					x = restaurantAenemies*150;
				}
				break;
			case 2:
				if(restaurantBenemies<level+1){
					restaurant = 200;
					x = restaurantBenemies*150;
				}
				break;
			case 3:
				if(restaurantCenemies<level+1){
					restaurant = 350;
					x = restaurantCenemies*150;
				}
				break;		
			case 4:
				if(restaurantDenemies<level+1){
					restaurant = 500;
					x = restaurantDenemies*150;
				}
				break;
			default:break;			
		}
		var randomT=0,type=null;
		switch(level){
			case 1:type="Normal";numofDish = 1;break;
			case 2:
				randomT = Math.floor(Math.random() * 2)+1;
				switch(randomT){
					case 1:type="Normal";numofDish = 1;break;
					case 2:type="Hungry";numofDish = 1+1;break;
					default:break;	
				}
				break;
			case 3:
				randomT = Math.floor(Math.random() * 3)+1;
				switch(randomT){
					case 1:type="Normal";numofDish = Math.floor(Math.random() * 2)+1;break;
					case 2:type="Hungry";numofDish = (Math.floor(Math.random() * 2)+1)+1;break;
					case 3:type="Generous";numofDish = Math.floor(Math.random() * 2)+1;break;
					default:break;	
				}
				break;
			case 4:
				randomT = Math.floor(Math.random() * 4)+1;
				switch(randomT){
					case 1:type="Normal";numofDish = Math.floor(Math.random() * 2)+1;break;
					case 2:type="Hungry";numofDish = (Math.floor(Math.random() * 2)+1)+1;break;
					case 3:type="Generous";numofDish = Math.floor(Math.random() * 2)+1;break;
					case 4:type="Barbaric";numofDish = (Math.floor(Math.random() * 2)+1)*2;break;
					default:break;	
				}
				break;
			case 5:
			case 6:
				randomT = Math.floor(Math.random() * 4)+1;
				switch(randomT){
					case 1:type="Normal";numofDish = Math.floor(Math.random() * 3)+1;break;
					case 2:type="Hungry";numofDish = (Math.floor(Math.random() * 3)+1)+1;break;
					case 3:type="Generous";numofDish = Math.floor(Math.random() * 3)+1;break;
					case 4:type="Barbaric";numofDish = (Math.floor(Math.random() * 3)+1)*2;break;
					default:break;	
				}
				break;
				default:break;	
		}
		if(restaurant > 0 && type !== null){
			x = x-150;
			newenemies.push({"id":"customer1","src":"img/customer"+types[type]+numofDish+".png","x":cW+x,"y":restaurant,"w":150,"h":100,"type":type,"numOfDish":numofDish});
			switch(restaurant){
				case 50:restaurantAenemies++;break;
				case 200:restaurantBenemies++;break;
				case 350:restaurantCenemies++;break;
				case 500:restaurantDenemies++;break;
				default:break;
			}
		}
	}
	if(newenemies.length>0){
		for(i=0;i<4;i++){
			enemies.splice(0,0,newenemies[i]);
		}
	}
	
}
function animate(){
	ctx.clearRect(0, 0, cW, cH);
	launcher.render();
	renderEnemies();
	showScore(playerScore);
	loseChecking();
}
function Launcher(){
	this.y = 50;
	this.x = 20;
	this.w = 100;
	this.h = 100;
	this.missiles = [];
	this.render = function(){
		rendering('img/waiter.png',this.x,this.y,(300*this.h)/454,this.h);
		for(var i=0; i < this.missiles.length; i++){
			var m = this.missiles[i];
			if(m.x >= cW){
				this.missiles.splice(i,1);
				lose();
			}
			var a = 5*speed;
			rendering('img/dish.png',m.x+=a, m.y-20, (230*m.h*0.7)/205,m.h*0.7);
			this.hitDetect(m,i);
		}
		if(enemies.length === 0　&& this.missiles.length ===0){
			switch(level){
				case 1:totalEnemies = getcookie("numOfCustomer");break;
				case 2:totalEnemies = getcookie("numOfCustomer")*2;break;
				case 3:totalEnemies = getcookie("numOfCustomer")*4;break;
				case 4:totalEnemies = getcookie("numOfCustomer")*8;break;
				case 5:totalEnemies = getcookie("numOfCustomer")*16;break;
				case 6:totalEnemies = getcookie("numOfCustomer")*32;break;
				default:break;
			}
			if(totalEnemies < enemieskilled){
				if(level<=6){
					level++;
					setcookie("level",level);
					initCanvas();
				}else{
					win();
				}
			}else{
				restaurantAenemies=0;
				restaurantBenemies=0;
				restaurantCenemies=0;
				restaurantDenemies=0;
				randomenemies();
			}
		}
	};
	this.hitDetect = function(m,mi){
		for(var i = 0; i < enemies.length; i++){
			var e = enemies[i];
			if(m.x+m.w >= e.x && m.x <= e.x+e.w && m.y >= e.y && m.y <= e.y+e.h){
				this.missiles.splice(mi,1);
				switch(e.type){
					case "Normal":case "Hungry":playerScore+=1;break;
					case "Generous":case "Barbaric":playerScore+=2;break;
					default:break;	
				}
				switch(e.numOfDish){
					case 1:
						enemies.splice(i,1);
						enemieskilled++;
						break;
					case 2:
						e.numOfDish = 1;
						e.src = "img/customer"+types[e.type]+1+".png";
						break;
					case 3:
						e.numOfDish = 2;
						e.src = "img/customer"+types[e.type]+2+".png";
						break;
					case 4:
						e.numOfDish = 3;
						e.src = "img/customer"+types[e.type]+3+".png";
						break;
					case 5:
						e.numOfDish = 4;
						e.src = "img/customer"+types[e.type]+4+".png";
						break;
					case 6:
						e.numOfDish = 5;
						e.src = "img/customer"+types[e.type]+5+".png";
						break;
					default:break;	
				}
				
			}
		}
	}
}
function initCanvas(){
	restaurantAenemies=0;
	restaurantBenemies=0;
	restaurantCenemies=0;
	restaurantDenemies=0;
	enemies = [];
	document.getElementById("name").innerHTML = "Name: " + getcookie("name");
	document.getElementById("level").innerHTML = "Level: " + level;
	score = document.getElementById("score");
	ctx = document.getElementById('my_canvas').getContext('2d');
	cW = ctx.canvas.width;
	cH = ctx.canvas.height;
	randomenemies();
	launcher = new Launcher();
    animateInterval = setInterval(animate, 10);
	musicGame.play();

	document.getElementById('up_btn').addEventListener('mousedown', function(event){
		moveup();
	});
	document.getElementById('down_btn').addEventListener('mousedown', function(event) {
		movedown();
	});
	document.getElementById('fire_btn').addEventListener('mousedown', function(event) {
		fire();
	});
}
function moveup(){
	switch(launcher.y){
		case 50:launcher.y=500;break;
		case 200:launcher.y=50;break;
		case 350:launcher.y=200;break;
		case 500:launcher.y=350;break;
		default:break;	
	}
}
function movedown(){
	switch(launcher.y){
		case 50:launcher.y=200;break;
		case 200:launcher.y=350;break;
		case 350:launcher.y=500;break;
		case 500:launcher.y=50;break;
		default:break;	
	}
}
function fire(){
	launcher.missiles.push({"x":launcher.x,"y":launcher.y+launcher.h*0.5,"w":112,"h":100/*"bg":"blue"*/});
}
document.onkeydown = function(e) {
    switch (e.keyCode) {
		case 32:fire();break;
        case 38:moveup();break;	//move upward
        case 40:movedown();break;	//move downward
		default:break;	
	}
};
window.addEventListener('load', function(event) {
    initCanvas();
});
window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);