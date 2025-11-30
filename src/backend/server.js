const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Carrega o banco (JSON)
const path = require("path");

// Caminho correto do arquivo JSON
const dbPath = path.join(__dirname, "database.json");

// Carrega o banco
function loadDB() {
    return JSON.parse(fs.readFileSync(dbPath));
}

// Salva o banco
function saveDB(db) {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}


// ROTA DE CADASTRO
app.post("/register", (req, res) => {
    const { email, senha, nome, CPF, data } = req.body;

    const db = loadDB();

    const exists = db.usuarios.find(u => u.email === email);
    if (exists) return res.status(400).json({ error: "Usuário já existe" });

    db.usuarios.push({ email, senha, nome, CPF, data});
    saveDB(db);

    res.json({ message: "Usuário cadastrado com sucesso" });
});

// ROTA DE LOGIN
app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    const db = loadDB();

    const user = db.usuarios.find(u => u.email === email && u.senha === senha);

    if (!user) return res.status(401).json({ error: "Credenciais inválidas" });

    // gera um token simples (exemplo)
    const token = "token-" + Date.now();

    res.json({ token });
});

// Iniciar servidor
app.listen(3000, () => console.log("API rodando na porta 3000"));
