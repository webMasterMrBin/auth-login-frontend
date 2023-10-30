import React, { FC, useState, useEffect } from 'react';
import { container } from './ChatContent.module.css';
import { ChatContentItem } from './ChatContentItem';

const ChatContent: FC<{ socket: WebSocket }> = ({ socket }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (socket) {
      // 当接收到服务器发送的消息时触发
      socket.onmessage = e => {
        console.log('接收到消息: ' + e.data);
        setContent(pre => [...pre, e.data]);
      };
    }
  }, [socket]);

  return (
    <div className={container}>
      {content.map((v, i) => (
        <ChatContentItem key={i} data={v} />
      ))}
    </div>
  );
};

export { ChatContent };
