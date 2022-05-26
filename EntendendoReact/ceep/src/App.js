import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/";
import FormularioCadastro from "./components/FormularioCadastro/";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    }; // State faz o React Renderizar novamente os objetos atualizados;
  } // Renderizar diretamente sobrecarregaria o navegador, por isso fica por conta do React;

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota]; // Associa nova nota via Destructuring
    const novoEstado = {
      notas: novoArrayNotas,
    }; // State é chamado abaixo na forma de um objeto com seu novo estado:
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}
// Essas chamadas dentro do render são tipo: new ListaDeNotas({notas:this.notas})
// Ou seja, é como se um objeto estivesse sendo instanciado!
export default App;
