import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/input';

import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

import css from './LoginForm.module.css';
import cssBtn from '../Forms/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className={css.perdeu} to={'/login/perdeu'}>
        Perdi a Senha
      </Link>
      <div className={css.cadastro}>
        <h2 className={css.subtitle}>Cadastre-se</h2>
        <p>Cadastre-se no site</p>
      </div>
      <Link className={cssBtn.button} to={'/login/criar'}>
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
