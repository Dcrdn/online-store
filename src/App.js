import React, { Component } from 'react';
import './App.css';
import Productos from './components/Productos/Productos';
import Carrito from './components/Carrito/Carrito';

class App extends Component {

  render() {
    return (
      <div>
        <div class="productos"><Productos /></div>
        <div class="carrito"><Carrito/></div>
    </div>
    );
  }
}

export default App;
