# 📚 API de Gestión de Libros

Este proyecto es un backend desarrollado con **Node.js, Express y MongoDB** que permite la gestión de libros y sus categorías mediante una **API REST**.  

## 🚀 Características principales  
✅ CRUD completo para **libros** (crear, leer, actualizar y eliminar).  
✅ CRUD completo para **categorías de libros**.  
✅ Base de datos **MongoDB** para almacenamiento eficiente.  
✅ Uso de **Express.js** para gestionar las rutas y controladores.  
✅ API estructurada para facilitar la integración con un frontend.  

---

## 🛠 Tecnologías utilizadas  
- 🌍 **Backend:** Node.js + Express  
- 🗄 **Base de datos:** MongoDB + Mongoose  
- 📡 **API REST:** Métodos HTTP para gestión de libros y categorías  
- 🔄 **CORS habilitado** para permitir el acceso desde el frontend  

---

## 📂 Instalación y Configuración  

### 1️⃣ **Clonar el repositorio**  
```bash
git clone https://github.com/MLxFernando/backend_factura.git
cd frontend_factura
```

## Instalar dependencias
```bash
npm install
```
## Ejecutar el proyecto
```bash
npm run start
```

## 🔌 Endpoints de la API  

### 📚 **Gestión de Libros**
### 📌 1️⃣ **Crear un libro**  
**Método:** `POST`  
**URL:** `/api/libros`  
**Descripción:** Crea un nuevo libro en la base de datos.

📌 **Body JSON:**  
```json
{
  "titulo": "El principito",
  "autor": "Antoine de Saint-Exupéry",
  "categoria": "Clásico",
  "anio_publicacion": 1943
}
```

### 📌 2️⃣ **Listar todos los libros**
**Método:** `GET`

**URL:** `/api/libros`

**Descripción:** Obtiene todos los libros almacenados en la base de datos.

### 📌 3️⃣ **Actualizar un libro**
**Método:** `PUT`

**URL:** `/api/libros/:id`

**Descripción:** Actualiza la información de un libro existente.

📌 **Body JSON:**  
```json
{
  "titulo": "El principito (Edición Revisada)",
  "autor": "Antoine de Saint-Exupéry"
}
```


### 📌 4️⃣ **Eliminar un libro**
**Método:** `DELETE`

**URL:** `/api/libros/:id`

**Descripción:** Elimina un libro de la base de datos.

## 📂 **Gestión de Categorías**
### 📌 1️⃣ **Crear una categoría**  
**Método:** `POST`  
**URL:** `/api/categorias`  
**Descripción:** Crea una nueva categoria en la base de datos.

📌 **Body JSON:**  
```json
{
  {
    "nombre": "Ciencia Ficción"
  }
}
```

### 📌 2️⃣ **Listar categorías**
**Método:** `GET`

**URL:** `/api/categorias`

**Descripción:** Obtiene todos las categorias almacenados en la base de datos.

### 📌 3️⃣ **Actualizar una categoria**
**Método:** `PUT`

**URL:** `/api/categorias/:id`

**Descripción:** Actualiza la información de una categoria existente.

📌 **Body JSON:**  
```json
{
  {
    "nombre": "Ficción Científica"
  }
}
```


### 📌 4️⃣ ** Eliminar una categoría**
**Método:** `DELETE`

**URL:** `/api/categorias/:id`

**Descripción:** Elimina una categoria de la base de datos.
