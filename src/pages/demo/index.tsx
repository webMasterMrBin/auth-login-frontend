import React, { FC, useState, Suspense } from 'react';
import Cookies from 'js-cookie';
import { Input, Button } from 'antd';
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

  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    }).then(res => res.json())
    .then(d => {
      window.alert(d.message);
    });
  }

  const handleCaptcha = () => {
    fetch('/api/captcha')
  }

  return (
    <div>
      <Input placeholder="555" size="large" />
      <div>
        <span>username</span>
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <span className={`text-blue-700 ml-2 ${testModule}`}>password</span>
        <Input value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <Button onClick={handleSignUp}>注册</Button>
      <Button onClick={handleSignIn}>登录</Button>

      <Button onClick={handleAuth}>登录成功后发起其他请求 校验登录token状态</Button>
      <Button onClick={handleLogout}>注销</Button>
      <Button onClick={handleCaptcha}>验证码</Button>
    </div>
  );
};

export { Demo };
