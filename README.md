# Naruto API 🌪️

Una API RESTful no oficial que proporciona información detallada sobre el universo de Naruto. Incluye datos sobre personajes, clanes, aldeas, habilidades y más.

## 🚀 Características

- Obtener lista completa de personajes.
- Consultar clanes, aldeas y sus miembros.
- Información sobre jutsus, tipos de chakra y rangos ninja.
- Búsqueda por nombre o ID.
- Soporte para filtros y paginación.

## 🔗 Endpoints Principales

### 🧍‍♂️ Personajes
- `GET /api/characters` — Lista de personajes.
- `GET /api/characters/:id` — Detalle de un personaje específico.
- `GET /api/characters?name=naruto` — Buscar por nombre.

### 🧬 Clanes
- `GET /api/clans` — Lista de clanes.
- `GET /api/clans/:id` — Detalle de un clan.

### 🏯 Aldeas
- `GET /api/villages` — Lista de aldeas.
- `GET /api/villages/:id` — Detalle de una aldea.

### 🥋 Jutsus
- `GET /api/jutsus` — Lista de técnicas.
- `GET /api/jutsus/:id` — Detalle de un jutsu.

## 🛠️ Tecnologías Usadas

- Node.js + Express
- MongoDB (o cualquier otra base de datos, dependiendo de tu proyecto)
- Swagger (para documentación interactiva, opcional)

## 📦 Instalación

```bash
git clone https://github.com/tuusuario/naruto-api.git
cd naruto-api
npm install
npm start
