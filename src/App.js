import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
 
  return (
    <>
    <NavBar 
      list={[{title: 'Inicio'}, {title: 'Categorias'}, {title: 'Ofertas'}]}
      brand="Yclothing"
    />
    <ItemListContainer/>
    </>
  );
}

export default App;
