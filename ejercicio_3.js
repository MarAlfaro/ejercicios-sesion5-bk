const express = require('express')
const app = express()

const PORT = 4000

app.get('/', (req, res) => {
    res.send('Este es un servidor basico usando express')
})

app.listen(PORT, () => {
    console.log(`Server iniciado http://localhost:${PORT}`)
})