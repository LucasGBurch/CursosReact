import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { busca } from "../api/api";

const ListaPost = ({ url }) => {

  // Estado inicial do Hook useState: array vazio
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // useEffect evita efeito colateral de recursão (ficar repetindo a busca no componente)
    busca(url, setPosts);
  }, [url]); // Atualiza quando alteramos url

  return (
    <section className="posts container">
      { // este map, por comportamento do return/arrow:
        posts.map((post) => ( // funfa com parênteses, e não chaves.
          <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`}>
            <article key={post.id}>
              <h3 className="cartao-post__titulo">{post.title}</h3>
              <p className="cartao-post__meta">{post.metadescription}</p>
            </article>
          </Link>
        ))
      }
    </section>
  );
};

export default ListaPost;
