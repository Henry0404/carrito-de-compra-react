import { Component } from "react";
import Button from "./Button";
const style = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
    with: "30%",
    padding: "15px 20px",
    borderRaduios: "10px",
  },
  img: {
    with: "100%",
  },
};

class Producto extends Component {
  render() {
    //console.log(this.props);
    const { producto, agregarAlCarro } = this.props;
    return (
      <div style={style.producto}>
        <img style={style.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          agregar al carro
        </Button>
      </div>
    );
  }
}
export default Producto;
