import React, { FC } from 'react';
import { Header } from 'src/shared';
import { container } from './index.module.css';
import { ChatRoom } from './ui/Chatroom/Chatroom';
import { ChatLoggedUsers } from './ui/ChatLoggedUsers/ChatLoggedUsers';
import { WebSocketProvider } from './WebSocketProvider';

const Chat: FC = () => {
  return (
    <WebSocketProvider>
      <div>
        <Header />
        <div className={container}>
          <ChatRoom />
          <ChatLoggedUsers />
        </div>
      </div>
    </WebSocketProvider>
  );
};

export default Chat;
