var userName = document.getElementById('userName');

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function showUserInformation () {
	var userInformation = {
		userName : (getCookie('userName') === undefined ? '' : getCookie('userName')),
		userEmail : (getCookie('userEmail') === undefined ? '' : getCookie('userEmail'))
	}
	console.log(userInformation.userName !== '', userInformation.userEmail !== '');
	if (userInformation.userName !== '' || userInformation.userEmail !== '') {
		userName.innerHTML = userInformation.userName + '(' + userInformation.userEmail +')';
	}
}
showUserInformation();