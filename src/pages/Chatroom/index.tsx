import React, { FC } from 'react';
import classnames from 'classnames';
import { Header } from 'src/shared';
import { container } from './index.module.css';
import { ChatRoom } from './ui/Chatroom/Chatroom';

const Chat: FC = () => {
  return (
    <div>
      <Header />
      <div className={container}>
        <ChatRoom />
      </div>
    </div>
  );
};

export default Chat;
