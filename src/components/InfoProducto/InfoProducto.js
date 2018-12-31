import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchCostos} from "../../actions/productActions";
import {INCREMENT_HATS,INCREMENT_TSHIRTS,INCREMENT_PANTS} from '../../actions/types';
import "./InfoProducto.css";

class InfoProducto extends Component {
    tipoIncremento={
            'Pants':INCREMENT_PANTS,
            'T-Shirt':INCREMENT_TSHIRTS,
            'Hat': INCREMENT_HATS
    };
    render() {
        return (            
            <div class="infoProducto">
                <div class="imagen">
                    <img
                        width={100}
                        height={100}
                        src={this.props.imagen}
                    />
                </div>
                <div class="info">
                    <p><div class="titulo">{this.props.nombre+"        "}{"$"+this.props.precio}</div><div class="promo">{this.props.promo}</div>
                    <br></br>
                    {this.props.descripcion}</p>
                </div>
                <div class="botones">
                <button class="bt1" onClick={() => {this.props.dispatch(fetchCostos(this.props.nombre,[this.props.countPants,this.props.countTshirts,this.props.countHats],this.tipoIncremento[this.props.nombre]))}}>+</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        countPants: state.countPants,
        countTshirts:state.countTshirts,
        countHats:state.countHats,
        totalPants:state.totalPants,
        totalTshirts:state.totalTshirts,
        totalHats:state.totalHats,
        precios:state.precios
      };
  }
  
  export default connect(mapStateToProps)(InfoProducto);