const express = require("express")
const router = express.Router()

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Cássia Carvalho',
        imagem: 'https://avatars.githubusercontent.com/u/110124751?v=4',
        minibio: 'Desenvolvedora e estudante'
    },
    {
        nome: 'Amanda da Rosa',
        imagem: '',
        minibio: 'Professora e estudante'
    },
    {
        nome: 'Talita Oliveira',
        imagem: '',
        minibio: 'Desenvolvedora e estudante'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);