import React, { FC, useRef } from 'react';
import { container, submit } from './ChatInput.module.css';

const ChatInput: FC<{ socket: WebSocket }> = ({ socket }) => {
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    socket.send(inputRef.current.value);
  };

  return (
    <form className={container} onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="发送消息" />
      <button type="submit" className={submit}>chat</button>
    </form>
  );
};

export { ChatInput };
