import React, { FC, useState, useReducer, useEffect } from 'react';
import { Input } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Google, Github } from './Icons';
import { container } from './LoginForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const LoginForm: FC = () => {
  // 是否是注册状态 默认登录态
  const [isRegister, toggleType] = useReducer(state => !state, false);
  const {
    register,
    handleSubmit,
    formState,
    watch,
    control,
    getFieldState,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  console.log('errors', errors);

  const onSubmit = v => {
    console.log(v);
  };

  console.log('render');

  const loginText = isRegister ? 'Sign up' : 'Sign in';

  return (
    <div className={container}>
      <div className="text-4xl ext-gray-300">{loginText}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 mb-2">Username</div>
        <Controller
          name="username"
          rules={{
            required: 'username is required',
            minLength: {
              value: 6,
              message: 'username cannot less than 20 characters',
            },
            maxLength: {
              value: 12,
              message: 'username cannot exceed 12 characters',
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'username contains special characters or whitespace',
            },
          }}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} prefix={<UserOutlined />} size="large" placeholder="username" />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ messages }) => {
            return (
              messages &&
              Object.entries(messages).map(([type, message]: [string, string]) => <p className="error-message" key={type}>{message}</p>)
            );
          }}
        />

        <div className="mt-6 mb-2">Password</div>
        <Controller
          name="password"
          rules={{
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'password cannot less than 20 characters',
            },
            maxLength: {
              value: 12,
              message: 'password cannot exceed 12 characters',
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'password contains special characters or whitespace',
            },
          }}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input.Password
              value={value}
              onChange={onChange}
              prefix={<KeyOutlined />}
              size="large"
              placeholder="password"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) => {
            return (
              messages &&
              Object.entries(messages).map(([type, message]: [string, string]) => <p className="error-message" key={type}>{message}</p>)
            );
          }}
        />

        {isRegister && (
          <>
            <div className="mt-6 mb-2">Confirm Password</div>
            <Input.Password prefix={<KeyOutlined />} size="large" placeholder="confirm password" />
          </>
        )}

        <button type="submit" className="rounded-xl mt-6 w-full h-12 bg-cyan-600 text-white hover:text-white">
          {loginText}
        </button>

        <div className="text-center mt-6">
          <span className="text-gray-400">{isRegister ? 'Already have an account?' : `Don't have an account?`}</span>
          <span className="ml-2 text-sky-400 cursor-pointer" onClick={toggleType}>
            {isRegister ? 'Sign in' : 'Sign up'}
          </span>
        </div>

        <div className="flex items-center mt-6">
          <div className="flex-1 border" />
          <span className="mr-4 ml-4">or</span>
          <div className="flex-1 border" />
        </div>

        <div className="flex justify-around mt-4">
          <Google />
          <Github />
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
