import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';

function App() {

  const greeting1 = 'Welcome to the first version of React Js Course!';
  const greeting2 = 'Bienvenido a la primera versión del curso de React Js!';

  return (
    <>
      <NavBar />
      <ItemListContainer saludo1={greeting1} saludo2={greeting2} />
      <Container />
    </>
  )
}

export default App;