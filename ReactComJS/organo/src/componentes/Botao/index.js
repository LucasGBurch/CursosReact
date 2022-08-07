import './Botao.css';

const Botao = (props) => {
  
  return (
    <button className="botao">
      {props.children}
    </button>
  ); // a tag botão dentro de um form, já dá submit por comportamento padrão!
}; // children para botar o que ficar dentro do componente do botão lá no formulário, para poder usar coisas diferentes, como imagens!

export default Botao;
