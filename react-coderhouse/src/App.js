import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';
import { Pika } from './components/Pika/Pika';

function App() {

  const greeting1 = 'Welcome to the first version of React Js Course!';
  const greeting2 = 'Bienvenido a la primera versión del curso de React Js!';

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={greeting1} />
      <ItemCount />
      <Pika />
    </>
  )
}

export default App;