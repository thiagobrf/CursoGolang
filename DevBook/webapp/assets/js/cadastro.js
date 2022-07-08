$('#formulario-cadastro').on('submit', criarUsuario);

function criarUsuario(evento) {
    evento.preventDefault();
    console.log("Dentro da função usuário!"); //fmt.Println, mas utiliza o console do browser, não o terminal do vscode.

    if ($('#senha').val() != $('#confirmar-senha').val()) {
        Swal.fire("Ops...", "As senhas são diferentes!", "error");
        return;
    }

    $.ajax({
        url: "/usuarios", 
        method: "POST",
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),
            senha: $('#senha').val(),
        }
    }).done(function() { 
        Swal.fire("Sucesso!", "Usuário cadastrado com sucesso!", "success")
        .then(function(){
            $.ajax({
                url: "/login",
                method: "POST",
                data: {
                    email: $('#email').val(),
                    senha: $('#senha').val()
                }
            }).done(function(){
                window.location ="/home";
            }).fail(function(){
                Swal.fire("Ops...", "Erro ao autenticar o usuário!", "error");
            })
        })

    }).fail(function(erro) {
        console.log(erro); 
        Swal.fire("Ops...", "Erro ao cadastrar usuário!", "error");
    });
}