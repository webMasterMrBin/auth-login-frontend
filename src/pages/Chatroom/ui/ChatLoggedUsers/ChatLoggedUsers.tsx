import React, { FC } from 'react';
import { WebsocketContext } from '../../WebSocketProvider';
import { useContextSelector } from 'use-context-selector';
import { container } from './ChatLoggedUsers.module.css';
import { UserAvatar } from '../UserAvatar/UserAvatar';

const ChatLoggedUsers: FC = () => {
  const usersCount = useContextSelector(WebsocketContext, state => state.usersCount);
  return (
    <div className={container}>
      <div className="text-slate-200">
        Welcome to chat room!
      </div>
      <div className="text-slate-200">
        There are {usersCount} users
      </div>

      <UserAvatar />
    </div>
  );
};

export { ChatLoggedUsers };
