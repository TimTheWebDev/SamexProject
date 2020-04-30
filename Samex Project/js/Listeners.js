document.getElementById("firstName").addEventListener("input", function (param) {
    console.log(param);
    var x, text;
    if (!firstNameValidationFunction(param)) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("firstNameValid").innerHTML = text;
})


document.getElementById("lastName").addEventListener("input", function (param) {
    var x, text;
    if (!lastNameValidationFunction(param)) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("lastNameValid").innerHTML = text;
})


document.getElementById("email").addEventListener("input", function (param) {
	var x, text;
    if (!emailValidationFunction()) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("emailValid").innerHTML = text;
})

document.getElementById("phone").addEventListener("input", function (param) {
	var x, text;
    if (!phoneValidationFunction()) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("phoneValid").innerHTML = text;
})