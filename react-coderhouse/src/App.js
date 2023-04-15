import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';
import { Pika } from './components/Pika/Pika';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";

function App() {

  const greeting1 = 'Welcome to the first version of React Js Course!';
  const greeting2 = 'Bienvenido a la primera versión del curso de React Js!';

  return (

    <div className="App">
      <Router>
        {/* Todos los componentes que estén dentro de Router se van a poder ver en todas las rutas */}
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:category' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path='/counter' element={<ItemCount />} />
          <Route path='/Pika' element={<Pika />} />
          <Route path='*' element={<Navigate to='/' />} /> // Esto es para que si no encuentra la ruta, redirija a la ruta principal
        </Routes>
      </Router>
    </div>
  )
}

export default App;