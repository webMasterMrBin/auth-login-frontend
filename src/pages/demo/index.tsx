import React, { FC, useState } from 'react';
import { message } from 'antd';
import Cookies from 'js-cookie';

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

    // TODO并发登录
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

  return (
    <div>
      <div>
        <span>用户名</span>
        <input value={username} type="text" onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <span>密码</span>
        <input type="text" onChange={e => setPassword(e.target.value)} />
      </div>

      <button onClick={handleSignUp}>注册</button>
      <button onClick={handleSignIn}>登录</button>

      <button onClick={handleAuth}>登录成功后发起其他请求 校验登录token状态</button>
    </div>
  );
};

export { Demo };
