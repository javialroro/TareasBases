## Como usar el Rest API

# Comandos

## 1. Construir el contenedor de Docker con las imagenes

``` bash
docker-compose up --build
```

Nota: Despues ejecutar por primera vez el docker compose, detenerlo con CTRL-C, y volver a ejecutar para que todas las conexiones se hagan correctamente

## 2. Registro de usuario

Para registrar un usuario, se necesita la app POSTMAN, aqui el usuario va a crear un request con el metodo POST utilizando el endpoint /api/register, y en el body ingresa sus datos de la siguiente forma:

{
    "name":"Nombre de su usuario",
    "password":"Su contraseña"
}

## 3. Login de Usuario 

Para hacer el login con su usuario, se necesita la app POSTMAN, aqui el usuario va a crear un request con el metodo POST utilizando el endpoint /api/login, y en el body ingresa el nombre de usuario y contraseña que registro anteriormente de la siguiente forma:

{
    "name":"Nombre de su usuario",
    "password":"Su contraseña"
}

Despues de haber iniciado correctamente el login, esto le mostrara un token, el cual debera copiar (CTRL+C), luego de esto va a dirigirse al apartado de Authorization en POSTMAN en el apartado TYPE escogera la opción JWT Bearer, despues se va al apartado de HEADERS en POSTMAN y en donde dice KEY va a escribir "Authorization" y en el VALUE escribe Bearer+Tecla Espacio+token, despues esto ya puede realizar todos los metodos

## 4. Como crear tareas

Para realizar esta acción, el usuario crea un método POST con el endpoint /tasks, y en el body ingresa de la siguiente forma los datos:

{
    "title":"Titulo de la tarea",
    "description":"La descripción",
    "due_date":"fecha de vencimiento",
    "status":"Estado de la tarea",
    "usuario":"Su nombre de su usuario"
}

## 5. Como listar tareas

Para realizar esta acción, solamente el usuario crea un método GET con el endpoint /tasks

## 6. Como obtener Detalle de Tarea

Para realizar esta acción, solamente el usuario crea un método GET con el endpoint /tasks/id, donde id es la tarea que desea obtener el detalle

## 7. Como actualizar una tarea

Para realizar esta acción,el usuario crea un método PUT con el endpoint /tasks/id, donde id es la tarea que desea actualizar, y en el body ingresa de la siguiente forma los datos a actualizar:

{
    "title":"Titulo de la tarea",
    "description":"La descripción",
    "due_date":"fecha de vencimiento",
    "status":"Estado de la tarea",
    "usuario":"Su nombre de su usuario"
}

## 8. Como eliminar una tarea

Para realizar esta acción,el usuario crea un método DELETE con el endpoint /tasks/id, donde id es la tarea que desea eliminar.