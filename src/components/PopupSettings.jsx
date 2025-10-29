import { useEffect, useState } from "react";

export default function PopupSettings({ onClose }) {
  const [theme, setTheme] = useState(localStorage.getItem ("theme") || "light");
  const [name, setName] = useState("usuario");

  useEffect (() => {
   document.body.setAttribute("data-theme", theme) 
   localStorage.setItem("theme", theme)
  }, [theme])

  const handleChange = (e) => {
  const newName = (e.target.value);
    localStorage.setItem("userName", newName);
  };

  return (
    <div className="cont-popup">
      <div className="popup">
        <h2>Configuración ⚙️</h2>

        <div>
          <label>Tema:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </div>

        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </div>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
