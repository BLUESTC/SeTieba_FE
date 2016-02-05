var hbtn_login = document.getElementById("hbtn-login");
hbtn_login.onclick = function(){
	var	mask = document.getElementById("mask");
	mask.style.visibility = "visible";

	var login_bar = document.getElementById("login-bar");
	login_bar.style.position = "static";
	login_bar.style.left = "0";

	var	login_bar_parent = document.getElementById("login-bar-parent");
	login_bar_parent.style.cssText = "z-index: 3000;";
}

var btn_close = document.getElementById("btn-close");
btn_close.onclick = function(){
	var	mask = document.getElementById("mask");
	mask.style.visibility = "hidden";

	var login_bar = document.getElementById("login-bar");
	login_bar.style.position = "absolute";
	login_bar.style.left = "-999em";
}

