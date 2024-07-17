const express = require('express');
// CREAMOS UNA INSTANCIA Y LA EJECUTAMOS
const app = express();

//cuando alguien viene a nuestra ruta hacemos el back con las peticiones
app.get('/', (req, res) => {
    res.send("Vilma-deploy");
})

//puerto disponible en mi pc y process se pone esta variable de 
//entorno para saber que puerto puedo usar (alt124||)
const PORT = process.env.PORT || 3000;

//LE DECIMOS A LA APP QUE ESCUCHE A TRAVES DEL PUERTO
app.listen(PORT, () => console.log(`http=//localhost:${PORT}`));