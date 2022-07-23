import React, { useState } from 'react';
import styles from '../Login/index.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { validateEmail, validatePassword } from '../../utils/validators';
import UserService from '../../Services/UserService';
import { NavLink, useNavigate } from 'react-router-dom';

const userService = new UserService();

const Login = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await userService.login(form);
      console.log('response do Login', response);
      if (response === true) {
        alert('Usuário logado com sucesso!');
        navigate('/home');
      }
      setLoading(false);
    } catch (err) {
      alert('algo deu errado!' + err);
    }
  };

  const handleChange = (event) => {
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
          <NavLink to="/signup">Cadastrar</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
