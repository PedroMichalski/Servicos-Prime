// Salvar o token após login
function saveAuth(token) {
    localStorage.setItem("authToken", token);
}

// Pegar o token
function getAuth() {
    return localStorage.getItem("authToken");
}

// Remover token (logout)
function logout() {
    localStorage.removeItem("authToken");
    window.location.href = "pages/login.html"; // Redireciona ao deslogar
}

// Verificar se está logado
function isLoggedIn() {
    return localStorage.getItem("authToken") !== null;
}

// Proteger páginas privadas
function protectPage() {
    if (!isLoggedIn()) {
        window.location.href = "login.html";
    }
}
