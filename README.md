## 💬 Clon de WhatsApp – Proyecto Final Frontend

Este proyecto es una ampliación del Clon de WhatsApp realizado en React.  
Se agregaron nuevas funcionalidades para practicar **React Router DOM, Hooks (useState, useEffect, useNavigate)** y el manejo de **estado global con Context API**.

---

## ¿Cómo funciona?

El sistema simula un chat con inicio de sesión y persistencia de datos en `localStorage`.  
Cuenta con las siguientes mejoras funcionales:

### 🔐 1. Rutas protegidas

- Solo se puede acceder a `/chat` si hay sesión activa.
- Si el usuario no está logueado, se redirige automáticamente al login (`/`).
- Si el usuario ya inició sesión, no puede volver al login manualmente.

### ⚙️ 2. Popup de configuración (Settings)

- Desde el botón de configuración se abre un **popup modal**.
- Permite:
  - Cambiar entre **tema claro y oscuro**.
  - Activar o desactivar la **confirmación de lectura**.
- El popup se puede cerrar y mantiene las preferencias guardadas en `localStorage`.

### 🆘 3. Página de ayuda

- Nueva ruta `/help` con información estática sobre:
  - El funcionamiento del chat.
  - Las tecnologías utilizadas.
  - Posibles mejoras futuras.

---

## Tecnologías utilizadas

- React
- React Router DOM
- React Hooks
- Context API
- LocalStorage
- CSS

---

## ¿Cómo se ejecuta?

#### 1. Clonar el repositorio

```bash
git clone https://github.com/luanarivero3/Whatsapp-Clone.git

cd tu-repo

```

#### 2. Instalar dependencias

```bash
npm install
```

#### 3. Ejecutar el proyecto

```bash
npm run dev
```

#### 4. Abrir el navegador

```bash
http://localhost:5173
```

#### 👨‍💻 Autor

Proyecto desarrollado por Luana Rivero Cardozo

"Ampliación del Clon de WhatsApp" – Front End Developer - UTN 2025
