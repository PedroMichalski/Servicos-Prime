document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    $.ajax({
        url: "http://localhost:3000/login",
        method: "POST",
        data: { email, senha },

        success: function(response) {
            // Se o login der certo:
            saveAuth(response.token); // salvar token

            // AGORA TROCA A TELA:
            window.location.href = "/frontend/index.html";
        },

        error: function() {
            alert("Email ou senha incorretos");
        }
        
    });
});

