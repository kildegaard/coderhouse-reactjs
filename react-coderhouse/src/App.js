import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Pika } from './components/Pika/Pika';

function App() {

  const greeting = 'Welcome to the first version of React Js Course!';

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={greeting} />
      <ItemCount />
      <Pika />
    </>
  )
}

export default App;