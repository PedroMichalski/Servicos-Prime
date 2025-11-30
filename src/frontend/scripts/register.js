document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
     const CPF = document.getElementById("CPF").value;
      const data = document.getElementById("data").value;

    // 1️⃣ Primeiro: enviar cadastro
    $.ajax({
        url: "http://localhost:3000/register",
        method: "POST",
        data: { nome, email, senha, CPF, data},

        success: function() {
            console.log("Usuário cadastrado! Realizando login automático...");

            // 2️⃣ Agora: login automático
            $.ajax({
                url: "http://localhost:3000/login",
                method: "POST",
                data: { email, senha },

                success: function(response) {
                    // 3️⃣ Salvar token e redirecionar
                    saveAuth(response.token);
                    window.location.href = "../index.html";
                },

                error: function() {
                    alert("Erro ao fazer login automático.");
                }
            });
        },

       error: function(xhr) {
            console.error(xhr.responseText);
            alert("Erro ao cadastrar usuário!");
        }

    });
});
