import "./App.css";
import ItemList from "./componentes/itemlist";
import Itemlistcontainer from "./componentes/itemlistcontainer";
import Navbar from "./componentes/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import itemsData from './itemlist.json';
import ItemDetail from "./componentes/itemdetail";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>BIENVENIDO</h1>} />
        <Route path="/category/:id" element={<Itemlistcontainer greeting={"HOLA MUNDO"} />} />
        <Route path="/item/:id" element={<ItemDetail/>} /> {/* Página de detalle del producto */}
      </Routes>
      <ItemList items={itemsData} /> {/* Pasa los datos a ItemList */}
    </BrowserRouter>
  );
}
export default App;
