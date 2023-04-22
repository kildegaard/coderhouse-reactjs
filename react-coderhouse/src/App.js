import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Footer } from './components/Footer/Footer'

import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Pika } from './components/Pika/Pika';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import { CartContext } from './components/context/CartContext';
import { useState } from 'react';
import { CartScreen } from './components/CartScreen/CartScreen';

function App() {

  const [cart, setCart] = useState([])

  console.log(cart)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const calcularCantidad = () => {
    return cart.reduce((acum, item) => acum + item.counter, 0)
  }

  return (
    <CartContext.Provider value={{ addToCart, calcularCantidad }}>
      <div className="App">
        <Router>
          {/* Todos los componentes que estén dentro de Router se van a poder ver en todas las rutas */}
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/counter' element={<ItemCount />} />
            <Route path='/Pika' element={<Pika />} /> {/* Este componente no tiene nada que ver con el proyecto, es solo para probar que funciona el router */}
            <Route path='*' element={<Navigate to='/' />} /> {/* Esto es para que si no encuentra la ruta, redirija a la ruta principal */}
            <Route path='/cart' element={<CartScreen />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartContext.Provider>
  )
}

export default App;