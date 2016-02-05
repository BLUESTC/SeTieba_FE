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

	var	login_bar_parent = document.getElementById("login-bar-parent");
	login_bar_parent.style.cssText = "z-index: -1;";
}

/* 验证用户账号信息，若正确，则进入管理系统，若错误，输入边框和字体变红色 */
var btn_login = document.getElementById("btn-login");
btn_login.onclick = function(){
  	var email, password;
  	email = document.getElementById("email").value;
  	password = document.getElementById("password").value;

  	if (email=="570556057@qq.com" && password=="123456") {
  		window.location.href = "home.html";
  	}else{
  		document.getElementById("email").className += ' invalid';
  		document.getElementById("password").className += ' invalid';
  	}
}

/* 恢复边框的正常样式 */
function stycleChange()
{
	document.getElementById("email").className = 'email item';
  	document.getElementById("password").className = 'password item';
}

