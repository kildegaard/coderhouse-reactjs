import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';
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
    // <>
    //   <NavBar />
    //   <ItemListContainer saludo1={greeting1} saludo2={greeting2} />
    //   <Container />
    // </>

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          {/* <Route path='/counter' element={<ItemCount />} /> */}
          {/* <Route path='/Pika' element={<Pika />} /> */}
          <Route path='*' element={<Navigate to='/' />} /> // Esto es para que si no encuentra la ruta, redirija a la ruta principal
        </Routes>
      </Router>
    </div>
  )
}

export default App;