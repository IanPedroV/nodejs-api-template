let app = require('./config/custom-express')();
const PORT = 80;

app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (request, response) =>{
    response.send("OK!")
})