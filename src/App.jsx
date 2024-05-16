import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import ItemDetail from './components/Item/ItemDetail';
import ItemListContainer from './components/Item/ItemListContainer';
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes> {/* Usa Routes en lugar de Switch */}
          {/* Ruta para el catálogo */}
          <Route path="/" element={<Catalog />} /> 

          <Route path="/item/:id" element={<ItemDetail />} /> 
        </Routes>
      </BrowserRouter>
      <ItemListContainer />
    </>
  );
}

export default App;

