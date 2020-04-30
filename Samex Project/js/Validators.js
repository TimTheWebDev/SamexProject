function firstNameValidationFunction(param) {
    var notANumber = isNaN(param.data);
    if (!notANumber){
        return false;
    }
    var x, text;
    x = document.getElementById("firstName").value;
    return ( x =="" || isNaN(x) || x==null);
}


function lastNameValidationFunction(param) {
    var number = isNaN(param.data);
    if (!number) {
        return false;
    }
    var x;
    x = document.getElementById("lastName").value;
    return ( x =="" || isNaN(x) || x == null);
}

// to check format of email 
function emailValidationFunction() {
    x = document.getElementById("email").value;
    var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regex.test(x)
}


function phoneValidationFunction() {
    x = document.getElementById("phone").value;
    var regex2 = /(^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$)/;
    return regex2.test(x);
}