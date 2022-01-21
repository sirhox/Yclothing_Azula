import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar 
      list={[{title: 'Inicio'}, {title: 'Categorias'}, {title: 'Ofertas'}]}
      brand="Yclothing"
    />
    <div className="App">
      <label>Contenido</label>
    </div>
    </>
  );
}

export default App;
