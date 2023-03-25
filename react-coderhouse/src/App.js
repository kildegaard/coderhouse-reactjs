import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  const greeting = 'Holiiii'

  return (
    <>
      <div>
        <NavBar />
        {/* <ItemListContainer saludo='Hola Mundo' /> */}
        <ItemListContainer saludo={greeting} />
      </div>
    </>
  )
}

export default App;