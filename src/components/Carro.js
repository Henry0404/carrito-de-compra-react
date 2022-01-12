import { Component } from "react";
import BubbleAler from "./BubbleAler";
import DetallesCarro from "./DetallesCarro";

const style = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: { position: "relative", left: 12, top: 20 },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={style.bubble}>
          {cantidad !== 0 ? <BubbleAler value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={style.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}
export default Carro;
