const EditarForm = ({
  setListadoState,
  peli,
  conseguirPelicula,
  setEditar,
}) => {
  const titulo_componente = "Editar pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    let target = e.target;

    const peliculas_almecenadas = conseguirPelicula();
    const indice = peliculas_almecenadas.findIndex((peli) => peli.id === id);

    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };
    peliculas_almecenadas[indice] = peli_actualizada;

    localStorage.setItem("pelis", JSON.stringify(peliculas_almecenadas));

    setListadoState(peliculas_almecenadas);
    setEditar(0);
  };

  return (
    <div className="edit__form">
      <h3 className="title">
        {titulo_componente} : <i>{peli.titulo}</i>
      </h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          defaultValue={peli.titulo}
          type="text"
          name="titulo"
          className="titulo_editado"
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        ></textarea>
        <input type="submit" className="editar " value="Actualizar" />
      </form>
    </div>
  );
};

export default EditarForm;
