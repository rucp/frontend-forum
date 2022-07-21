// configuração das nossas requisições api
// instalar o axios

import axios from 'axios';

export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_APP_API_LOGIN,
    });
  }

  async login(dados) {
    // const { data } = await this.axios.post('/login', dados); => pra quando a api estiver funcionando
    
    let data = {
      user: {
        name: '',
        email: '',
        token: '',
      },
    };

    if (data) {
      localStorage.setItem('nome', data.user.name);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem(
        'token',
        data.user.token
      ); /* dentro da api, o token está dentro de token.token */

      return true;
    }
    return;
  }

  async register(dados) {
    return this.axios.post('/user', dados);
  }

  userAuthenticated() {
    return localStorage.getItem('token') != undefined ? true : false;
  }

  // implementar um butão que chama essa função dentro da página Home para que o usuário possa sair
  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
  }
}
