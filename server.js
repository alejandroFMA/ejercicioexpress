const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); //Habilito recepcion de json en servidor

app.get('/', (req, res) => {
  res.send('Hello World!') //envio
})

app.listen(port, () => { //puerto por donde sale la respuesta a la peticion
    console.log(`Example app listening on port on http://localhost:${port}`) 
  })