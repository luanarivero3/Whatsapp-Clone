import { Link } from "react-router-dom";

const Help = () => {
  return (
    <main>
      <header>
        <h1>❓Centro de ayuda</h1>
        <p>
          ¿Tenés dudas sobre como funciona el chat? Acá te lo explicamos todo.
        </p>
      </header>
      <section>
        <h2>🔧Funcionamiento del chat</h2>
        <ul>
          <li></li>
          <li>Mensajes en tiempo real entre usuarios.</li>
          <li>Visualización de hora en cada mensaje.</li>
          <li>Modo claro/oscuro configurable.</li>
          <li>Buscar contactos por nombre mediante la barra de búsqueda.</li>
          <li>Logout seguro.</li>
        </ul>
        <p>Todo se guarda localmente en tu navegador.</p>
      </section>
      <section>
        <h2>💻Tecnologías utilizadas</h2>
        <ul>
          <li>
            <strong>React:</strong> biblioteca principal para construir la
            interfaz.
          </li>
          <li>
            <strong>React Router:</strong> manejo de rutas y navegación entre
            vistas.
          </li>
          <li>
            <strong>Context API:</strong> permite compartir datos globales
            (usuarios y mensajes).
          </li>
          <li>
            <strong>LocalStorage:</strong> almacenamiento de la información del
            chat.
          </li>
          <li>
            <strong>CSS:</strong> estilos personalizados, con soporte para tema
            claro y oscuro.
          </li>
        </ul>
      </section>
      <section>
        <h2>📈 Mejoras futuras</h2>
        <ul>
          <li>Incorporar autenticación real de usuarios (login y registro).</li>
          <li>
            Permitir envío de imágenes, videos, audios y archivos adjuntos.
          </li>
          <li>
            Agregar funcionalidad a confirmación de lectura (mensajes vistos o
            no vistos).
          </li>
          <li>Optimizar el diseño para dispositivos móviles.</li>
          <li>Agregar un sistema de respuestas automáticas inteligentes.</li>
          <li>Permitir cambiar el idioma de la interfaz.</li>
        </ul>
      </section>
      <p className="text-info">
        Ir a <Link to="/chat">Chat</Link>
      </p>
    </main>
  );
};

export default Help;
