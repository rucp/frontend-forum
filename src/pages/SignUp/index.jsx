import React, { useContext, useState } from 'react';
import styles from '../SignUp/index.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  validateEmail,
  validatePassword,
  validateCity,
  validateConfirmPassword,
  validateGender,
  validateName,
  validateOcupation,
} from '../../utils/validators';
import UserService from '../../Services/UserService';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContextModal } from '../../context/contextCadastro';

const userService = new UserService();


const SignUp = () => {
  const { isLoggedin } = useContext(useContextModal);
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (isLoggedin) {
        return alert('usuario ja logado');
      }
      setLoading(true);
      const data = await userService.register({
        name: form.name,
        email: form.email,
        password: form.password,
        passwordConfirmation: form.confirmPassword,
        ocupation: form.ocupation,
        roleId: 1,
      });

      if (data) {
        alert('Usuário Cadastrado com sucesso!');
        navigate('/login');
      }
      setLoading(false);
    } catch (err) {
      alert('algo deu errado com o Cadastro!' + err);
    }
  };

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validatorInput = () => {
    return (
      validateName(form.name) &&
      validateEmail(form.email) &&
      validatePassword(form.password)
    );
  };

  validateConfirmPassword(form.password, form.confirm);
  validateCity(form.city) &&
    validateGender(form.gender) &&
    validateOcupation(form.ocupation);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Faça seu Cadastro 📝</h1>
        <Input
          name="name"
          placeholder="Digite seu nome"
          onChange={handleChange}
          type="text"
        />
        <Input
          name="email"
          placeholder="Digite seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite uma senha (mínimo 6 caracteres)"
          onChange={handleChange}
          type="password"
        />
        <Input
          name="confirmPassword"
          placeholder="Confirme a senha"
          onChange={handleChange}
          type="password"
        />

        <Input
          name="ocupation"
          placeholder="Digite sua ocupação"
          onChange={handleChange}
          type="text"
        />

        <Button
          type="submit"
          text="Cadastrar"
          onClick={handleSubmit}
          disabled={loading === true || !validatorInput()}
        />
        <div className={styles.subContainerSignUp}>
          <p>Já possui conta?</p>
          <NavLink to="/login">
            <p className={styles.loginBtn}>Faça Login</p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
