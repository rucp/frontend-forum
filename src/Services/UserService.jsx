// configuração das nossas requisições api
// instalar o axios;

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://forum-db-lets-code.herokuapp.com",
    });
  }
  async login(dados) {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const  ret  = await this.axios.post('/login', JSON.stringify(dados), customConfig); 
    console.log('RETORNO LOGIN',ret)
    if (ret.status === 201) {
      localStorage.setItem('nome', ret.data.name);
      localStorage.setItem('email', ret.data.email);
      localStorage.setItem('profissao', ret.data.ocupation);
      localStorage.setItem('acess_token', ret.data.access_token); /* dentro da api, o token está dentro de token.token */
    }
    return ret
  }

  async register(dados) {
    let variavel = await this.axios.post('/users', dados)
    console.log(variavel)
    return variavel
    
  }

  isAuthenticated() {
    return localStorage.getItem('acess_token') != undefined ? true : false;
  }
  
  // implementar um butão que chama essa função dentro da página Home para que o usuário possa sair
  async logout() {
  
    localStorage.removeItem('acess_token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('profissao');
  
  }

  async createPost(dados){
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('acess_token')
      }
    };
    const  ret  = await this.axios.post('/posts', {'message': dados}, customConfig); 
    return ret;
  }

  async createComment(dados) {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('acess_token')
      }
    };
    const  ret  = await this.axios.post('/comments', dados, customConfig); 
    return ret;
  }

  async deleteComment(commentID) {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('acess_token')
      }
    };
    const  ret  = await this.axios.delete(`/comments/${commentID}`,  customConfig); 
    return ret;
  }

  async getAllPosts() {
    const  ret  = await this.axios.get('/posts'); 
    return ret;
  }
}
