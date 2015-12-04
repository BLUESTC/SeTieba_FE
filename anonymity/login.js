function msg()
{
  	var email, password;
  	email = document.getElementById("email").value;
  	password = document.getElementById("password").value;

  	if (email=="570556057@qq.com" && password=="123456") {
  		window.location.href = "loginSuccess.html?backurl=" + window.location.href;
  	}else{
  		window.location.href = "loginFail.html?backurl=" + window.location.href;
  	}
}
