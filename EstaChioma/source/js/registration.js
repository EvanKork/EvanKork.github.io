var saveButton = document.getElementById('saveButton'),
		registrationForm = document.getElementById('registrationForm');

saveButton.addEventListener('click', function () {
	var userData = {
		name : document.getElementsByName("name")[0].value,
		email : document.getElementsByName("email")[0].value
	}
	document.cookie = 'userName=' + userData.name + '; path=/; expires=3600;';
	document.cookie = 'userEmail=' + userData.email + '; path=/; expires=3600;';
});


