import React, { FC, useRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { container, submit } from './ChatInput.module.css';
import { WebsocketContext } from '../../WebSocketProvider';

const ChatInput: FC = () => {
  const socket = useContextSelector(WebsocketContext, state => state.socket);
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    socket.send(JSON.stringify({ type: 'chat', content: inputRef.current.value }));
    inputRef.current.value = '';
  };

  return (
    <form className={container} onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="发送消息" />
      <button type="submit" className={submit}>
        chat
      </button>
    </form>
  );
};

export { ChatInput };
