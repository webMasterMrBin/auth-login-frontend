import React, { FC, useEffect, useState } from 'react';
import { ChatContent } from '../ChatContent/ChatContent';
import { ChatInput } from '../ChatInput/ChatInput';

const ChatRoom: FC = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:3000');
    setSocket(ws);

    ws.onopen = e => {
      console.log('连接已建立');
      // 发送数据到服务器
      // ws.send('Hello Server!');
    };

    // 当连接关闭时触发
    ws.onclose = e => {
      console.log('连接已关闭');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <ChatContent socket={socket} />
      <ChatInput socket={socket} />
    </>
  );
};

export { ChatRoom };
