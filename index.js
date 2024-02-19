const express = require('express')
const app = express()

const animales = [
    {
        nombre : "Perro",
        sonido : "wouf"
    },
    {
        nombre : "Gato",
        sonido : "Miua"
    }
];

//Metodo para leer de una base de datos por medio de un api rest "Get"
app.get('', (req, res)=>{

    res.json(animales);

});

app.get('/:id', (req, res)=>{

    const indice = req.params.id
    objSeleccionado = animales[indice];
    res.json(objSeleccionado);

});



app.listen(3000)