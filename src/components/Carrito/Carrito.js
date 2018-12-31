import React, { Component } from 'react';
import { connect } from "react-redux";
import payment from './payment.png';

import './Carrito.css';

class Carrito extends Component {
    

    render() {
        return (
            <div class="contenedor-carrito">
                <div class="summary">SUMMARY</div>
                <hr></hr>

                <div class="items"> 
                    <div class="num-items">{this.props.countPants}
                    </div>
                        <div class="left-item">PANTS</div><div class="right-item">{"$"+this.props.totalPants} </div>
                </div>
                <hr></hr>
                <div class="items">
                <div class="num-items">{this.props.countTshirts}
                    </div> 
                    <div class="left-item">T-SHIRT</div><div class="right-item">{"$"+this.props.totalTshirts}</div>
                </div>
                <hr></hr>
                <div class="items">
                    <div class="num-items">{this.props.countHats}
                    </div> 
                    <div class="left-item">HAT</div><div class="right-item">{"$"+this.props.totalHats}</div>
                </div>
                <hr></hr>
                <div class="items">
                    <div class="num-items">
                    </div> 
                    <div class="left-item">SHIPPING</div><div class="right-item free">FREE</div>
                </div>
                <hr></hr>
                <div class="items">
                <div class="num-items"></div> 
                    <div class="left-item" total>TOTAL</div><div class="right-item total">{"$"+this.props.precios}</div>
                </div>
                <div class="items" title="Pago no disponible por el momento">
                <img src={payment}/>
                </div>
            </div>
        );
    }
}

//export default Carrito;
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
  
  export default connect(mapStateToProps)(Carrito);