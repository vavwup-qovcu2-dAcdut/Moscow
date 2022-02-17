var fields = [
    $('.popup-form input[name="fio"]'),
    $('.popup-form input[name="email"]'),
    $('.popup-form input[name="phone"]'),
    $('.popup-form textarea[name="message"]')
];

$('form#feedback').submit(function() {
    return validateForm( fields );
});

createKeyupHahdlers(fields);

function createKeyupHahdlers(fields) {
    fields.forEach(function(field){
        field.keyup(
            function(event){
                if (event.keyCode != 9 && event.keyCode != 16) {
                    checkEmptyField($(this));
                }
            }
        );
    });
}

function validateForm(fields) {
    var formIsValid = true;

    for (var index in fields) {
        var field = fields[index];
        var result = checkEmptyField( field );
        if ( result ) {
            formIsValid = false;
        }
    }

    return formIsValid;
}

function checkEmptyField(field) {
    if (field.val() == '') {
        field.addClass('has-error');
        return true;
    } else {
        field.removeClass('has-error');
        return false;
    }
}