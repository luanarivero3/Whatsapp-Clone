import { Link } from "react-router-dom";
import notFoundImg from "../assets/images/notfound.png"

const NotFound = () => {
  return (
    <section className="not-found">
      <img src={notFoundImg} alt="Not found"/>
      <h1>Ops, página no encontrada</h1>
      <p>
        No pudimos encontrar la página a donde te dirigias, solo contamos con la
        posibilidad de trabajar con el chat.
      </p>
      <Link to="/chat">Ir al chat</Link>
    </section>
  );
};

export { NotFound };
