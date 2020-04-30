$(function() {

    var form = $('registrationForm');

    var apiResponse = $('apiResponse');

});


$(form).submit(function(event) {

    event.preventDefault();

});


var formInfo = $(form).serialize();


$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formInfo
})


.done(function(response) {
    $(apiResponse).removeClass('error');
    $(apiResponse).addClass('success');
    $(apiResponse).text(response);
    $('firstName').val('');
    $('lastName').val('');
    $('email').val('');
    $('phone').val('');
})


.fail(function(data) {
    $(apiResponse).removeClass('success');
    $(apiResponse).addClass('error');
    if (data.responseText !== '') {
        $(apiResponse).text(data.responseText);
    } else {
        $(apiResponse).text('An error has occured.');
    }
});