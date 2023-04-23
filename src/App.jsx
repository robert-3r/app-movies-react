import { useState } from "react";
import Buscador from "./componentes/Buscador";
import Crear from "./componentes/Crear";
import Listado from "./componentes/Listado";

function App() {
 
  const [listadoState, setListadoState] = useState([]);
  return (
    <>
      <div className="layout">
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>Mis Peliculas</h1>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Peliculas</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
        <section className="content">
     
          <Listado setListadoState={setListadoState} listadoState={listadoState} />
        </section>
        <aside className="lateral">
          <Buscador setListadoState={setListadoState} listadoState={listadoState} />
          <Crear setListadoState={setListadoState} />
        </aside>
        <footer className="footer">
          <p>&copy; Robinson Rodriguez || Developer</p>
        </footer>
      </div>
    </>
  );
}

export default App;
