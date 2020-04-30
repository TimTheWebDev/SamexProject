function emailToHex(email) {
    var hexString = '';
    for (var i = 0; i < email.length; i++) {
      hexString += email.charCodeAt(i).toString(16);
    }
    return hexString;
  }

    // This would be the return function in JS
// function hexToEmail (hexEmail){
//     var hex = hexEmail.toString();
//     var returnedEmail = '';
//     for (var i = 0; i < hex.length; i += 2){
//         returnedEmail += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
//     }
//     return returnedEmail;
// }
