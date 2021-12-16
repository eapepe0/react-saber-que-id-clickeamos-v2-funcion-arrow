import React from "react";
import boxes from "./boxes";
import Box from "./components/Box.js";

export default function App() {
  const [cajas, setCajas] = React.useState(boxes);
  /* inicializamos cajas con los datos de boxes */

  function toogle(id) {
    setCajas((prevCajas) => {
      // metodo para actualizar el useState
      return prevCajas.map((caja) => {
        // devolvemos un mapeo de cajas donde cajes el elemento que recorre el mapeo
        return caja.id === id ? { ...caja, on: !caja.on } : caja;
        // si caja.id es igual al id clickeado devuelve un spread donde el booleano es dado vuelta , de lo contrario devolvemos caja
        // con el {} en el spread estamos diciendo que queremos modificar el objeto
        // y en : caja , al no modificar nada devolvemos caja como esta
      });
    });
  }
  const cajaElementos = cajas.map((caja) => (
    <Box on={caja.on} key={caja.id} toogle={() => toogle(caja.id)} />
    /* el box recibe como props la funcion toogle */
  ));
  /* mapeamos por cada elemento en cajas , sacamos un componente box , usamos el id como key */

  return <main>{cajaElementos}</main>;
  /* devolvemos todo lo mapeado */
}
