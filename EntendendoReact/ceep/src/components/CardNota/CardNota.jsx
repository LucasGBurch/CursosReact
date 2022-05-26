import React, { Component } from "react";
import "./estilo.css";

class CardNota extends Component {
  state = {};
  render() {
    return (
      // Usamos CLASSNAME para não dar conflito com class do JS
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
