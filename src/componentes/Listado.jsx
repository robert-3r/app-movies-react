import { useEffect, useState } from "react";
import EditarForm from "./EditarForm";

const Listado = ({ setListadoState, listadoState }) => {
  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);
  useEffect(() => {
    console.log("componentes de listado de peliculas");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);
    return peliculas;
  };
  const borrarPeli = (id) => {
    let confirmar = window.confirm(
      "estas seguro que quieres eliminar esta pelicula"
    );
    let pelis__almacenadas = conseguirPeliculas();

    let nuevaPelicula = pelis__almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    if (confirmar) {
      setListadoState(nuevaPelicula);
      localStorage.setItem("pelis", JSON.stringify(nuevaPelicula));
    } else {
      return;
    }
  };
  return (
    <>
     
      {listadoState && listadoState.length > 0 ? (
        listadoState.map((peli) => (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button onClick={() => setEditar(peli.id)} className="edit">
              Editar
            </button>
            <button onClick={() => borrarPeli(peli.id)} className="delete">
              Borrar
            </button>

            {editar === peli.id && (
              <EditarForm setListadoState={setListadoState} setEditar={setEditar} conseguirPelicula={conseguirPeliculas} peli={peli} />
            )}
          </article>
        ))
      ) : (
        <p className="no-hay-peli">No hay películas por mostrar</p>
      )}
    
    </>
  );
};

export default Listado;
