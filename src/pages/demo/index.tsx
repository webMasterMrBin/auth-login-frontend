import React, { FC, useState, Suspense } from 'react';
import Cookies from 'js-cookie';
import { Input } from 'antd';
import { testModule } from './index.module.css';

const Demo: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(res => res.json())
      .then(d => {
        window.alert(d.message);
      });
  };

  const handleSignIn = () => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(res => res.json())
      .then(d => {
        window.alert(d.message);
      });
  };

  const handleAuth = () => {
    fetch('/api/test', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
      .then(res => res.json())
      .then(d => {
        window.alert(d.message);
      });
  };

  const handleTestSession = () => {
    fetch('/api/session');
  }

  return (
    <div>
      <Input placeholder="555" size="large" />
      <div>
        <span>username</span>
        <input value={username} type="text" onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <span className={`text-blue-700 ml-2 ${testModule}`}>password</span>
        <input type="text" onChange={e => setPassword(e.target.value)} />
      </div>

      <button onClick={handleSignUp}>注册</button>
      <button onClick={handleSignIn}>登录</button>

      <button onClick={handleAuth}>登录成功后发起其他请求 校验登录token状态</button>
      <button onClick={handleTestSession}>test session</button>
    </div>
  );
};

export { Demo };
