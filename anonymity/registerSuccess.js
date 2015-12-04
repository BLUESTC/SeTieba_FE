window.onload = function(){
	var userName, search, index, checkBlank;
	search = location.search;
	index = search.indexOf("userName=");
	index = index + 9;
	userName = search.substr(index);
	checkBlank = userName.indexOf("%20");
	if (checkBlank != -1) {
		userName = userName.substr(0, checkBlank) + " " + userName.substr(checkBlank+3);
	}
	document.getElementById("navUserName").innerHTML = userName;
	document.getElementById("msgUserName").innerHTML = userName;
}