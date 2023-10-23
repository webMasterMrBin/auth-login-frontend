import React, { FC } from 'react';
import { loginContainer } from './index.module.css';
import classnames from 'classnames';
import { LoginForm } from './ui/LoginForm/LoginForm';

const Login: FC = () => {
  return (
    <div className={classnames(loginContainer, 'flex', 'justify-between', 'items-center')}>
      <div className="text-white text-4xl self-start">
        Welcome my login system
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
