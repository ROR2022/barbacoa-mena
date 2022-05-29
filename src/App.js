import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Galeria from './components/Galeria';
import Menu from './components/Menu';
import Home from './components/Home';
import Pedido from './components/Pedido';

function App() {
  
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/pedido' element={<Pedido/>}/>
          <Route path='/galeria' element={<Galeria/>}/>
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
