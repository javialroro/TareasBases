// app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('Deberia retornar "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

describe('POST /api/tasks', () => {
  it('Deberia crear una nueva task', async () => {
    const postData = {
      
        title: "new_task2",
        description: "Here we are",
        status: "pending",
        due_date: "09/03/2024",
        user_id:"1"
    };

    const response = await request(app)
      .post('/api/tasks')
      .send(postData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', postData.title);
    expect(response.body).toHaveProperty('description', postData.description);
  });
});

describe('PUT /api/tasks', () => {
  it('Deberia hacerle un update al task con id=1', async () => {
    const postData = {
      
        id: 1,
        title: "Task updateado",
        description: "Here we go!",
        due_date: "09-11-2001",
        status: "pending",
        user_id: 1
    
    };

    const response = await request(app)
      .put(`/api/tasks/`)
      .send(postData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', postData.title);
    expect(response.body).toHaveProperty('id', postData.id);
  });
});

describe('DELETE /api/tasks/:id', () => {
  it('Deberia eliminar el task con id=3', async () => {
    const response = await request(app).delete('/api/tasks/3');
    expect(response.status).toBe(200);
    expect(response.text).toBe('3');
  });
});

describe('Pruebas de integracion', () => {
  it('Deberia crear un task y obtenerlo', async () => {
    // Crear un nuevo usuario
    const postData = {
      title: "Task de Integracion",
      description: "Hello World!",
      status: "pending",
      due_date: "09/03/2024",
      user_id:"1"
    };
    const createTaskResponse = await request(app)
      .post('/api/tasks')
      .send(postData);

    expect(createTaskResponse.status).toBe(200);

    const taskId = createTaskResponse.body.id;

    // Obtener el usuario recién creado
    const getTaskResponse = await request(app).get(`/api/tasks/${taskId}`);

    expect(getTaskResponse.status).toBe(200);
    expect(getTaskResponse.body).toHaveProperty('title', postData.title);
    expect(getTaskResponse.body).toHaveProperty('description', postData.description);
  });
});

