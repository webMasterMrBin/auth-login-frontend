import React, { FC, useState, useReducer, useEffect } from 'react';
import { useGetUserInfo } from '../../lib/api';
import { header } from './Header.module.css';

const Header: FC = () => {
  const { data } = useGetUserInfo();

  return (
    <div className={header}>
      <div>hello</div>
      <div>{data?.data}</div>
    </div>
  );
};

export { Header };
