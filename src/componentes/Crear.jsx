import React, { useState } from "react";
import { GuardarEnstorage } from "../helpers/GuardarStorage";

const Crear = ({setListadoState}) => {
  let tituloComponente = "Añadir Pelicula";
  const [peliState, setPeliState] = useState({
    id: "",
    titulo: "",
    descripcion: "",
  });
  const { titulo, descripcion } = peliState;

  const conseguirDatos = (e) => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    setPeliState(peli);
     
    setListadoState(elementos =>{
      return [...elementos,peli]
    })

    GuardarEnstorage('pelis',peli);
    

   location.reload()
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {" "}
        {titulo && descripcion && "Has creado la pelicula:" + "" + titulo}
      </strong>

      <form onSubmit={conseguirDatos}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />

        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="description"
        ></textarea>

        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
