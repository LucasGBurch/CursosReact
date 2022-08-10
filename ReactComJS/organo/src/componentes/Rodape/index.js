import './Rodape.css';

const Rodape = () => {
  return (
    <div className='rodape'>
      <div className='rodape__redes'>

        <a href="facebook.com">
          <img src='/imagens/fb.png' alt='Logo facebook'></img>
        </a>
        <a href="twitter.com">
          <img src='/imagens/tw.png' alt='Logo twitter'></img>
        </a>
        <a href="instagram.com">
          <img src='/imagens/ig.png' alt='Logo instagram'></img>
        </a>

      </div>
      <img className='rodape__logo' src='/imagens/logo.png' alt='Logo do Alura Organograma'></img>
      <span className='rodape__creditos'>Desenvolvido por Alura</span>
    </div>
  )
};

export default Rodape;
