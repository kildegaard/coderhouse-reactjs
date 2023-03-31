import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  const greeting = 'Welcome to the first version of React Js Course!';

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer saludo={greeting} />
      </div>
    </>
  )
}

export default App;