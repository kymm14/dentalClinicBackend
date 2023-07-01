# Backend para una Clínica Dental🦷

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo

Este proyecto requería una API funcional conectada a una base de datos con al menos una relación de uno a muchos y una relación de muchos a muchos.

## Sobre el proyecto

Aplicación API de ejemplo para la gestión de una base de datos de una Clínica Dental. La gestión se realiza teniendo en cuenta los distintos tipos de roles (admin, user (patient) y doctor) y la autenticación basada en token.

## Deploy 🚀

<div align="center">
    🦷<a href="https://www.google.com"><strong>Url a producción </strong></a>🦷
</div>

## Stack

Tecnologías utilizadas:

<div align="center">
<a href="https://sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>

## Diagrama BD

!['images-dentalClinic'](public/images/dentalClinic.png)

## Instalación en local

1. Clonar el repositorio
2. `$ npm install`
3. Conectamos nuestro repositorio con la base de datos
4. `$ Ejecutamos las migraciones`
5. `$ Ejecutamos los seeders`
6. `$ npm run dev`

## Endpoints

<details>
<summary>Endpoints</summary>

- AUTH

  - Registrar

        POST http://localhost:3000/auth/register

  body:

  ```js
      {
          "name" : "Bob",
          "last_name": "Cooper",
          "email": "bob@cooper.com",
          "birthday": "2002-02-02",
          "password": "12345678",
      }
  ```

  - Login

        POST http://localhost:3000/auth/login

  body:

  ```js
      {
          "email": "bob@cooper.com",
          "password": "12345678"
      }
  ```

- ADMIN

  - Obtener todos los usuarios

        GET http://localhost:3000/api/admin/users

  - Obtener user por id

        GET http://localhost:3000/api/admin/users/:id

  - Obtener todos los pacientes

        GET http://localhost:3000/api/admin/users/patients

  - Obtener todos los doctores

        GET http://localhost:3000/api/admin/users/doctors

  - Actualizar perfil de paciente

        PUT http://localhost:3000/api/admin/update/users/:id

  body:

  ```js
      {
          "last_name": "Brown",
          "birthday": "2000-01-01",
          "password": "12345678"
      }
  ```

  - Eliminar appointment

        DELETE http://localhost:3000/api/admin/delete/appointment

- USER

  - Obtener perfil

        GET http://localhost:3000/api/users/profile

  - Obtener appointment

        GET http://localhost:3000/api/users/appointments

  - Actualizar perfil

        PUT http://localhost:3000/api/users/update

  body:

  ```js
        {
            "name": "Alice",
            "birthday": "1996-02-19",
            "password": "12345678"
        }
  ```

  - Crear appointment

        PUT http://localhost:3000/api/users/create/appointment

  body:

  ```js
       {
            "id_doctor": 2,
            "date": "2023-06-30",
            "time": "10:00"
       }
  ```

  - Editar appointment

        PUT http://localhost:3000/api/users/update/appointment/:id

    body:

    ```js
        {
            "time": "15:30",
        }
    ```

  - Eliminar appointment

        DELETE http://localhost:3000/api/users/delete

- DOCTOR

  - Obtener todos los pacientes

        GET http://localhost:3000/api/users/doctor/patients

  - Obtener todos los appointments

        GET http://localhost:3000/api/users/doctor/appointments

  - Obtener perfil

        GET http://localhost:3000/api/users/doctor/profile

</details>

## Futuras funcionalidades

[ ] Añadir mas end-points para la gestión de usuarios  
[ ] Añadir end-points para la gestión de citas

## Contacto

<a href="https://github.com/kymm14" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=orange" target="_blank"></a>

<a href="mailto:yonetzymm@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>

<a href="https://www.linkedin.com/in/yonetzy-moreno/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>
