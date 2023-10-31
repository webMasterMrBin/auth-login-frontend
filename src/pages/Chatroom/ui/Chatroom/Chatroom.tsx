import React, { FC, useEffect, useState, useRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatContent } from '../ChatContent/ChatContent';
import { ChatInput } from '../ChatInput/ChatInput';
import { WebsocketContext } from '../../WebSocketProvider';

const ChatRoom: FC = () => {
  const isStartReconnect = useContextSelector(WebsocketContext, state => state.isStartReconnect);
  return (
    <div className="flex-1">
      {isStartReconnect && <span className="text-white">something wrong reconnect....</span>}
      {/* {reConnecWSCountRef.current > 5 && <span className="text-white">can't connect chat server, please retry</span>} */}
      <ChatContent />
      <ChatInput />
    </div>
  );
};

export { ChatRoom };
