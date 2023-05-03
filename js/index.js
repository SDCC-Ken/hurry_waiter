/*
SPD3245 Web System and Web Technologies
Group Project
Chan Kwan Wing(14011142S)
Lee Chun Wing(14009202S)
Ng Nam Yung(14063612S)
Yim Kan Yeung(14077120S)
*/

initalcookie();
function playgame(){
	var name = document.getElementsByName("username").item(0).value;
	var vaule = document.getElementsByName("game_level").item(0).value;
	if(name.length>0 && vaule>0){
		setcookie("name",name);
		setcookie("numOfCustomer",vaule);
		window.location.href = "game.html";
	}else{
		alert("Invaild Input!");
	}
}