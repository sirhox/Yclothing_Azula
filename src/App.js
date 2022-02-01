import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  let items = {
    title:"Remera negra", 
    text:"Una remera negra perfecta para usar", 
    src:'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa_1.jpg'
  }
  return (
    <>
    <NavBar 
      list={[{title: 'Inicio'}, {title: 'Categorias'}, {title: 'Ofertas'}]}
      brand="Yclothing"
    />
    <ItemListContainer items={items}/>
    <ItemCount stock={5} initial={1}/>
    <div className="App">
      <label>Contenido</label>
    </div>
    </>
  );
}

export default App;
