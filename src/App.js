import './App.css';
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import ItemListContainer from '../src/views/ItemListContainer';
import ItemDetailConatiner from '../src/views/ItemDetailContainer';

function App() {
 
  return (
    <>
    <Router>
      <NavBar 
      list={[{title: 'Invierno'}, {title: 'Verano'}, {title: 'Primavera'}, {title: 'Otoño'},]}
      brand="Yclothing"
     />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailConatiner />} />
          <Route path="/category/:title" element={<ItemListContainer />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
