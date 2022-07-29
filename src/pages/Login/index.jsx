import React, { useContext, useState } from 'react';
import UserServices from '../../Services/UserService';
import styles from '../Login/index.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { validateEmail, validatePassword } from '../../utils/validators';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContextModal } from '../../context/contextCadastro';

const userService = new UserServices()

const Login = () => {
  const { estaLogado, isLoggedin } = useContext(useContextModal);
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await userService.login({
        email: form.email,
        password: form.password,
      });
      if(data){
        alert('Usuário logado com sucesso!');
        setLoading(true)
        estaLogado()
        navigate('/home');
      }
    } catch (err) {
      alert('algo deu errado!' + err);
    }
  };

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validatorInput = () => {
    return validateEmail(form.email) && validatePassword(form.password);
  };

  return (
    <div className={styles.containerLogin}>
      <form className={styles.form}>
        <h1>Faça o seu Login 👋</h1>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Button
          type="submit"
          text="Entrar!"
          onClick={handleSubmit}
          disabled={loading === true || !validatorInput()}
        />
        <div className={styles.subContainerSign}>
          <p>Não possui conta?</p>
          <NavLink to="/signup">
            <p className={styles.signupBtn}>Cadastrar</p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
