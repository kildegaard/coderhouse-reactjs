import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';

function App() {

  const greeting = 'Welcome to the first version of React Js Course!';

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={greeting} />
      <Container />
    </>
  )
}

export default App;