import React, { useEffect, useState } from "react";
import { busca } from "../api/api";
import { useHistory, useParams } from "react-router-dom";
import '../assets/css/post.css';

const Post = () => {
  let history = useHistory();
  // Use params para o :id do path para rota do Post
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPost)
      .catch(() => {
        // Catch caso o id seja inválido!!
        history.push('/404') // caso path não exista
      }) // vai para o componente da Pagina404
  }, [id]) // Atualiza quando alteramos id

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;

