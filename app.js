// requerimos express y path
const express = require('express');
const path = require('path');

// guardamos en un constante app la funcionalidad de express()
const app = express();

// definimos las rutas para los archivos estáticos(públicos) y otra para las vistas
const viewsPath = path.join(__dirname, 'views');
const publicPath = path.join(__dirname, 'public');

// Agregamos el middleware para configurar la carpeta de archivos estáticos
app.use(express.static(publicPath));

// Definimos la ruta que responda a GET "/" con la vista home.html
app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'home.html')));

/* Clase 15 - Micro desafío 1 */
// Definimos la ruta que responda a GET "/register" con la vista register.html
app.get('/register', (req, res) => res.sendFile(path.join(viewsPath, 'register.html')));

/* Clase 15 - Micro desafío 2 */
// Definimos la ruta que responda a GET "/login" con la vista register.html
app.get('/login', (req, res) => res.sendFile(path.join(viewsPath, 'login.html')));

// definimos el puerto en el que se va a levantar el servidor
const port = process.env.PORT || 3000;

// Levantamos el servidor con app.listen(port)
app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
})