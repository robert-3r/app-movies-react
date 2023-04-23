import { useState } from "react";

const Buscador = ({ setListadoState, listadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);
  const buscarPeli = (e) => {
    setBusqueda(e.target.value);

    let peli_encontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || peli_encontradas <= 0) {
      peli_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    setListadoState(peli_encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">
        Buscador : <i>{busqueda}</i>
      </h3>
      {(noEncontrado == true && busqueda.length > 1) && <span className="no-encontrado"> No se ha encontrado ninguna pelicula</span> }
      <form>
        <input
          onChange={buscarPeli}
          value={busqueda}
          autoComplete="off"
          name="buscar"
          type="text"
        />
        <button>Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;
