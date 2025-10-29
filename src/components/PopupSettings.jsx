import { useEffect, useState } from "react";

export default function PopupSettings({ onClose }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [confirmacionLectura, setConfirmacionLectura] = useState(
    localStorage.getItem("confirmacionLectura") || "No"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
          <label>Confirmación de lectura:</label>
          <select
            value={confirmacionLectura}
            onChange={(e) => setConfirmacionLectura(e.target.value)}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
