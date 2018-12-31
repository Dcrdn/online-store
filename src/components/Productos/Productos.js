import React, { Component } from 'react';
import InfoProducto from '../InfoProducto/InfoProducto';
import logoPants from './img/pants.jpg';
import logoTshirt from './img/tshirt.jpg';
import logoHat from './img/hat.jpg';
import './Productos.css';

const descripciones = require('./descripciones');

class Productos extends Component {
    constructor(props){
        super(props);
    
        this.state={
            pants: {nombre: 'Pants',
                    precio: 5,
                    descripcion: descripciones.pants,
                    imagen:logoPants,
                    promo: "2x1"
                },
            tshirt:{nombre:'T-Shirt',
                    precio: 20,
                    descripcion: descripciones.tshirt,
                    imagen:logoTshirt,
                    promo:"3 or more at $19 each one"
            },
            hat:{nombre:'Hat',
                    precio: 7.5,
                    descripcion: descripciones.hat,
                    imagen:logoHat,
                    promo:""
            }
        }
      }

    render() { 
        return (
            <div class="contenedor-productos">
                <InfoProducto nombre={this.state.pants.nombre} precio={this.state.pants.precio} descripcion={this.state.pants.descripcion} imagen={this.state.pants.imagen} promo={this.state.pants.promo}/><hr></hr>
                <InfoProducto nombre={this.state.tshirt.nombre} precio={this.state.tshirt.precio} descripcion={this.state.tshirt.descripcion} imagen={this.state.tshirt.imagen} promo={this.state.tshirt.promo}/><hr></hr>
                <InfoProducto nombre={this.state.hat.nombre} precio={this.state.hat.precio} descripcion={this.state.hat.descripcion} imagen={this.state.hat.imagen} promo={this.state.hat.promo}/>
            </div>
        );
    }
}

export default Productos;