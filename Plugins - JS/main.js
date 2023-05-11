$(document).ready(() => {
    $('form').on('submit', function (e) {
        e.preventDefault();
    });

    $('#telUser').mask('(00) 00000-0000');
    $('#cpfUser').mask('000.000.000-00');
    $('#cepUser').mask('00000-000');

    $('form').validate({
        rules: {
            address: {
                required: true
            },
            telUser: {
                required: true
            },
            emailUser: {
                required: true,
                email: true
            },
            nomeUser: {
                required: true
            },
            cepUser: {
                required: true
            },
            cpfUser: {
                required: true
            }
        },
        messages: {
            address: "Por favor, insira um endereço!",
            telUser: {
                required: "Por favor, insira um telefone!"
            },
            emailUser: {
                required: '<strong>Por favor, insira um email!</strong>'
            },
            nomeUser: {
                required: "Por favor, insira um nome completo!"
            },
            cepUser: {
                required: "Por favor, insira um cep!"
            },
            cpfUser: {
                required: "Por favor, insira um cpf!"
            }
        },
        errorClass: 'error-message',
        submitHandler: function(form){
            alert("Formulario enviado.")
        }
    });
});

