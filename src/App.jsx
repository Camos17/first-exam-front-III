import { Fragment, useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('');
  const [cancion, setCancion] = useState('');

  const [isFormNameValid, setFormNameValidation] = useState(false);
  const [isFormSongValid, setFormSongValidation] = useState(false);

  const handlerChangeName = (e) => {
    console.log('evento nombre', e.target.value);
    let name = e.target.value;
    if (name.length >= 3) {
      setFormNameValidation(true);
      console.log('El nombre tienes menos de 3 caracteres..!', isFormNameValid);
    } else {
      setFormNameValidation(false);
    }
    setNombre(name.trim());
    
  };

  const handlerChangeCancion = (e) => {
    console.log('evento cancion', e.target.value);
    let cancion = e.target.value;

    if (cancion.length > 6) {
      setFormSongValidation(true);
      console.log('La cancion tiene mas de 6 caracteres..!', isFormSongValid);
    } else {
      setFormSongValidation(false);
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

          <button type="submit" disabled={!isFormNameValid || !isFormSongValid}>Enviar</button>


        </form>
      </div>
      {isFormNameValid && isFormSongValid ? <Card nombre={nombre} cancion={cancion}/> : ''}
    </Fragment>
  );
}

export default App;

