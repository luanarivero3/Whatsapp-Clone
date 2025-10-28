import {useState} from "react"

export default function PopupSettings ({onClose}){
    const [theme, setTheme] = useState ("light")
    const [name, setName] = useState("usuario")

    const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.body.setAttribute("data-theme", newTheme)
    }

  const handleChange = (e) => {
    setName(e.target.value)
    localStorage.setItem("userName", e.target.value)
  }

  return (
    <div className="cont-popup">
      <div className="popup">
        <h2>Configuración ⚙️</h2>
        

        <div>
          <label>Tema actual:</label>
          <button onClick={toggleTheme}>
            Cambiar a {theme === "light" ? "oscuro" : "claro"}
          </button>
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
  )
  }