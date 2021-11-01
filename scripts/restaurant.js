/* scripts for restuarant contact us page*/

function clearErrors() {
	for (var i = 0; i < document.forms["getInfo"].elements.length; i++) {
		if (document.forms["getInfo"].elements[i].parentElement.className.indexOf("has-") != -1) {
			document.forms["getInfo"].elements[i].parentElement.className = "form-group";
		}
	}
}

function validateItems() {
	clearErrors();
	
	var name1 = document.forms["getInfo"]["name"].value;
	var email1 = document.forms["getInfo"]["email"].value;
	var phone1 = document.forms["getInfo"]["phone"].value;
	
	if (name1 == "") {
        alert("Name must be filled in.");
        document.forms["getInfo"]["name"].parentElement.className = "form-group has-error";
        document.forms["getInfo"]["name"].focus();
        return false;
    }
	
	if (email1 == "") {
        alert("Email must be filled in.");
        document.forms["getInfo"]["email"].parentElement.className = "form-group has-error";
        document.forms["getInfo"]["email"].focus();
        return false;
    }
	
	if (phone1 == "") {
        alert("Phone must be filled in.");
        document.forms["getInfo"]["phone"].parentElement.className = "form-group has-error";
        document.forms["getInfo"]["phone"].focus();
        return false;
    }
	
	alert("All information was valid. Your request has been submitted.")
	
	return false;
	
}