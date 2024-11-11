const express = require('express') //chamando o express

const app = express() //criar um aplicativo web com o express

app.use(express.json()) //app.use = adiciona middlewares(blocos de código executados em todas as requisições)

app.get('/', (req, res) => { //retornar informações
    res.send('App online') //função de respostam enviar resposta
})

app.get('/cursos', (req, res) => { //retornar informações
    res.send('Cursos Descomplica Informática') //função de respostam enviar resposta
})

app.post('/cursos', (req, res) => { //método http utilizado para enviar informações e serem processadas
    const dadosCurso = req.body //corpo da requisição, informação enviada pelo cliente para API
    console.log(dadosCurso)
    res.send('Cursos Descomplica Informática') //função de respostam enviar resposta
})

app.get('/professores', (req, res) => { //retornar informações
    res.send('Professores') //função de respostam enviar resposta
})

app.get('/estudantes', (req, res) => { //retornar informações
    res.send('Página Inicial Estudantes') //função de respostam enviar resposta
})

app.listen(3000, () => { //servidor 'escuta' as requisições que vem da porta
    console.log('App online') //mensagem
})