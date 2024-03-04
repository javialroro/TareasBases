const express = require('express');
const {Database} = require('./db.js');
const {AppService} = require('./AppService.js');

const app = express();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const db = new Database(DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT);

const appService = new AppService(db);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/tasks', async (req, res) => {
    const tasks = await appService.getTasks();
    res.send(tasks);
});

app.get('/api/tasks/:id', async (req, res) => {
    const task = await appService.getTaskById(req.params.id);
    res.send(task);
});

app.post('/api/tasks', async (req, res) => {
    const task = await appService.createTask(req.body);
    res.send(task);
});

app.put('/api/tasks', async (req, res) => {
    const task = await appService.updateTask(req.body);
    res.send(task);
});

app.delete('/api/tasks/:id', async (req, res) => {
    const task = await appService.deleteTask(req.params.id);
    res.send(task);
});

// Now you can use these variables to configure your database connection

const PORT = process.env.PORT || 3000; // Obtener el puerto del entorno o utilizar el puerto 3000 por defecto

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = db; // Exportar la db para las pruebas
module.exports = app; // Exportar la aplicación para las pruebas
