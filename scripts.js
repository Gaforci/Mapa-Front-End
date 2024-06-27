$(document).ready(function() {
    $('#new-user').click(function(event) {
        event.preventDefault();
        $('#register-form').show();
        $('#login-form').hide();
    });

    $('#existing-user').click(function(event) {
        event.preventDefault();
        $('#login-form').show();
        $('#register-form').hide();
    });


    $('#register-form, #login-form').submit(function(e) {
        var isValid = true;
        $(this).find('input').each(function() {
            if ($(this).val() === '') {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos.');
        }
    });
});



// document.getElementById('new-user').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.getElementById('register-form').style.display = 'block';
//     document.getElementById('login-form').style.display = 'none';
// });

// document.getElementById('existing-user').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.getElementById('login-form').style.display = 'block';
//     document.getElementById('register-form').style.display = 'none';
// });