# Mascotas Express MongoDB

Este proyecto es una API RESTful construida con Node.js, Express y MongoDB utilizando Mongoose. La API permite gestionar mascotas y usuarios, incluyendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para ambos.


Add user authentication and pet management features

- Implement user registration, login, and profile retrieval in usuariosController.
- Create usuarios schema and model for user data management.
- Add JWT token generation and verification for secure routes.
- Introduce new routes for user operations.
- Update mascotasController to include token verification for update and delete operations.
- Refactor database connection to use Mongoose for both users and pets.
- Add bcrypt for password hashing and validation.
- Update package.json to include new dependencies: bcrypt and jsonwebtoken.

## Estructura del Proyecto


## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>

   npm install

   npm run start



Endpoints
Usuarios
POST /users/register: Registra un nuevo usuario.

POST /users/login: Inicia sesión un usuario.
{
  "email": "user@example.com",
  "clave": "password"
}


POST /pets: Crea una nueva mascota.
{
  "nombre": "Firulais",
  "tipo": "Perro",
  "raza": "Labrador",
  "edad": 3,
  "descripcion": "Un perro muy amigable",
  "adoptado": false
}

GET /pets/:id: Obtiene una mascota por su ID.

GET /pets: Obtiene todas las mascotas.

PUT /pets/:id: Actualiza una mascota por su ID.
Headers:

{
  "Authorization": "Bearer <token>"
}

{
  "nombre": "Firulais",
  "tipo": "Perro",
  "raza": "Labrador",
  "edad": 4,
  "descripcion": "Un perro muy amigable y juguetón",
  "adoptado": true
}


DELETE /pets/:id: Elimina una mascota por su ID.
Headers
{
  "Authorization": "Bearer <token>"
}


Middleware verificarToken
Este middleware realiza las siguientes acciones:

Extrae el token del encabezado Authorization.
Verifica si el token está presente.
Verifica la validez del token utilizando la clave secreta JWT_SECRET.
Si el token es válido, añade el email del usuario al objeto req y llama a next() para continuar con la solicitud.
Si el token no es válido, responde con un estado 401 Unauthorized.