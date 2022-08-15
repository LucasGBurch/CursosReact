import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import '../assets/css/blog.css';
import { busca } from '../api/api';
import SubCategoria from './SubCategoria';

const Categoria = () => {

  // Use params para o :id do path para rota da Categoria
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          subcategorias.map((subcategoria) => (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>
                {subcategoria}
              </Link>
            </li>
          ))
        }
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>

        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
