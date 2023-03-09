//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props = {
  nombre,
  cancion
}) {
  return (
    <div>
      <h2>Esto es un componente</h2>
      <span>{props.nombre}</span>
      <span>{props.cancion}</span>
    </div>
  );
}

export default Card;
