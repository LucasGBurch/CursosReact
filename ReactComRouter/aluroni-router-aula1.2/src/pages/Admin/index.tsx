import styles from 'Admin.module.scss';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Enunciado Exercício da aula final:
Crie uma rota /admin que recebe um parâmetro user,
renderiza um componente Admin
(que supostamente seria uma página de administração)
e que só permite um usuário específico
(ou seja, o parâmetro user deve ser igual a um usuário da sua escolha),
 e caso não for esse usuário, que redireciona para a página principal.
*/
function Admin() {
  const params = useParams();
  if (params.user !== 'usuario') {
    return <Navigate to='/' />
  }
  return (
    <>
      <h1> Área Restrita! </h1>
    </>
  );
}

function PaginaInicial() {
  return (
    <h1>Página Inicial</h1>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PaginaInicial />} />
        <Route path='/admin/:user' element={<Admin />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
