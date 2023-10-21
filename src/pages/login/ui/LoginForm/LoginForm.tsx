import React, { FC, useState, useReducer, useEffect } from 'react';
import { Input } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Google, Github } from './Icons';
import { container } from './LoginForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { CustomErrorMessage } from 'src/shared/ui/CustomErrorMessage/CustomErrorMessage';
import classname from 'classnames';

const LoginForm: FC = () => {
  // 是否是注册状态 默认登录态
  const [isRegister, toggleType] = useReducer(state => !state, false);
  const {
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  console.log('errors', errors);

  const onSubmit = v => {
    console.log(v);
  };

  const handleToggleType = () => {
    toggleType();
    reset();
  };

  const loginText = isRegister ? 'Sign up' : 'Sign in';

  return (
    <div className={container}>
      <div className="text-4xl ext-gray-300">{loginText}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2 mt-4">Username</div>
        <Controller
          name="username"
          rules={{
            required: 'username is required',
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'contains special characters or whitespace',
            },
          }}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              minLength={6}
              showCount
              maxLength={12}
              value={value}
              onChange={onChange}
              prefix={<UserOutlined />}
              size="large"
              placeholder="username"
            />
          )}
        />
        <CustomErrorMessage errors={errors} name="username" />

        <div className="mb-2 mt-4">Password</div>
        <Controller
          name="password"
          rules={{
            required: 'password is required',
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'contains special characters or whitespace',
            },
          }}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input.Password
              minLength={6}
              showCount
              maxLength={12}
              value={value}
              onChange={onChange}
              prefix={<KeyOutlined />}
              size="large"
              placeholder="password"
            />
          )}
        />
        <CustomErrorMessage errors={errors} name="password" />

        {isRegister && (
          <>
            <div className="mb-2 mt-4">Confirm Password</div>
            <Controller
              control={control}
              rules={{
                validate: value => {
                  const password = getValues('password');
                  return password !== value && 'check confirm password';
                },
                required: 'confirm password is required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: 'contains special characters or whitespace',
                },
              }}
              name="confirmPassword"
              render={({ field: { value, onChange } }) => (
                <Input.Password
                  minLength={6}
                  showCount
                  maxLength={12}
                  value={value}
                  onChange={onChange}
                  prefix={<KeyOutlined />}
                  size="large"
                  placeholder="confirm password"
                />
              )}
            />
            <CustomErrorMessage errors={errors} name="confirmPassword" />
          </>
        )}

        <button type="submit" className="rounded-xl w-full h-12 bg-cyan-600 text-white hover:text-white mt-4">
          {loginText}
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-400">{isRegister ? 'Already have an account?' : `Don't have an account?`}</span>
          <span className="ml-2 text-sky-400 cursor-pointer" onClick={handleToggleType}>
            {isRegister ? 'Sign in' : 'Sign up'}
          </span>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex-1 border" />
          <span className="mr-4 ml-4">or</span>
          <div className="flex-1 border" />
        </div>

        <div className="flex justify-around mt-2">
          <Google />
          <Github />
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
