import axios from 'axios';


export const api = axios.create({
  baseURL: 'http://localhost:5000'
});

// Busca de dados com JS assíncrono:
// setDado == setPosts do componente ListaPost
export const busca = async(url, setDado) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};
