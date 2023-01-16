const express = require('express');
const app = express();


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor para CRUD esta escuchando en el puerto ${PUERTO}`);
});
