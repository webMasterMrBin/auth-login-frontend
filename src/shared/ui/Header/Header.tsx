import React, { FC, useState, useReducer, useEffect } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useGetUserInfo } from '../../lib/api';
import { header } from './Header.module.css';

const Header: FC = () => {
  const { data } = useGetUserInfo();

  const handleLogout = async () => {
    window.location.href = '/api/logout';
  };

  return (
    <div className={header}>
      <div>hello</div>
      <div className="flex">
        <div>{data?.data}</div>
        <Tooltip title="logout">
          <LogoutOutlined className="cursor-pointer ml-2" onClick={handleLogout} />
        </Tooltip>
      </div>
    </div>
  );
};

export { Header };
