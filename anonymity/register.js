function msg()
{
  	var userName;
  	userName = document.getElementById("userName").value;

  	if (userName!="") {
  		window.location.href = "registerSuccess.html?backurl=" + window.location.href + "?userName=" + userName;
  	}else{
  		window.location.href = "registerFail.html?backurl=" + window.location.href;
  	}
}