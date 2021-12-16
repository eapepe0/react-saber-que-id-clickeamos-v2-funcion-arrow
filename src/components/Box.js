import React from "react";

export default function Box(props) {
  /* los estilos tienen que ser CamelCase (minuscula 1era palabra , mayusc 1era letra 2da palagra) 
  ej( backgroundColor ) */
  const estilos = {
    backgroundColor: props.on ? "black" : "transparent"
    /* si estado es true : negro de lo contrario blanco */
    /* como estado esta definido primeramente por default leyendo los datos del boxes.js*/
    /* si en lugar de estado tenemos props.on nunca van a ser cambiados por la funcion setEstado */
  };

  return (
    <div
      style={estilos} /* cargamos los estilos */
      className="box"
      onClick={props.toogle} // llamamos a la funcion que nos da la props.toogle
    ></div>
  );
}
