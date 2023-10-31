import React, { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { container } from './ChatContent.module.css';
import { ChatContentItem } from './ChatContentItem';
import { WebsocketContext } from '../../WebSocketProvider';

const ChatContent: FC = () => {
  const chatContent = useContextSelector(WebsocketContext, state => state.chatContent);

  return (
    <div className={container}>
      {chatContent.map((v, i) => (
        <ChatContentItem key={i} data={v} />
      ))}
    </div>
  );
};

export { ChatContent };
