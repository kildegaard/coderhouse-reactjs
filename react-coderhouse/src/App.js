import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Pika } from './components/Pika/Pika';
import { ItemList } from './components/ItemList/ItemList';

function App() {

  const greeting = 'Welcome to the first version of React Js Course!';

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={greeting} />
      <ItemCount />
      <Pika />
      <hr />
      <ItemList />
    </>
  )
}

export default App;