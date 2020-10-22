import React from 'react';
import Formulario from './components/Formulario';
import ListadoTareas from './components/ListadoTareas';
import { Provider } from 'react-redux'
import store from './redux/store';


function App() {


  return (
    <Provider store={store}>
      <h4>Anotador de tareas</h4>
      <Formulario/>
      <h4>Listado</h4>
      <ListadoTareas/>
    </Provider>
  );
}

export default App;
