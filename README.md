# 🏢 RE/MAX Real Estate Platform

Plataforma web inmobiliaria moderna para **RE/MAX**, desarrollada con una arquitectura desacoplada (*Jamstack*) compuesta por un **Frontend en Astro** y un **Backend en Strapi CMS**.

---

## 🌟 Características Principales

- **Catálogo de Propiedades**: Visualización de inmuebles en venta y alquiler con filtros, galerías de imágenes y fichas detalladas.
- **Directorio de Agentes**: Perfiles de agentes inmobiliarios con vías de contacto directo.
- **Sección de Noticias & Blog**: Artículos del sector inmobiliario dinámicos.
- **Formularios Interactivos**: Formularios para clientes ("Vender mi propiedad", "Contáctanos") y reclutamiento de agentes ("¿Quieres ser agente?").
- **Panel de Administración (CMS)**: Gestión completa de contenidos, propiedades, agentes y noticias desde Strapi.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[Astro](https://astro.build/)** v4.15 - Framework moderno enfocado en velocidad y renderizado eficiente.
- **TypeScript** - Tipado estático para mayor mantenibilidad.
- **HTML5 & CSS3** - Diseño adaptativo (*Responsive Design*) e interfaz estilizada.

### Backend
- **[Strapi CMS](https://strapi.io/)** v5.51 - Headless CMS de código abierto para gestionar contenidos de forma flexible.
- **SQLite** (`better-sqlite3`) - Base de datos ligera para desarrollo.
- **CKEditor Plugin** - Editor de texto enriquecido para artículos y descripciones de propiedades.

---

## 📁 Estructura del Proyecto

```text
Remax/
├── src/                        # Código fuente del Frontend (Astro)
│   ├── components/             # Componentes UI (Header, Footer, PropertyCard, AgentCard, etc.)
│   ├── layouts/                # Layouts base de la aplicación
│   ├── lib/                    # Funciones auxiliares y llamadas a la API de Strapi
│   └── pages/                  # Rutas y páginas del sitio web (index, propiedades, agentes, noticias, etc.)
├── backend/                    # Backend Strapi CMS
│   ├── config/                 # Configuraciones del servidor, base de datos y plugins
│   ├── database/               # Migraciones de base de datos
│   └── src/                    # Esquemas de contenidos (API/ContentTypes), políticas y panel de admin
├── public/                     # Archivos estáticos del frontend (imágenes, favicons, etc.)
├── .env.example                # Plantilla de variables de entorno para el Frontend
├── backend/.env.example        # Plantilla de variables de entorno para el Backend
├── astro.config.mjs            # Configuración principal de Astro
├── package.json                # Dependencias y scripts del Frontend
└── README.md                   # Documentación oficial del proyecto
```

---

## 🚀 Guía de Instalación y Configuración

### 1. Requisitos Previos
Asegúrate de tener instalados en tu sistema:
- **Node.js**: `v20.0.0` o superior (Recomendado LTS)
- **npm**: `v6.0.0` o superior

### 2. Clonar el Repositorio
```bash
git clone https://github.com/MarcosGT23/remax.git
cd remax
```

### 3. Instalación de Dependencias

**Frontend (Astro)**:
```bash
npm install
```

**Backend (Strapi)**:
```bash
cd backend
npm install
cd ..
```

---

## ⚙️ Variables de Entorno

### Frontend (`.env` en la raíz)
Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:
```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=tu_token_de_api_aqui
```

### Backend (`backend/.env`)
Crea un archivo `.env` dentro de la carpeta `backend/` basándote en `backend/.env.example`:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="tu_app_key_1,tu_app_key_2"
API_TOKEN_SALT=tu_api_token_salt
ADMIN_JWT_SECRET=tu_admin_jwt_secret
TRANSFER_TOKEN_SALT=tu_transfer_token_salt
JWT_SECRET=tu_jwt_secret
ENCRYPTION_KEY=tu_encryption_key
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

---

## 💻 Ejecución en Entorno Local

Para ejecutar el proyecto localmente, se recomienda iniciar primero el backend y luego el frontend.

### 1. Iniciar el Backend (Strapi)
En una terminal:
```bash
cd backend
npm run develop
```
- **Panel de Administración**: `http://localhost:1337/admin`
- **API REST**: `http://localhost:1337/api`

### 2. Iniciar el Frontend (Astro)
En otra terminal desde la raíz del proyecto:
```bash
npm run dev
```
- **Sitio Web Local**: `http://localhost:4321`

---

## 📜 Comandos Disponibles

### Frontend (Raíz del proyecto)
| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo de Astro (`http://localhost:4321`). |
| `npm run build` | Valida TypeScript y genera el build de producción en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente la versión de producción generada. |
| `npm run astro` | Ejecuta comandos CLI propios de Astro. |

### Backend (`backend/`)
| Comando | Descripción |
| :--- | :--- |
| `npm run develop` | Inicia Strapi en modo desarrollo con auto-recarga. |
| `npm run start` | Inicia Strapi en modo producción. |
| `npm run build` | Compila el panel de administración de Strapi. |

---

## 🚢 Despliegue en Producción

1. **Backend**: Puede desplegarse en servicios como Strapi Cloud, Render, Railway o un servidor VPS Node.js.
2. **Frontend**: Puede desplegarse fácilmente en plataformas Jamstack como Vercel, Netlify, Cloudflare Pages o AWS Amplify.

---

## ✒️ Licencia & Créditos

Desarrollado para el equipo inmobiliario de **RE/MAX**. Todos los derechos reservados.
