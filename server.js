const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public');
const filenameToCheck = 'styles.css'; // Reemplaza con el nombre del archivo que deseas verificar

if (fs.existsSync(path.join(directoryPath, filenameToCheck))) {
    console.log(`El archivo '${filenameToCheck}' se encuentra en la carpeta 'public'.`);
} else {
    console.log(`El archivo '${filenameToCheck}' no se encuentra en la carpeta 'public'.`);
}

const express = require('express')
const app = express()
const port = 3000



app.use(express.json()); //Habilito recepcion de json en servidor

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    console.log("Hola")

});

app.get('/about', function(req, res) {   
    res.sendFile(path.join(__dirname, '/about.html'))
    console.log("Quiénes somos")


});

app.get('/mission', function(req, res) {   
    res.sendFile(path.join(__dirname, '/mission.html'))
    console.log("Qué hacemos")


});


app.get('/contact', function(req, res) {   
    res.sendFile(path.join(__dirname, '/contact.html'))
    console.log("Contáctanos")
});

app.get('/location', function(req, res) {   
    res.sendFile(path.join(__dirname, '/location.html'))
    console.log("Dónde estamos")

});

app.listen(port, () => { //puerto por donde sale la respuesta a la peticion
    console.log(`Example app listening on port on http://localhost:${port}`) 
  })