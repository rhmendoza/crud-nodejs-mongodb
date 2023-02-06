const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();


const PUERTO = process.env.PORT || 3000;

app.use(express.json());
app.use(require("./routes/persona.routes"));


mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('conexion realizada con exito'))
    .catch((err) => console.log(err));

   
app.listen(PUERTO, () => {
    console.log(`El servidor para CRUD esta escuchando en el puerto ${PUERTO}`);
});


