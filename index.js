const express = require("express")
const path = require("path")

const app= express()

app.get('/', (requisição, resposta) => {
    resposta.send("estou funcionando com o express")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})