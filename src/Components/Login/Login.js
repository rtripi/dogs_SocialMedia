import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginPasswordReset from './LoginPasswordReset';
import LoginPasswordLost from './LoginPasswordLost';
import LoginCreate from './LoginCreate';
import { UserContext } from '../../UserContext';
import css from './Login.module.css';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={css.login}>
      <Head title="Login" />
      <div className={css.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
