/*
SPD3245 Web System and Web Technologies
Group Project
Chan Kwan Wing(14011142S)
Lee Chun Wing(14009202S)
Ng Nam Yung(14063612S)
Yim Kan Yeung(14077120S)
*/
function setcookie(name, value){
	var path="/";
	var expiryDate = new Date(); expiryDate.setTime(expiryDate.getTime() + 365*24*60*60*1000);
	var curCookie = name + "=" + encodeURI(value) 
	+ "; expires=" + expiryDate.toUTCString() 
	+ "; path=" + path;
	document.cookie = curCookie; 
}
function getcookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function initalcookie(){
	if(getcookie("new")=="true"){
		setcookie("new","true");
		setcookie("name","");
		setcookie("numOfCustomer",0);
		setcookie("R1N","");
		setcookie("R1S",0);
		setcookie("R2N","");
		setcookie("R2S",0);
		setcookie("R3N","");
		setcookie("R3S",0);
		setcookie("R4N","");
		setcookie("R4S",0);
		setcookie("R5N","");
		setcookie("R5S",0);
		setcookie("R6N","");
		setcookie("R6S",0);
		setcookie("R7N","");
		setcookie("R7S",0);
		setcookie("R8N","");
		setcookie("R8S",0);
		setcookie("R9N","");
		setcookie("R9S",0);
		setcookie("R10N","");
		setcookie("R10S",0);
	}
}