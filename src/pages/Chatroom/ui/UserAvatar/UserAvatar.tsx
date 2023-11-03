import React, { FC } from 'react';
import { WebsocketContext } from '../../WebSocketProvider';
import { useContextSelector } from 'use-context-selector';
import { UserOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { avator } from './UserAvatar.module.css';

const UserAvatar: FC = () => {
  const loginUsers = useContextSelector(WebsocketContext, state => state.loginUsers);

  return (
    <div className="flex flex-wrap">
      {loginUsers.map((v, i) => (
        <div key={i}>
          {v.avatar ? (
            <Tooltip title={v.username}>
              <img className={avator} src={v.avatar} />
            </Tooltip>
          ) : (
            <Tooltip title={v.username}>
              <UserOutlined style={{ color: '#fff', fontSize: 28 }} />
            </Tooltip>
          )}
        </div>
      ))}
    </div>
  );
};

export { UserAvatar };
