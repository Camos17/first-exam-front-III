import { Fragment, useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('');
  const [cancion, setCancion] = useState('');

  const [isFormValid, setFormValidation] = useState(false);


  const handlerChangeName = (e) => {
    console.log('evento nombre', e.target.value);
    let name = e.target.value;
    if (name.length <= 3) {
      setFormValidation(true);
      console.log('El nombre tienes menos de 3 caracteres..!', isFormValid);
    }
    setNombre(name.trim());
    
  };

  const handlerChangeCancion = (e) => {
    console.log('evento cancion', e.target.value);
    let cancion = e.target.value;

    if (cancion.length > 6) {
      setFormValidation(true);
      console.log('La cancion tiene mas de 6 caracteres..!', isFormValid);
    }
    setCancion(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('evento form submit', e.target);
    const dataForm = {
      nombre,
      cancion
    }

    console.log('Evento boton', dataForm);
  };

  return (
    <Fragment>
      <div className="App">
        <h1>¿Que musica te gusta?</h1>
        <form onSubmit={handlerSubmit}>
          {/* aqui deberias escribir tu codigo */}

          <input 
            placeholder="nombre" 
            id="nombre"
            type="text"
            name="nombre"
            value={nombre}
            onChange={handlerChangeName}
            minLength={3}
          />
          <input 
            placeholder="canción"
            id="cancion"
            type="text"
            name="cancion"
            value={cancion}
            onChange={handlerChangeCancion}

          />

          <button type="submit" disabled={isFormValid}>Enviar</button>


        </form>
      </div>
      <Card nombre={nombre} cancion={cancion}/>
    </Fragment>
  );
}

export default App;
