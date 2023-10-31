import React, { FC, useEffect, useState, useRef } from 'react';
import { createContext } from 'use-context-selector';

const WebsocketContext = createContext(null);

const WebSocketProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [chatContent, setChatContent] = useState([]);
  const [isStartReconnect, setIsStartReconnect] = useState(false);
  const reConnecWSCountRef = useRef(0);
  const isNeedConnectRef = useRef(true);

  useEffect(() => {
    const reConnectWS = () => {
      reConnecWSCountRef.current++;
      if (reConnecWSCountRef.current <= 5) {
        setIsStartReconnect(true);
        setTimeout(() => {
          connectWS();
        }, 3000);
      } else {
        setIsStartReconnect(false);
      }
    };

    const connectWS = () => {
      const ws = new WebSocket('ws://127.0.0.1:3000');
      setSocket(ws);

      ws.onopen = () => {
        console.log('连接已建立');
        setIsStartReconnect(false);
        ws.send(JSON.stringify({ type: 'logged' }));
      };

      // 当连接关闭时触发
      ws.onclose = () => {
        console.log('连接已关闭');
        if (isNeedConnectRef.current) {
          reConnectWS();
        }
      };

      ws.onerror = () => {
        console.log('连接错误');
        if (isNeedConnectRef.current) {
          reConnectWS();
        }
      };

      ws.onmessage = e => {
        console.log('接收到消息: ' + e.data);
        const { data, username } = JSON.parse(e.data || '{}');
        // 聊天内容;
        if (data?.type === 'chat') {
          setChatContent(pre => [...pre, { username, content: data.content }]);
        }
        // 登录聊天室ui提示
        if (data?.type === 'logged') {
          console.log(`${username} logged`);
        }
      };

      return ws;
    };

    const ws = connectWS();
    return () => {
      isNeedConnectRef.current = false;
      ws.close();
    };
  }, []);

  return (
    <WebsocketContext.Provider value={{ socket, isStartReconnect, setIsStartReconnect, chatContent }}>
      {children}
    </WebsocketContext.Provider>
  );
};

export { WebSocketProvider, WebsocketContext };
